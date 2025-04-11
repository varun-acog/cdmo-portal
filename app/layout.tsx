import { NavProvider } from '@/context/NavContext';
import '../styles/globals.css';
import Navbar from '@/components/Navbar';
import type { Metadata } from 'next';
import ModalProvider from '@/components/ModalProvider';
import { Providers } from './providers'; // 👈 import added

export const metadata: Metadata = {
  title: 'Supply Chain Dashboard',
  description: 'A Next.js dashboard for supply chain management',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers> {/* 👈 wrap everything inside SessionProvider */}
          <ModalProvider>
            <NavProvider>
              <Navbar />
              {children}
            </NavProvider>
          </ModalProvider>
        </Providers>
      </body>
    </html>
  );
}
