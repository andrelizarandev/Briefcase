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

        <a href="/cv/CV-EN.pdf" target="_blank">
          <GreenFilledButton startIcon={<DownloadIcon/>}>In Engligh</GreenFilledButton>
        </a>

        <a href="/cv/CV-ES.pdf" target="_blank">
          <GreenFilledButton startIcon={<DownloadIcon/>}>In Spanish</GreenFilledButton>
        </a>

      </Stack>
    </SectionContainer>
  )
}
