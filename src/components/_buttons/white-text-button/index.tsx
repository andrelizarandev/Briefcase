// Modules
import { styled } from '@mui/material/styles';
import { Button, ButtonProps } from '@mui/material';

const WhiteTextButton = styled(Button)<ButtonProps>(({
  color:'white',
  paddingRight:18,
  paddingLeft:18,
  fontSize:'12px',
}));

export default WhiteTextButton;