import { ReactNode, createContext, useState } from 'react';
import { WBackdrop } from '../components/Pages/Login/Auth.Loading';

interface BackdropContextProps {
  isBackdropOpen: boolean
  openBackdrop: () => void
  closeBackdrop: () => void
  }

export const BackdropContext = createContext({} as BackdropContextProps);

export function BackdropProvider({children}: { children: ReactNode}){
  const [isBackdropOpen, setIsBackdropOpen] = useState(false);

  const openBackdrop = () => {
    setIsBackdropOpen(true);
  };

  const closeBackdrop = () => {
    setIsBackdropOpen(false);
  };

  return (
    <BackdropContext.Provider value={{ isBackdropOpen, openBackdrop, closeBackdrop }}>
      <WBackdrop open={isBackdropOpen} />
      {children}
    </BackdropContext.Provider>
  );
};