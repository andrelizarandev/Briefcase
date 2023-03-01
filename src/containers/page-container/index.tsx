// Modules
import { ReactNode, useContext } from 'react';
import { Stack, Typography } from '@mui/material';

// Components
import GreenFilledButton from '../../components/_buttons/green-filled-button';

// Contexts
import { MainContext } from '../../contexts';

// Hooks
import useGeneralData from '../../data/general';

// Style
import PageContainerStyle from './style';
import FlexStyle from '../../styles/flex';

type Props = { children:ReactNode };

export default function PageContainer (props:Props) {
  return (
    <>
      <TopBar/>
      <Stack sx={PageContainerStyle.MainContainer}>
        <Stack sx={PageContainerStyle.MainPaddingContainer}>
          <Stack sx={PageContainerStyle.MainPaddingHelperContainer}>
            {props.children}
          </Stack>
        </Stack>
      </Stack>
    </>
  )
}

function TopBar () {
  const { toggleLanguage } = useContext(MainContext);
  const { btnChangeLanguage } = useGeneralData();
  return (
    <Stack sx={PageContainerStyle.TopBarContainer}>
      <Stack sx={PageContainerStyle.TopBarPaddingContainer}>
        <Typography color='white' variant='subtitle2' textTransform='uppercase'>André Lizarán</Typography>
        <Stack sx={FlexStyle.RowColumnGap2}>
          <GreenFilledButton size='small' onClick={toggleLanguage}>{btnChangeLanguage}</GreenFilledButton>
        </Stack>
      </Stack>
    </Stack>
  )
}
