import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { NuqsAdapter } from "nuqs/adapters/next/app";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NoteStack - Your Thoughts, Perfectly Stacked",
  description:
    "A fast, structured note-taking system built to capture, organize, and manage ideas at scale. Built for clarity, designed for efficiency.",
  keywords: [
    "notes",
    "note-taking",
    "productivity",
    "organization",
    "notestack",
    "digital notes",
    "knowledge management",
  ],
  openGraph: {
    type: "website",
    url: "https://notestackapp.vercel.app/",
    title: "NoteStack - Your Thoughts, Perfectly Stacked",
    description:
      "A fast, structured note-taking system built to capture, organize, and manage ideas at scale.",
    siteName: "NoteStack",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NuqsAdapter>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Toaster />
            {children}
          </ThemeProvider>
        </NuqsAdapter>
      </body>
    </html>
  );
}
