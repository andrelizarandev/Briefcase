// Modules
import { grey } from '@mui/material/colors';
import { Grid, Paper, Stack, Typography } from '@mui/material';

// Components
import SectionContainer from '../../../../containers/section-container';

// Data
import { selfDescription } from '../../../../data/about-me';

export default function AboutMeSection () {
  return (
    <SectionContainer title='About Me'>
      <Typography variant='subtitle2' textTransform='uppercase'></Typography>
      <Grid container>
        <SelfDescriptionCard/>
      </Grid>
    </SectionContainer>
  )
}

function SelfDescriptionCard () {
  return (
    <Paper>
      <Stack padding={2}>
        <Typography variant='body2' color={grey[700]}>{selfDescription}</Typography>
      </Stack>
    </Paper>
  )
}