// Modules
import { createContext, useState } from 'react';

// Types
import { LanguageOptions, MainContextPayload, SnackbarPayload } from './types';

export const MainContext = createContext({} as MainContextPayload);

export default function MainContextContainer ({ children }:any) {

  const [ selectedLanguage, setSelectedLanguage ] = useState<LanguageOptions>(1);
  const [ snackbarMessage, setSnackbarMessage ] = useState<SnackbarPayload>(null);
  const handleSetNullSnackbarMessage = () => setSnackbarMessage(null);

  function toggleLanguage () {
    (selectedLanguage === 1) ? setSelectedLanguage(2) : setSelectedLanguage(1);
    (selectedLanguage === 1) 
      ? setSnackbarMessage({ title:'Idioma cambiado', type:'info' })
      : setSnackbarMessage({ title:'Language changed', type:'info' }) 
  }

  const payload:MainContextPayload = {
    selectedLanguage, 
    toggleLanguage,
    snackbarMessage, 
    setSnackbarMessage,
    handleSetNullSnackbarMessage
  }

  return (
    <MainContext.Provider value={payload}>
      {children}
    </MainContext.Provider>
  )
}
