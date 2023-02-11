// Modules
import { ReactNode } from 'react';
import { Stack, Typography } from '@mui/material';

type Props = { title:string, children:ReactNode }

export default function SectionContainer (props:Props) {
  return (
    <Stack rowGap={2}>
      <Typography variant='subtitle2' textTransform='uppercase'>{props.title}</Typography>
      {props.children}
    </Stack>
  )
}
