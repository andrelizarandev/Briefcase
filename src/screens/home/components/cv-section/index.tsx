// Modules
import { Stack } from '@mui/material';

// Components
import SectionContainer from '../../../../containers/section-container';
import GreenFilledButton from '../../../../components/_buttons/green-filled-button';

// Icons
import DownloadIcon from '@mui/icons-material/Download';

// Style
import FlexStyle from '../../../../styles/flex'

export default function CvSection () {
  return (
    <SectionContainer title='CV'>
      <Stack sx={FlexStyle.RowColumnGap2}>
        <GreenFilledButton startIcon={<DownloadIcon/>}>In Engligh</GreenFilledButton>
        <GreenFilledButton startIcon={<DownloadIcon/>}>In Spanish</GreenFilledButton>
      </Stack>
    </SectionContainer>
  )
}
