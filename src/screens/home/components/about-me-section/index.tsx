// Modules
import { Grid, Paper, Stack, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

// Data
import { selfDescription } from '../../../../data/about-me'

export default function AboutMeSection () {
  return (
    <Stack rowGap={2}>
      <Typography variant='subtitle2' textTransform='uppercase'>About Me</Typography>
      <Grid container>
        <SelfDescriptionCard/>
      </Grid>
    </Stack>
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