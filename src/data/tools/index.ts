// Modules
import CodeIcon from '@mui/icons-material/Code';
import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';
import StorageIcon from '@mui/icons-material/Storage';
import LineStyleIcon from '@mui/icons-material/LineStyle';
import FormatPaintIcon from '@mui/icons-material/FormatPaint';
import DesignServicesIcon from '@mui/icons-material/DesignServices';

const ToolsList:ToolElement[] = [
  { icon:CodeIcon, title:'HTML' },
  { icon:FormatPaintIcon, title:'CSS' },
  { icon:LineStyleIcon, title:'JS' },
  { icon:LineStyleIcon, title:'TS' },
  { icon:LineStyleIcon, title:'React' },
  { icon:LineStyleIcon, title:'Angular' },
  { icon:LineStyleIcon, title:'React Native' },
  { icon:LineStyleIcon, title:'Node JS' },
  { icon:AndroidIcon, title:'Kotlin' },
  { icon:AndroidIcon, title:'Java' },
  { icon:AppleIcon, title:'Swift' },
  { icon:FormatPaintIcon, title:'Bootstrap' },
  { icon:FormatPaintIcon, title:'MUI' },
  { icon:FormatPaintIcon, title:'Tailwind' },
  { icon:StorageIcon, title:'Firebase' },
  { icon:StorageIcon, title:'MongoDB' },
  { icon:StorageIcon, title:'MySQL' },
  { icon:DesignServicesIcon, title:'Figma / Miro' },
];

export type ToolElement = {
  title:string;
  icon:any;
}

export default ToolsList;