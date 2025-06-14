import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Seven Workflows - AI-Powered Business Solutions',
  description: 'Automate. Accelerate. Dominate. AI-powered solutions designed to handle the boring stuff — so you can focus on what matters.',
  keywords: 'AI, artificial intelligence, automation, business solutions, chatbots, enterprise consulting',
  authors: [{ name: 'Seven Workflows' }],
  openGraph: {
    title: 'Seven Workflows - AI-Powered Business Solutions',
    description: 'AI-powered solutions designed to handle the boring stuff — so you can focus on what matters.',
    type: 'website',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}