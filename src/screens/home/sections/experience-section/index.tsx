// Modules
import { grey } from '@mui/material/colors';
import { Grid, Paper, Stack, Typography } from '@mui/material';

// Components
import SectionContainer from '../../../../containers/section-container';
import GridXS12MD6LG4 from '../../../../components/_grid/grid-xs12-md6-lg4';

// Data
import { ExperienceData, ExperienceList } from '../../../../data/experience';

// Style
import ExperienceSectionStyle from './style';

export default function ExperienceSection () {
  return (
    <SectionContainer title='Experience'>
      <Grid container spacing={2}>
        {ExperienceList.map((data, key) => <ExperienceCard key={key} {...data}/>)}
      </Grid>
    </SectionContainer>
  )
}

function ExperienceCard (data:ExperienceData) {
  const { description, img, subtitle, title } = data;
  return (
    <GridXS12MD6LG4>
      <Paper>
        <Stack sx={ExperienceSectionStyle.ExperienceCardPaddingContainer}>
          <img src={img} style={ExperienceSectionStyle.Logo}/>
          <Stack>
            <Typography variant='subtitle2' textTransform='uppercase'>{title}</Typography>
            <Typography variant='caption' textTransform='uppercase' color={grey[700]}>{subtitle}</Typography>
            <Typography variant='caption'>{description}</Typography>
          </Stack>
        </Stack>
      </Paper>
    </GridXS12MD6LG4>
  )
}