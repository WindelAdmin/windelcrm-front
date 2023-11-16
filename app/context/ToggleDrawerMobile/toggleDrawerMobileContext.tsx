import React, { createContext, useState } from 'react';
import { DrawerProviderProps } from './interface';

export const ToggleDrawerMobileContext = createContext({
  openMobile: false,
  toggleDrawerMobile: (open: boolean) => {},
});

export function ToggleDrawerMobileProvider({ children }: DrawerProviderProps) {
  const [openMobile, setOpenMobile] = useState(false);

  const toggleDrawerMobile = (open: boolean) => {
    setOpenMobile(open);
  };

  return (
    <ToggleDrawerMobileContext.Provider
      value={{ openMobile, toggleDrawerMobile }}
    >
      {children}
    </ToggleDrawerMobileContext.Provider>
  );
}
