import { birthdayConfig } from "@/config/birthday";

let audioInstance: HTMLAudioElement | null = null;
let retryAttached = false;

/**
 * Returns the singleton HTMLAudioElement instance on the client.
 */
export function getAudioInstance(): HTMLAudioElement | null {
  if (typeof window === "undefined") return null;

  if (!audioInstance) {
    audioInstance = new Audio(birthdayConfig.audio.src);
    audioInstance.preload = "auto";
    audioInstance.loop = true;
    audioInstance.volume = 0.85;
  }

  return audioInstance;
}

/**
 * Starts background birthday music playback.
 * Handles browser autoplay policies and handles the play() promise.
 * If blocked, registers a single-time fallback on the very next user interaction.
 */
export function playBirthdayMusic(): Promise<boolean> {
  const audio = getAudioInstance();
  if (!audio) return Promise.resolve(false);

  // If already playing, do not restart
  if (!audio.paused && audio.currentTime > 0) {
    return Promise.resolve(true);
  }

  return audio
    .play()
    .then(() => {
      return true;
    })
    .catch((err) => {
      // Browser autoplay policy prevented playback
      console.warn("Audio autoplay blocked by browser, queued for next interaction:", err);

      // Register one clean, single-use retry tied to the next user interaction
      if (!retryAttached && typeof window !== "undefined") {
        retryAttached = true;
        const retryPlay = () => {
          if (audioInstance && audioInstance.paused) {
            audioInstance
              .play()
              .then(() => {
                // Success on user interaction
              })
              .catch((retryErr) => {
                console.warn("Audio playback retry was not permitted:", retryErr);
              });
          }
          window.removeEventListener("click", retryPlay);
          window.removeEventListener("touchstart", retryPlay);
        };

        window.addEventListener("click", retryPlay, { once: true, passive: true });
        window.addEventListener("touchstart", retryPlay, { once: true, passive: true });
      }

      return false;
    });
}
