// Modules
import { Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import { lightGreen } from '@mui/material/colors';

const GreenChip = styled(Chip)(({

  backgroundColor:lightGreen[600],
  color:'white',
  fontWeight:'bold',
  textTransform:'uppercase',
  padding:6,
  fontSize:'12px',

  '.MuiChip-icon': {
    color:'white',
    size:'2px !important'
  }

}));

export default GreenChip;