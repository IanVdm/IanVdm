import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ian van der Merwe | Software Engineer',
  description: 'Portfolio site for Ian, a recent software engineering graduate seeking opportunities.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
