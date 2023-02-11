// Modules
import { Stack } from '@mui/material';
import IndigoChip from '../../../../components/_chips/indigo-chip ';

// Components
import SectionContainer from '../../../../containers/section-container';

// Icons
import LanguageIcon from '@mui/icons-material/Language'

// Style
import FlexStyle from '../../../../styles/flex';

export default function LanguagesSection () {
  return (
    <SectionContainer title='Languages'>
      <Stack sx={FlexStyle.RowColumnGap2}>
        <IndigoChip icon={<LanguageIcon/>} label='Spanish - Native'/>
        <IndigoChip icon={<LanguageIcon/>} label='English - Advanced'/>
      </Stack>
    </SectionContainer>
  )
}
