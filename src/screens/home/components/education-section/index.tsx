// Modules
import { Grid, Stack, Typography } from '@mui/material';

// Components
import CardStack from '../../../../components/_common/card-stack';
import GridXS12MD6 from '../../../../components/_grid/grid-xs12-md6';

// Data
import { EducationCardContent, EducationList } from '../../../../data/education';

export default function EducationSection () {
  return (
    <Stack rowGap={2}>
      <Typography 
        variant='subtitle2' 
        textTransform='uppercase'
      >Education</Typography>
      <Grid container spacing={2}>
        {EducationList.map((data, key) => <EducationCard {...data} key={key}/>)}
      </Grid>
    </Stack>
  )
}

function EducationCard (data:EducationCardContent) {
  const { description, image, title, time } = data;
  const payload = { title1:title, title2:description, title3:time, img:image }
  return (
    <GridXS12MD6>
      <CardStack {...payload}/>
    </GridXS12MD6>
  )
}

