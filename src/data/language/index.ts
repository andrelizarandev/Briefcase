// Modules
import { useContext } from 'react';

// Contexts
import { MainContext } from '../../contexts';

export default function useLanguageData () {

  const { selectedLanguage } = useContext(MainContext);
  
  function getLanguageData () {
    return (selectedLanguage === 1) ? languagesListEngligh : languagesListSpanish
  }

  return {
    getLanguageData
  }

}

const languagesListEngligh = ['In English - Advanced', 'In Spanish -  Native'];
const languagesListSpanish = ['En Inglés - Avanzado', 'En Ingles -  Nativo'];