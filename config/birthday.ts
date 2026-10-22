export interface PhotoMemory {
  id: string;
  src: string;
  caption?: string;
  orientation: "portrait" | "landscape" | "tall";
  aspectRatio: string; // e.g. "3/4", "9/16", "16/9", "4/3"
  featured?: boolean; // Highlighted editorial shot
  style?: "editorial" | "polaroid" | "cinematic";
  rotation?: number; // subtle angle for polaroid (-2 to +2 deg)
}

export interface BirthdayWish {
  id: number;
  iconName: string;
  title: string;
  description?: string;
}

export interface BirthdayConfig {
  recipientName: string;
  celebrationDate: string; // "October 21, 2026"
  credentials: {
    expectedEmail: string;
    expectedPassword: string;
  };
  loginScreen: {
    badge: string;
    heading: string;
    subheading: string;
    emailLabel: string;
    emailPlaceholder: string;
    emailHint?: string;
    passwordLabel: string;
    passwordPlaceholder: string;
    submitButtonText: string;
    hintText: string;
    errorMessage: string;
  };
  hero: {
    greeting: string;
    subtitle: string;
    titleLine1: string;
    titleLine2: string;
    tagline: string;
    scrollButtonText: string;
  };
  gallery: {
    title: string;
    subtitle: string;
    description: string;
    memories: PhotoMemory[];
  };
  letter: {
    sectionTitle: string;
    envelopePreviewPrompt: string;
    salutation: string;
    paragraphs: string[];
    closing: string;
    signature: string;
  };
  wishes: {
    sectionTitle: string;
    subtitle: string;
    items: BirthdayWish[];
  };
  finalSurprise: {
    eyebrow: string;
    mainQuote: string;
    birthdayWish: string;
    signature: string;
    replayButtonText: string;
  };
  audio: {
    src: string;
    title: string;
  };
}

export const birthdayConfig: BirthdayConfig = {
  recipientName: "Pillyaaaa💞",
  celebrationDate: "October 21, 2026",
  
  credentials: {
    expectedEmail: "warekarsnehal2110@gmail.com",
    expectedPassword: "2798879",
  },

  loginScreen: {
    badge: "A LITTLE SOMETHING JUST FOR YOU",
    heading: "Someone made something special for you...",
    subheading: "Before you step inside, there's just one little secret to uncover.",
    emailLabel: "Your email",
    emailPlaceholder: "Enter your email address",
    passwordLabel: "The secret",
    passwordPlaceholder: "Can you guess it?",
    submitButtonText: "Unlock Your Surprise ✨",
    hintText: "The answer might be closer to you than you think.",
    errorMessage: "Not quite! Try another little guess. 💗",
  },

  hero: {
    greeting: "Hey, Snehal...",
    subtitle: "Today is all about you.",
    titleLine1: "HAPPY BIRTHDAY",
    titleLine2: "PILLYAAAA💞",
    tagline: "To the girl who makes ordinary moments feel extraordinary.",
    scrollButtonText: "There's more waiting for you ↓",
  },

  gallery: {
    title: "Every Little Moment",
    subtitle: "A story told in smiles, laughs, and quiet memories",
    description: "Every love story has a thousand little moments. Today, we celebrate yours.",
    memories: [
      {
        id: "mem-01",
        src: "/images/couple/IMG20260709092606.jpg.jpeg",
        caption: "Golden hour memories with you",
        orientation: "landscape",
        aspectRatio: "4/3",
        featured: true,
        style: "cinematic",
      },
      {
        id: "mem-02",
        src: "/images/couple/IMG_0695.jpg",
        caption: "That smile that lights up everything",
        orientation: "portrait",
        aspectRatio: "3/4",
        style: "polaroid",
        rotation: -1.5,
      },
      {
        id: "mem-03",
        src: "/images/couple/IMG-20260625-WA0012.jpg.jpeg",
        caption: "Simple, effortless moments",
        orientation: "portrait",
        aspectRatio: "3/4",
        style: "editorial",
      },
      {
        id: "mem-04",
        src: "/images/couple/IMG_20260521_013026.jpg.jpeg",
        caption: "Quiet evenings together",
        orientation: "landscape",
        aspectRatio: "16/9",
        featured: true,
        style: "cinematic",
      },
      {
        id: "mem-05",
        src: "/images/couple/IMG20251201122418.jpg.jpeg",
        caption: "The warmth of your laughter",
        orientation: "portrait",
        aspectRatio: "3/4",
        style: "polaroid",
        rotation: 1.2,
      },
      {
        id: "mem-06",
        src: "/images/couple/IMG_2198.jpg",
        caption: "Every glance holds a quiet spark",
        orientation: "portrait",
        aspectRatio: "3/4",
        style: "editorial",
      },
      {
        id: "mem-07",
        src: "/images/couple/IMG-20260323-WA0061.jpg.jpeg",
        caption: "Candid moments of pure joy",
        orientation: "portrait",
        aspectRatio: "9/16",
        style: "polaroid",
        rotation: -2,
      },
      {
        id: "mem-08",
        src: "/images/couple/IMG20251215150213.jpg.jpeg",
        caption: "Forever capturing that glow",
        orientation: "portrait",
        aspectRatio: "3/4",
        style: "editorial",
      },
      {
        id: "mem-09",
        src: "/images/couple/IMG_2201-1.jpg",
        caption: "The world feels softer right here",
        orientation: "portrait",
        aspectRatio: "3/4",
        style: "polaroid",
        rotation: 1.8,
      },
      {
        id: "mem-10",
        src: "/images/couple/IMG_0111.JPG.jpeg",
        caption: "Little everyday sweetness",
        orientation: "portrait",
        aspectRatio: "9/16",
        style: "polaroid",
        rotation: -1,
      },
      {
        id: "mem-11",
        src: "/images/couple/IMG_2229.jpg",
        caption: "With you, time stands still",
        orientation: "portrait",
        aspectRatio: "3/4",
        style: "editorial",
      },
      {
        id: "mem-12",
        src: "/images/couple/IMG_0086.JPG.jpeg",
        caption: "Unfiltered smiles",
        orientation: "portrait",
        aspectRatio: "9/16",
        style: "polaroid",
        rotation: 2,
      },
      {
        id: "mem-13",
        src: "/images/couple/IMG_2235.jpg",
        caption: "My favorite place to be",
        orientation: "portrait",
        aspectRatio: "3/4",
        style: "editorial",
      },
      {
        id: "mem-14",
        src: "/images/couple/IMG_3141.JPG.jpeg",
        caption: "Endless laughter and talks",
        orientation: "portrait",
        aspectRatio: "9/16",
        style: "polaroid",
        rotation: -1.2,
      },
      {
        id: "mem-15",
        src: "/images/couple/IMG_20260928_211634.jpg.jpeg",
        caption: "Making memories one day at a time",
        orientation: "portrait",
        aspectRatio: "3/4",
        style: "editorial",
      },
      {
        id: "mem-16",
        src: "/images/couple/IMG_3661.jpg",
        caption: "Soft light and warm hearts",
        orientation: "portrait",
        aspectRatio: "3/4",
        style: "polaroid",
        rotation: 1.5,
      },
      {
        id: "mem-17",
        src: "/images/couple/Snapchat-108509037.jpg.jpeg",
        caption: "Playful memories we treasure",
        orientation: "portrait",
        aspectRatio: "9/16",
        style: "polaroid",
        rotation: -1.8,
      },
      {
        id: "mem-18",
        src: "/images/couple/IMG_5472.jpg",
        caption: "A gaze that says everything",
        orientation: "portrait",
        aspectRatio: "3/4",
        style: "editorial",
      },
      {
        id: "mem-19",
        src: "/images/couple/Snapchat-1782403887.jpg.jpeg",
        caption: "Little reminders of our story",
        orientation: "portrait",
        aspectRatio: "9/16",
        style: "polaroid",
        rotation: 1,
      },
      {
        id: "mem-20",
        src: "/images/couple/IMG_5548.jpg",
        caption: "Growing together through it all",
        orientation: "portrait",
        aspectRatio: "3/4",
        style: "editorial",
      },
      {
        id: "mem-21",
        src: "/images/couple/Snapchat-396173848.jpg.jpeg",
        caption: "Pure happiness caught on camera",
        orientation: "portrait",
        aspectRatio: "9/16",
        style: "polaroid",
        rotation: -1.4,
      },
      {
        id: "mem-22",
        src: "/images/couple/IMG_20260826_153548.jpg.jpeg",
        caption: "Every day with you is a blessing",
        orientation: "tall",
        aspectRatio: "9/19",
        style: "editorial",
      },
    ],
  },

  letter: {
    sectionTitle: "Some things deserve to be said...",
    envelopePreviewPrompt: "Tap the seal to open your letter 💌",
    salutation: "Dear Pillyaaaa💞,",
    paragraphs: [
      "Today is your day, and I hope you get to see yourself through the eyes of the people who love you.",
      "I hope this new year of your life brings you the kind of happiness that stays, the kind of peace that feels like home, and countless little moments that make you smile without even realizing it.",
      "May you keep growing into the person you dream of becoming. May you always find reasons to laugh, people who understand you, and moments that remind you how beautiful life can be.",
      "You deserve a birthday filled with warmth, love, unexpected happiness, and memories you will want to keep forever.",
    ],
    closing: "Happy Birthday, Pillyaaaa💞.\nMay this year be one of your most beautiful chapters yet.",
    signature: "Always by your side ❤️",
  },

  wishes: {
    sectionTitle: "A few little wishes for you...",
    subtitle: "Hold these close as you step into your new year",
    items: [
      {
        id: 1,
        iconName: "Sparkles",
        title: "More reasons to smile than you can count.",
        description: "May ordinary mornings surprise you with sudden giggles and lighthearted joy.",
      },
      {
        id: 2,
        iconName: "Compass",
        title: "Dreams that slowly turn into beautiful realities.",
        description: "May every quiet aspiration you hold find its wings and bloom at its own gentle pace.",
      },
      {
        id: 3,
        iconName: "Mountain",
        title: "Unexpected adventures and unforgettable memories.",
        description: "May new roads welcome your footsteps and fill your story with wonder.",
      },
      {
        id: 4,
        iconName: "HeartHandshake",
        title: "People who make you feel loved, understood, and appreciated.",
        description: "May you always be surrounded by genuine warmth and arms that feel like sanctuary.",
      },
      {
        id: 5,
        iconName: "Sun",
        title: "A year filled with happiness that feels completely yours.",
        description: "May peace follow you wherever you go, and may your days be soft, bright, and kind.",
      },
    ],
  },

  finalSurprise: {
    eyebrow: "One last thing, Pillyaaaa💞...",
    mainQuote: "I hope life gives you a thousand reasons to smile today and every day after.",
    birthdayWish: "Happy Birthday, Pillyaaaa💞. ❤️",
    signature: "With all my heart",
    replayButtonText: "Experience Again ↺",
  },

  audio: {
    src: "/audio/birthday-music.mp3",
    title: "A Gentle Birthday Melody",
  },
};
