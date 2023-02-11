// Modules
import { ReactNode } from 'react';
import { Paper, Stack, Typography } from '@mui/material';

// Style
import PaperStackStyle from './style';

type Props = {
  title:string;
  children:ReactNode;
}

export default function PaperStack (props:Props) {
  return (
    <Paper sx={PaperStackStyle.MainContainer}>
      <Stack sx={PaperStackStyle.MainPaddingContainer}>
        <Typography variant='subtitle2' textTransform='uppercase'>{props.title}</Typography>
        {props.children}
      </Stack>
    </Paper>
  )
}
