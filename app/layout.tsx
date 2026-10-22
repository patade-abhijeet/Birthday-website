import type { Metadata, Viewport } from "next";
import "./globals.css";
import { birthdayConfig } from "@/config/birthday";

export const metadata: Metadata = {
  title: `Happy Birthday ${birthdayConfig.recipientName} 💕`,
  description: birthdayConfig.gallery.description,
  authors: [{ name: "With Love" }],
  openGraph: {
    title: `Happy Birthday ${birthdayConfig.recipientName} 💕`,
    description: birthdayConfig.gallery.description,
    type: "website",
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌸</text></svg>",
  },
};

export const viewport: Viewport = {
  themeColor: "#FFF0F4",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#FFF0F4] text-[#472D37] antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
