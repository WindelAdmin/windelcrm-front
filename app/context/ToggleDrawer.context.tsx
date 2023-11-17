'use client';
import { ReactNode, createContext, useState } from 'react';
export interface DrawerProviderProps {
  children: ReactNode;
}

export const ToggleDrawerContext = createContext({
  open: false,
  toggleDrawer: () => {},
});

export function ToggleDrawerProvider({ children }: DrawerProviderProps) {
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <ToggleDrawerContext.Provider value={{ open, toggleDrawer }}>
      {children}
    </ToggleDrawerContext.Provider>
  );
}
