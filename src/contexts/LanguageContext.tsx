'use client'

import { createContext, ReactNode, useEffect, useState } from "react";

export interface LanguageContextInterface {
    language: any ;
    setLanguage: (lang: string) => void;
    setLanguageHandler: (lang: string) => void
}

interface LanguageProviderProps {
    children: ReactNode;
}

export const LanguageContext = createContext<LanguageContextInterface | undefined>(undefined);

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const setLanguageHandler = (lang: string) => {
    setLanguage(lang);
  };

  useEffect(() => {
    localStorage.setItem('language', 'en')
    const storedLanguage = localStorage.getItem('language');
    if(storedLanguage){
      setLanguage(storedLanguage)
    }
  }, [])

  return (
    <LanguageContext.Provider value={{ language, setLanguage, setLanguageHandler }}>
      {children}
    </LanguageContext.Provider>
  );
};
