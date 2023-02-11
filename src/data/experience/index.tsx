export const ExperienceList:ExperienceData[] = [
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
]

export type ExperienceData = {
  title:string;
  subtitle:string;
  description:string;
  img:string;
}