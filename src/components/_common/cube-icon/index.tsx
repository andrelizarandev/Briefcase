// Modules
import { Stack, Typography } from '@mui/material';

// Data
import { ToolElement } from '../../../data/tools';

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
            <props.icon/>
          </Stack>
        </Stack>
      </Stack>
    </GridXS6MD4>
  )
}
