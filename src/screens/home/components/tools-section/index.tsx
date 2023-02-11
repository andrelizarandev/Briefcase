// Modules
import { Grid, Stack, Typography } from '@mui/material';

// Components
import CubeIcon from '../../../../components/_common/cube-icon';
import GridXS12MD6 from '../../../../components/_grid/grid-xs12-md6';

// Data
import ToolsList from '../../../../data/tools'

export default function ToolsSection () {
  return (
    <GridXS12MD6>
      <Stack rowGap={2}>
        <Typography variant='subtitle2' textTransform='uppercase'>Tools</Typography>
        <Grid container spacing={2}>
          {ToolsList.map((data, key) => <CubeIcon {...data} key={key}/>)}
        </Grid>
      </Stack>
    </GridXS12MD6>
  )
}
