// Modules
import { Stack } from '@mui/material';

// Components
import GreenChip from '../../../../components/_chips/green-chip';
import useAboutMeData from '../../../../data/about-me';


// Style
import FlexStyle from '../../../../styles/flex';

export default function HoobiesMeSection () {
  return (
    <Stack rowGap={2}>
      <HoobiesContainer/>
    </Stack>
  )
}

function HoobiesContainer () {
  const { hobbiesList } = useAboutMeData();
  return (
    <Stack rowGap={2}>
      <Stack sx={FlexStyle.RowColumnGap2RowGap2}>
        {hobbiesList.map(({ icon, label }) => <GreenChip label={label} icon={icon}/>)}
      </Stack>
    </Stack>
  )
}
