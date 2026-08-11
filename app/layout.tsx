import type { ReactNode } from 'react';
import './globals.css';

export const metadata = {
  title: 'Art Factory Prototype',
  description: 'SEO-ready art marketplace and Medusa-based custom framing prototype',
  metadataBase: new URL('https://artfactory.example'),
  alternates: { canonical: '/' },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
