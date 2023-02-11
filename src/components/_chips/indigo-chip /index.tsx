// Modules
import { Chip } from '@mui/material';
import { styled } from '@mui/material/styles';
import { indigo } from '@mui/material/colors';

const IndigoChip = styled(Chip)(({

  backgroundColor:indigo[600],
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

export default IndigoChip;