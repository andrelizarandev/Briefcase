// Modules
import { createContext, useState } from 'react';

// Types
import { LanguageOptions, MainContextPayload } from './types';

export const MainContext = createContext({} as MainContextPayload);

export default function MainContextContainer ({ children }:any) {

  const [ selectedLanguage, setSelectedLanguage ] = useState<LanguageOptions>(1);

  const toggleLanguage = () => (selectedLanguage === 1) 
    ? setSelectedLanguage(2) 
    : setSelectedLanguage(1)

  const payload:MainContextPayload = {
    selectedLanguage, 
    toggleLanguage
  }

  return (
    <MainContext.Provider value={payload}>
      {children}
    </MainContext.Provider>
  )
}
