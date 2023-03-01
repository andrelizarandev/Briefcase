// Modules
import { useContext } from 'react';

// Contexts
import { MainContext } from '../../contexts';

export default function useCv () {

  const { selectedLanguage } = useContext(MainContext);
  
  function getCvData () {
    return (selectedLanguage === 1) ? cvDataEnglish : cvDataSpanish
  }

  return getCvData()

}

const cvDataEnglish = [
  { link:'/cv/CV-EN.pdf', title:'In English' },
  { link:'/cv/CV-ES.pdf', title:'In Spanish' }
];

const cvDataSpanish = [
  { link:'/cv/CV-EN.pdf', title:'En Inglés' },
  { link:'/cv/CV-ES.pdf', title:'En Español' }
];
