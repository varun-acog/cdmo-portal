'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

const NavContext = createContext<{ active: string; setActive: (active: string) => void } | undefined>(undefined);

export function NavProvider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState('home');

  return <NavContext.Provider value={{ active, setActive }}>{children}</NavContext.Provider>;
}

export function useNav() {
  const context = useContext(NavContext);
  if (!context) throw new Error('useNav must be used within a NavProvider');
  return context;
}
