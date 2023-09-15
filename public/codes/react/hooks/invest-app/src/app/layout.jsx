import { Inter } from 'next/font/google';
import { InvestmentProvider } from '@/contexts/InvestmentContext';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'invest-app',
  description: 'Aplicação de investimentos',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100`}>
        <div className="container min-h-screen mx-auto lg:max-w-screen-lg">
          <InvestmentProvider>{children}</InvestmentProvider>
        </div>
      </body>
    </html>
  );
}
