export const projectsDataArray:ProjectData[] = [
  { 
    title:'GPS Locator',
    description:'Nostrud excepteur nisi proident officia commodo aliqua fugiat nisi cupidatat ipsum commodo ad consectetur incididunt. Aliqua consectetur minim qui Lorem magna et dolore. ',
    technologies:['Kotlin', 'Node JS', 'Express JS', 'Typescript', 'Mongoose']
  },
  {
    title:'Blau Web RME',
    description:'Qui enim ad dolor eiusmod culpa culpa exercitation dolor voluptate esse do occaecat. Id eu laboris anim magna. Mollit magna nostrud adipisicing et id minim sint.',
    technologies:['Typescript', 'React', 'MUI', 'Axios', 'React Query']
  },
  {
    title:'Blockchain Tickets',
    description:'Reprehenderit aute cillum duis deserunt voluptate do enim ea cupidatat mollit non. Ullamco et irure id sit id. Sunt consequat esse fugiat magna est laborum.',
    technologies:['Typescript', 'React', 'MUI', 'Solidity', 'JS']
  },
  {
    title:'CIS Dashboard',
    description:'Reprehenderit aute cillum duis deserunt voluptate do enim ea cupidatat mollit non. Ullamco et irure id sit id. Sunt consequat esse fugiat magna est laborum.',
    technologies:['Typescript', 'React', 'MUI', 'Solidity', 'JS']
  },
]

export type ProjectData = {
  title:string;
  description:string;
  technologies:string[];
}