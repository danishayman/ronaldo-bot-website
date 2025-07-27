import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ronaldo Bot - Discord Water Reminder Bot",
  description: "SIUUUU! Stay hydrated like a champion with Ronaldo Bot - the ultimate Discord water reminder bot inspired by Cristiano Ronaldo. Perfect for gaming sessions, study groups, and voice chats!",
  keywords: "Discord bot, water reminder, Ronaldo, hydration, gaming, voice chat, health, productivity",
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "Ronaldo Bot - Discord Water Reminder Bot",
    description: "Stay hydrated like a champion with Ronaldo-themed water reminders!",
    images: ["https://media.tenor.com/vm1WwOBQWUMAAAAM/euro2020-cristiano-ronaldo.gif"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
