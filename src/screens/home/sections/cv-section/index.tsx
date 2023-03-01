// Modules
import { Stack } from '@mui/material';

// Components
import SectionContainer from '../../../../containers/section-container';
import GreenFilledButton from '../../../../components/_buttons/green-filled-button';

// Hooks
import useCv from '../../../../data/cv';

// Icons
import DownloadIcon from '@mui/icons-material/Download';

// Style
import FlexStyle from '../../../../styles/flex'

export default function CvSection () {
  
  return (
    <SectionContainer title='CV'>
      <Stack sx={FlexStyle.RowColumnGap2}>
        {
          useCv().map(({ link, title }) => (
            <a href={link} target="_blank">
              <GreenFilledButton startIcon={<DownloadIcon/>}>{title}</GreenFilledButton>
            </a>
          ))
        }
      </Stack>
    </SectionContainer>
  )
}
