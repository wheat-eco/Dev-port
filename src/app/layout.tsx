import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: "Muiz Adesope | Full Stack Developer",
  description: "The personal portfolio of Muiz Adesope (Adesope Muiz), a creative Full Stack Developer from Lagos, Nigeria specializing in React, Next.js, and modern web technologies. Let's build something great together.",
  keywords: ['Muiz Adesope', 'Adesope Muiz', 'Full Stack Developer', 'Web Developer', 'React Developer', 'Next.js Developer', 'PHP', 'Nigeria', 'Lagos'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Figtree:wght@700;900&family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
