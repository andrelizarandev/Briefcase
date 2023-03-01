// Modules
import { grey } from '@mui/material/colors';
import { Paper, Stack, Typography } from '@mui/material';

// Components
import SectionContainer from '../../../../containers/section-container';

// Hooks
import useGeneralData from '../../../../data/general';
import useAboutMeData from '../../../../data/about-me';

export default function AboutMeSection () {
  const { aboutMe } = useGeneralData();
  return (
    <SectionContainer title={aboutMe}>
      <SelfDescriptionCard/>
    </SectionContainer>
  )
}

function SelfDescriptionCard () {
  const { selfDescription } = useAboutMeData();
  return (
    <Paper>
      <Stack padding={2}>
        <Typography variant='body2' color={grey[700]}>{selfDescription}</Typography>
      </Stack>
    </Paper>
  )
}