export const EducationList:EducationCardContent[] = [
  { 
    title:'Instituto Tecnológico de Veracruz', 
    description:'Computer Systems Enginnering', 
    image:'./public/itver.png', 
    time:'August 2018 - July 2023' 
  }
]

export type EducationCardContent = {
  title:string;
  description:string;
  time:string;
  image:string
}