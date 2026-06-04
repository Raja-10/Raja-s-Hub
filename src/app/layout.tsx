import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Raja Yogeshwar — Researcher. Builder. Explorer.',
  description:
    'Personal portfolio of Raja Yogeshwar — a researcher, builder, and explorer. Showcasing academics, projects, swimming, travel, and life milestones.',
  keywords: ['Raja Yogeshwar', 'portfolio', 'researcher', 'developer', 'machine learning', 'robotics'],
  authors: [{ name: 'Raja Yogeshwar' }],
  openGraph: {
    title: 'Raja Yogeshwar — Portfolio',
    description: 'A collection of moments, memories & milestones.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="lenis">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="noise">{children}</body>
    </html>
  );
}