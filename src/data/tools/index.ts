const ToolsList:ToolElement[] = [
  { icon:'html', title:'HTML', },
  { icon:'js', title:'JS', },
  { icon:'js', title:'TS', },
  { icon:'js', title:'React', },
  { icon:'js', title:'Angular', },
  { icon:'js', title:'React Native', },
  { icon:'js', title:'Node JS'},
  { icon:'android', title:'Kotlin', },
  { icon:'android', title:'Java', },
  { icon:'css', title:'Bootstrap', },
  { icon:'css', title:'MUI', },
  { icon:'css', title:'Tailwind', },
];

export type ToolElement = {
  title:string;
  icon:PossibleIcons;
}

export type PossibleIcons = 'html' | 'css' | 'js' | 'android'

export default ToolsList;