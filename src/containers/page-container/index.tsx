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
          {props.children}
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
          <Stack sx={FlexStyle.Row}>
            <WhiteTextButton size='small'>About Me</WhiteTextButton>
            <WhiteTextButton size='small'>Education</WhiteTextButton>
            <WhiteTextButton size='small'>Tools</WhiteTextButton>
            <WhiteTextButton size='small'>Experience</WhiteTextButton>
          </Stack>
          <GreenFilledButton size='small'>Contacts</GreenFilledButton>
        </Stack>
      </Stack>
    </Stack>
  )
}
