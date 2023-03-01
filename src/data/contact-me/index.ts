// Modules
import { useContext } from 'react';

// Contexts
import { MainContext } from '../../contexts';

// Icons
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import MessageIcon from '@mui/icons-material/Message';

export default function useGetContactMeData () {

  const { selectedLanguage } = useContext(MainContext);

  function getContactList ():ContactData[] {
    return (selectedLanguage === 1) ? contactListEnglish : contactListSpanish;
  }

  return {
    getContactList
  }

};

const contactListEnglish:ContactData[] = [
  { title:'Gmail', buttonText:'Send Email', icon:EmailIcon, link:'mailto:andrelizarandev@gmail.com' },
  { title:'Whatsapp', buttonText:'Send MSG', icon:MessageIcon, link:'https://wa.me/2293460202' },
  { title:'GitHub', buttonText:'Visit', icon:GitHubIcon, link:'https://github.com/andrelizarandev?tab=repositories' }
]

const contactListSpanish:ContactData[] = [
  { title:'Gmail', buttonText:'Mandar Correo', icon:EmailIcon, link:'mailto:andrelizarandev@gmail.com' },
  { title:'Whatsapp', buttonText:'Mandar Msj', icon:MessageIcon, link:'https://wa.me/2293460202' },
  { title:'GitHub', buttonText:'Visitar', icon:GitHubIcon, link:'https://github.com/andrelizarandev?tab=repositories' }
]

export type ContactData = {
  title:string;
  buttonText:string;
  icon:any;
  link:string;
}