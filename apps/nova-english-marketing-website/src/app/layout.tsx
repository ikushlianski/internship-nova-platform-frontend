import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import Footer from '../components/footer/ui/footer.components';
import Header from '../components/header/ui/header.component';
import './globals.css';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
  icons: {
    icon: [
      { rel: 'icon', type: 'image/png', sizes: '32x32', url: '/assets/favicon/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', url: '/assets/favicon/favicon-16x16.png' },
    ],
    apple: '/assets/favicon/apple-touch-icon.png',
    other: [
      { rel: 'manifest', url: '/assets/favicon/site.webmanifest' },
      { rel: 'mask-icon', url: '/assets/favicon/safari-pinned-tab.svg', color: '#5bbad5' },
    ],
  },
};

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-manrope',
  weight: ['200', '300', '400', '500', '600', '700', '800'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
