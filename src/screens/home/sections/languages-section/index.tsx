// Modules
import { Stack } from '@mui/material';

// Components
import IndigoChip from '../../../../components/_chips/indigo-chip ';
import SectionContainer from '../../../../containers/section-container';

// Hooks
import useGeneralData from '../../../../data/general';

// Icons
import LanguageIcon from '@mui/icons-material/Language'

// Style
import FlexStyle from '../../../../styles/flex';

export default function LanguagesSection () {
  const { languages } = useGeneralData();
  return (
    <SectionContainer title={languages}>
      <Stack sx={FlexStyle.RowColumnGap2}>
        <IndigoChip icon={<LanguageIcon/>} label='Spanish - Native'/>
        <IndigoChip icon={<LanguageIcon/>} label='English - Advanced'/>
      </Stack>
    </SectionContainer>
  )
}
