// Modules
import { styled } from '@mui/material/styles';
import { Button, ButtonProps } from '@mui/material';
import { grey, lightGreen } from '@mui/material/colors';

const GreenFilledButton = styled(Button)<ButtonProps>(({
  color:'white',
  backgroundColor: lightGreen[500],
  paddingRight:18,
  paddingLeft:18,
  fontSize:'12px',
  '&:hover': {
    backgroundColor: lightGreen[600]
  },
  '&:disabled': {
    backgroundColor: grey[400],
    color:'black'
  }
}));

export default GreenFilledButton;