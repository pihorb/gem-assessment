import { createContext, useContext, useState } from 'react';
import type { FC, ReactNode } from 'react';

const useAppState = () => {
  const [prevGemText, setPrevGemText] = useState('');
  const [gemText, setGemText] = useState('');

  return {
    gemText,
    setGemText,
    prevGemText,
    setPrevGemText,
  };
};

const AppContext = createContext<ReturnType<typeof useAppState> | null>(null);

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('You cannot use context outside context provider');
  }

  return context;
};

type ProviderProps = {
  children?: ReactNode;
};

export const AppContextProvider: FC<ProviderProps> = ({ children }) => {
  return (
    <AppContext.Provider value={useAppState()}>{children}</AppContext.Provider>
  );
};
