// Modules
import { Stack } from '@mui/material';

// Components
import IndigoChip from '../../../../components/_chips/indigo-chip ';
import SectionContainer from '../../../../containers/section-container';

// Hooks
import useGeneralData from '../../../../data/general';
import useLanguageData from '../../../../data/language';

// Icons
import LanguageIcon from '@mui/icons-material/Language'

// Style
import FlexStyle from '../../../../styles/flex';

export default function LanguagesSection () {

  const { languages } = useGeneralData();
  const { getLanguageData } = useLanguageData();

  return (
    <SectionContainer title={languages}>
      <Stack sx={FlexStyle.RowColumnGap2}>
        {getLanguageData().map((label) => <IndigoChip icon={<LanguageIcon/>} label={label}/>)}
      </Stack>
    </SectionContainer>
  )
}
