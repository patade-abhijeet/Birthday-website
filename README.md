# Happy Birthday Snehal 💕 • Romantic Birthday Experience & Living Photo Gallery

A personal, elegant, and interactive birthday surprise website crafted specially for **Snehal**, created by her boyfriend for her celebration on **October 21, 2026**.

Built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**, optimized for instant deployment to **Vercel** with zero backend or database dependencies.

---

## 🌸 Visual Identity & Color System

Designed like a soft pink romantic birthday card, a cherished personal scrapbook, and a love letter:

- **Main Background**: `#FFF0F4` (soft pale blush)
- **Alternate Section Background**: `#FFE5EC` (warm blush)
- **Ivory Accent**: `#FFFDFC` (photo cards & letter stationery)
- **Primary Romantic Pink**: `#F0447E` (buttons, heart badges, active indicators)
- **Deep Rose**: `#D92F68` (active states & subtitles)
- **Soft Rose Accent**: `#F7B6CA` (borders & washi tape details)
- **Main Typography**: `#472D37` (warm dark plum/brown for contrast & readability)
- **Secondary Typography**: `#806874`

---

## 🌟 Living Photo Gallery & Motion Features

### 1. Featured Memory Carousel
- **Prominent Display**: Highlights one couple photograph with crisp ivory framing, subtle drop shadow, and delicate borders.
- **Gentle Auto-Rotation**: Transitions automatically every 4.5 seconds with a restrained crossfade and slow scale settling (`1.02` to `1.0`).
- **Interactive Controls**:
  - Accessible Previous (`<`) and Next (`>`) navigation buttons.
  - Play / Pause button to stop or resume auto-rotation.
  - Interactive pagination dots to jump to any photograph.
  - Fullscreen Lightbox expand button.
- **Smart Accessibility**: Auto-rotation pauses on hover, pauses when the user interacts, stops when the browser tab is hidden, and respects `prefers-reduced-motion`.

### 2. Cinematic Memory Filmstrip
- **Continuous Visual Flow**: A smooth horizontal row of all 22 couple memories displayed beneath the featured carousel.
- **Gentle Auto-Nudge**: Slowly drifts horizontally via `requestAnimationFrame` while remaining calm and easy to view.
- **User Agency**:
  - Pauses on mouse hover and touch interaction.
  - Native touch-swiping on phones and tablets.
  - Dedicated Left / Right scroll buttons and Play / Pause strip toggle.
  - Clicking any thumbnail selects it as the active featured photograph or opens the lightbox!

### 3. Focused Lightbox Viewer
- Tap or click any photograph to expand into an immersive, soft-translucent view (`bg-[#472D37]/85 backdrop-blur-sm`).
- Displays uncropped original resolution (`object-contain`), tasteful handwritten captions, photo counter (`1 of 22`), and supports `Escape` key close and arrow navigation.

---

## 💌 Romantic Chapters

1. **The Secret Gate**: An intimate blush card with email (`warekarsnehal2110@gmail.com`) and secret code (`2798879`) validation.
2. **Editorial Hero**: Split card layout introducing Snehal with a candid polaroid, subtle Ken Burns slow reveal, and handwritten salutation (*"Hey Snehal,"*).
3. **Living Memory Gallery**: The featured auto-carousel, cinematic filmstrip, and interactive lightbox.
4. **Stationery Birthday Letter**: An authentic folded letter on warm ivory paper inside a rose wax-sealed envelope that opens on click.
5. **Keepsakes & Wishes**: Clean editorial list with soft rose numbered badges and divider accents.
6. **Tender Final Surprise**: Centerpiece couple photograph, heartfelt birthday message, and restrained heart celebration.
7. **Discreet Music Player**: Floating bottom-right audio widget in blush & ivory with play/pause/mute.

---

## 💻 Local Development

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build & test production bundle
npm run build
npm run start
```
Visit [http://localhost:3000](http://localhost:3000).

---

## ⚙️ Centralized Configuration

All personal credentials, letter text, photo metadata, and wishes are located in:
📁 **[`config/birthday.ts`](file:///i:/Antigravity/Birthday%20Website/config/birthday.ts)**

---

## 🚀 Deploying to Vercel

1. Commit and push your code to GitHub:
   ```bash
   git add .
   git commit -m "feat: living photo gallery with featured carousel and cinematic filmstrip"
   git push origin main
   ```
2. In [Vercel](https://vercel.com), click **Add New Project** and select your repository.
3. Click **Deploy** — zero additional configuration or environment variables required.
