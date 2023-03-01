// Modules
import { styled } from '@mui/material/styles';
import { Button, ButtonProps } from '@mui/material';
import { grey, indigo } from '@mui/material/colors';

const IndigoButton = styled(Button)<ButtonProps>(({
  color:'white',
  backgroundColor: indigo[500],
  paddingRight:18,
  paddingLeft:18,
  fontSize:'12px',
  '&:hover': {
    backgroundColor: indigo[600]
  },
  '&:disabled': {
    backgroundColor: grey[400],
    color:'black'
  }
}));

export default IndigoButton;