// Modules
import { useContext } from 'react';

// Contexts
import { MainContext } from '../../contexts';

export default function useGeneralData () {

  const { selectedLanguage } = useContext(MainContext);

  function getGeneralData () {
    return (selectedLanguage === 1) ? generalDataEnglish : generalDataSpanish;
  }

  return { ...getGeneralData() }
  
}

const generalDataSpanish = {
  btnChangeLanguage:'Cambiar Idioma',
  aboutMe:'Sobre Mí',
  education:'Educación',
  languages:'Lenguajes',
  experience:'Experiencia',
  projects:'Proyectos',
  contactMe:'Contáctame'
}

const generalDataEnglish= {
  btnChangeLanguage:'Change Language',
  aboutMe:'About Me',
  education:'Education',
  languages:'Languages',
  experience:'Experience',
  projects:'Projects',
  contactMe:'Contact Me'
 
}