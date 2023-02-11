// Icons
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import MessageIcon from '@mui/icons-material/Message';

export const ContactList:ContactData[] = [
  { title:'Gmail', buttonText:'Send Email', icon:EmailIcon, link:'mailto:andrelizarandev@gmail.com' },
  { title:'Whatsapp', buttonText:'Send Message', icon:MessageIcon, link:'https://wa.me/2293460202' },
  { title:'GitHub', buttonText:'Visit', icon:GitHubIcon, link:'https://github.com/andrelizarandev?tab=repositories' }
]

export type ContactData = {
  title:string;
  buttonText:string;
  icon:any;
  link:string;
}