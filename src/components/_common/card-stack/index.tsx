// Modules
import { Paper, Stack, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

// Style
import CardStackStyle from './style';

type Props = {
  title1:string;
  title2:string;
  title3:string;
  img:string;
}

export default function CardStack (props:Props) {
  const { title1, title2, title3, img } = props;
  return (
    <Paper>
      <Stack sx={CardStackStyle.PaddingContainer}>

        <Stack>
          <Typography variant='subtitle2' textTransform='uppercase'>{title1}</Typography>
          <Typography variant='caption' textTransform='uppercase' color={grey[700]}>{title2}</Typography>
          <Typography variant='caption' textTransform='uppercase'>{title3}</Typography>
        </Stack>
        <img src={img} style={CardStackStyle.Img}/>
        
      </Stack>
    </Paper>
  )
}
