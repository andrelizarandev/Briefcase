// Modules
import { ReactNode } from 'react';
import { Button, Stack, Typography } from '@mui/material';

// Components
import WhiteTextButton from '../../components/_buttons/white-text-button';
import GreenFilledButton from '../../components/_buttons/green-filled-button';

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
  return (
    <Stack sx={PageContainerStyle.TopBarContainer}>
      <Stack sx={PageContainerStyle.TopBarPaddingContainer}>
        <Typography color='white' variant='subtitle2' textTransform='uppercase'>André Lizarán</Typography>
        <Stack sx={FlexStyle.RowColumnGap2}>
          <GreenFilledButton size='small'>Change Languaje</GreenFilledButton>
        </Stack>
      </Stack>
    </Stack>
  )
}
