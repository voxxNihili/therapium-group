import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Providers from '@/components/Providers';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

// Load local Lato font with comprehensive weight and style support
const lato = localFont({
  src: [
    {
      path: '../../public/fonts/lato-hairline.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../public/fonts/lato-hairline-italic.woff2',
      weight: '100',
      style: 'italic',
    },
    {
      path: '../../public/fonts/lato-thin.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../public/fonts/lato-thin-italic.woff2',
      weight: '200',
      style: 'italic',
    },
    {
      path: '../../public/fonts/lato-light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/lato-light-italic.woff2',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../../public/fonts/lato-normal.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/lato-normal-italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/lato-medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/lato-medium-italic.woff2',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../../public/fonts/lato-semibold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/lato-semibold-italic.woff2',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../../public/fonts/lato-bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/lato-bold-italic.woff2',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../../public/fonts/lato-heavy.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../public/fonts/lato-heavy-italic.woff2',
      weight: '800',
      style: 'italic',
    },
    {
      path: '../../public/fonts/lato-black.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../../public/fonts/lato-black-italic.woff2',
      weight: '900',
      style: 'italic',
    },
  ],
  variable: '--font-lato',
  display: 'swap',
});

// Load Crackers Brusher font
const crackersBrusher = localFont({
  src: [
    {
      path: '../../public/fonts/CRACKERS-BRUSHER.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/CRACKERS-BRUSHER.woff',
      weight: '400',
      style: 'normal',
    },

  ],
  variable: '--font-crackers-brusher',
  display: 'swap',
});

export const metadata = {
  title: 'Therapium Group',
  description: 'Therapium Group - Professional Healthcare Solutions',
  icons: {
    icon: 'https://therapium-teksenbilisim.s3.eu-central-1.amazonaws.com/public/therapium-logo-32x32.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="de" className={`${crackersBrusher.variable} ${inter.variable} ${lato.variable}`}>
      <body className="font-lato">
        <Providers>
          <Navbar />
          <main className="pt-20">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
