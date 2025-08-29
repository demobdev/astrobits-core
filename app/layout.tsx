import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from '@/components/auth-context';
import { ClerkProvider } from "@clerk/nextjs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AstroBits Core - MCP-Powered Development System",
  description: "Transform your development workflow with voice-driven, AI-powered development using the Model Context Protocol. Integrate UI libraries, authentication, and services seamlessly.",
  keywords: "MCP, Model Context Protocol, voice-driven development, AI development, UI libraries, authentication, Next.js, React, TypeScript",
  openGraph: {
    title: "AstroBits Core - MCP-Powered Development System",
    description: "Transform your development workflow with voice-driven, AI-powered development using the Model Context Protocol.",
    type: "website",
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
        <ClerkProvider>
          <AuthProvider>
                        <main>
              {children}
            </main>
          </AuthProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
