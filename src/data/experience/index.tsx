// Modules
import { useContext } from 'react';

// Contexts
import { MainContext } from '../../contexts';

export default function useExperienceData () {

  const { selectedLanguage } = useContext(MainContext);

  function getExperienceData () {
    return (selectedLanguage === 1) ? ExperienceListEnglish : ExperienceListSpanish
  }

  return {
    getExperienceData
  }

}


export const ExperienceListEnglish:ExperienceData[] = [
  { 
    title:'Medio Melon', 
    subtitle:'Frontend Developer',
    description:'Web development in platforms using Angular, React and Java for banks and pharmacies.',
    img:'/medio-melon-logo.png' 
  },
  { 
    title:'Blau Corp', 
    subtitle:'Frontend / Mobile Developer',
    description:'Web development in platforms using React for waste collection management in the state of Jalisco.',
    img:'/blau-logo.png' 
  },
  { 
    title:'Sunkai', 
    subtitle:'Frontend / Mobile Developer',
    description:'Web development in platforms using React for the recollection of crops in Peru, using a mobile application to register them.', 
    img:'/sunkai-logo.png'
  },
];

export const ExperienceListSpanish:ExperienceData[] = [
  { 
    title:'Medio Melon', 
    subtitle:'Desarollador Frontend',
    description:'Desarrollo web en plataformas usando Angular, React y Java para bancos y farmacias.',
    img:'/medio-melon-logo.png' 
  },
  { 
    title:'Blau Corp', 
    subtitle:'Desarrollador Frontend / Móvil',
    description:'Desarrollo web y móvil en plataformas usando React para la gestión de recolección de residuos en el estado de Jalisco.',
    img:'/blau-logo.png' 
  },
  { 
    title:'Sunkai', 
    subtitle:'Desarrollador Frontend / Móvil',
    description:'Desarrollo web en plataformas usando React para la recolección de cultivos en Perú, utilizando una aplicación móvil para registrarlos.', 
    img:'/sunkai-logo.png'
  },
];

export type ExperienceData = {
  title:string;
  subtitle:string;
  description:string;
  img:string;
}