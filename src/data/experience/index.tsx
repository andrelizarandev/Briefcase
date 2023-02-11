export const ExperienceList:ExperienceData[] = [
  { 
    title:'Medio Melon', 
    subtitle:'Frontend Developer',
    description:'Desarrollo en plataformas web con Angular, React y Java para bancos y farmacias.',
    img:'./public/medio-melon-logo.png' 
  },
  { 
    title:'Blau Corp', 
    subtitle:'Frontend / Mobile Developer',
    description:'Desarrollo de plataforma en React para la gestión de recolección de residuos en el estado de Jalisco.',
    img:'./public/blau-logo.png' 
  },
  { 
    title:'Sunkai', 
    subtitle:'Frontend / Mobile Developer',
    description:'Desarrollo de plataforma web para la recolección de cultivos en Perú, haciendo uso de una aplicación móvil para el registro de estos.', 
    img:'./public/sunkai-logo.png'
  },
]

export type ExperienceData = {
  title:string;
  subtitle:string;
  description:string;
  img:string;
}