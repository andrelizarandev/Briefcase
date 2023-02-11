// Modules
import { Stack } from '@mui/material';

// Components
import GreenChip from '../../../../components/_chips/green-chip';

// Icons
import GamesIcon from '@mui/icons-material/Games';
import MovieIcon from '@mui/icons-material/Movie';
import GroupIcon from '@mui/icons-material/Group';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';

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
  return (
    <Stack rowGap={2}>
      <Stack sx={FlexStyle.RowColumnGap2RowGap2}>
        <GreenChip label='Videogames' icon={<GamesIcon />}/>
        <GreenChip label='Music' icon={<GraphicEqIcon />}/>
        <GreenChip label='Horror Movies' icon={<MovieIcon />}/>
        <GreenChip label='Programming' icon={<KeyboardIcon />}/>
        <GreenChip label='Hanging out with Friends' icon={<GroupIcon />}/>
      </Stack>
    </Stack>
  )
}
