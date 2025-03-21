import { Inter, Lato } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Providers from '@/components/Providers';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
  variable: '--font-lato',
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
