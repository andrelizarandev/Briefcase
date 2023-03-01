// Modules
import { useContext } from 'react';

// Contexts
import { MainContext } from '../../contexts';

export default function useEducationData () {

  const { selectedLanguage } = useContext(MainContext);
  
  function getEducationData () {
    return (selectedLanguage === 1) ? EducationListEnglish : EducationListSpanish
  }

  return {
    getEducationData
  }

}


const EducationListEnglish:EducationCardContent[] = [
  { 
    title:'Instituto Tecnologico de Veracruz', 
    description:'Computer Systems Enginnering', 
    image:'/itver.png', 
    time:'August 2018 - July 2023' 
  }
]

const EducationListSpanish:EducationCardContent[] = [
  { 
    title:'Instituto Tecnológico de Veracruz', 
    description:'Ingeniería en Sistemas Computacionales', 
    image:'/itver.png', 
    time:'Agosto 2018 - Julio 2023' 
  }
]

export type EducationCardContent = {
  title:string;
  description:string;
  time:string;
  image:string
}