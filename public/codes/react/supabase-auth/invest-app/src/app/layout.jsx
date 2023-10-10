import { Inter } from 'next/font/google';
import { InvestmentProvider } from '@/contexts/InvestmentContext';
import { UserAuthContextProvider } from '@/contexts/UserAuthContext';
import NavBar from '@/components/NavBar';

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
        <UserAuthContextProvider>
          <NavBar />
          <div className="container min-h-screen mx-auto lg:max-w-screen-lg">
            <InvestmentProvider>{children}</InvestmentProvider>
          </div>
        </UserAuthContextProvider>
      </body>
    </html>
  );
}
