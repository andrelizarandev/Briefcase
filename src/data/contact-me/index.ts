// Icons
import EmailIcon from '@mui/icons-material/Email';
import MessageIcon from '@mui/icons-material/Message';
import GitHubIcon from '@mui/icons-material/GitHub';

export const ContactList:ContactData[] = [
  { title:'Gmail', buttonText:'Send Email', icon:EmailIcon },
  { title:'Whatsapp', buttonText:'Send Message', icon:MessageIcon },
  { title:'GitHub', buttonText:'Visit', icon:GitHubIcon },
]

export type ContactData = {
  title:string;
  buttonText:string;
  icon:any;
}