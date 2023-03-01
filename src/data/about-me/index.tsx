// Modules
import { useContext } from "react";

// Contexts
import { MainContext } from "../../contexts";

// Icons
import GamesIcon from '@mui/icons-material/Games';
import MovieIcon from '@mui/icons-material/Movie';
import GroupIcon from '@mui/icons-material/Group';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';

export default function useAboutMeData () {

  const { selectedLanguage } = useContext(MainContext);

  function getAboutMeData () {
    return (selectedLanguage === 1) ? aboutMeDataEnglish : aboutMeDataSpanish
  }
  
  return {
    ...getAboutMeData()
  }
}

const aboutMeDataEnglish = {
  selfDescription: 'Hi, I am Andre Lizaran, frontend developer (fullstack in process). I love making clean and useful apps/interfaces. My favorite programming language is Typescript. Im from Veracruz, Mexico.',
  hobbiesList: [
    { label:'Videogames', icon:<GamesIcon/> },
    { label:'Music', icon:<GraphicEqIcon/> },
    { label:'Horror Movies', icon:<MovieIcon/> },
    { label:'Programming', icon:<KeyboardIcon/> },
    { label:'Hanging out with Friends', icon:<GroupIcon/> },
  ]
}

const aboutMeDataSpanish = {
  selfDescription: 'Hola, soy Andre Lizaran, desarrollador frontend (fullstack en proceso). Me encanta crear aplicaciones/interfaces limpias y útiles. Mi lenguaje de programación favorito es Typescript. Soy de Veracruz, México.',
  hobbiesList: [
    { label:'Videojuegos', icon:<GamesIcon/> },
    { label:'Música', icon:<GraphicEqIcon/> },
    { label:'Películas de Terror', icon:<MovieIcon/> },
    { label:'Programar', icon:<KeyboardIcon/>},
    { label:'Salir con mis amigos', icon:<GroupIcon/> },
  ]
}

