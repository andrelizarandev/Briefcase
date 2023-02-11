// Modules
import { Stack, Typography } from '@mui/material';

// Colors
import { indigo } from '@mui/material/colors';

// Components
import GridXS12MD6LG4XL3 from '../../_grid/grid-xs12-md6-lg4-xl-3'

// Data
import { PossibleIcons, ToolElement } from '../../../data/tools';

// Icons
import CodeIcon from '@mui/icons-material/Code';
import AndroidIcon from '@mui/icons-material/Android';
import LineStyleIcon from '@mui/icons-material/LineStyle';
import FormatPaintIcon from '@mui/icons-material/FormatPaint';

// Style
import CubeIconStyle from './style';
import FlexStyle from '../../../styles/flex';
import GridXS6MD4 from '../../_grid/grid-xs6-md3';

export default function CubeIcon (props:ToolElement) {
  return (
    <GridXS6MD4>
      <Stack sx={CubeIconStyle.MainContainer}>
        <Stack sx={CubeIconStyle.MainPaddingContainer}>
          <Stack sx={FlexStyle.RowAlignCenterJustifyBetween}>
            <Typography variant='subtitle2' textTransform='uppercase'>{props.title}</Typography>
            {SelectedIcon(props.icon)}
          </Stack>
        </Stack>
      </Stack>
    </GridXS6MD4>
  )
}

function SelectedIcon (icon:PossibleIcons) {
  switch (icon) {
    case 'android':
      return <AndroidIcon/>
    case 'css':
      return <FormatPaintIcon/>
    case 'html':
      return <CodeIcon/>
    case 'js':
      return <LineStyleIcon/>
  } 
}
