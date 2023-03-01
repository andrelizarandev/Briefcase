// Modules
import { grey, indigo } from "@mui/material/colors";

// Style
import FlexStyle from "../../styles/flex";

const PageContainerStyle = {

  MainContainer: {
    width:'100%',
    backgroundColor:grey[100],
    height:'93vh',
    position:'fixed',
    overflow:'auto',
    bottom:0,
  },

  MainPaddingContainer: {
    padding:2,
    rowGap:2
  },

  TopBarContainer: {
    height:'7vh',
    backgroundColor:indigo[500],
    width:'100%',
    position:'fixed',
    top:0,
    zIndex:1,
    overflow:'auto',
    justifyContent:'center'
  },

  TopBarPaddingContainer: {
    padding:2,
    ...FlexStyle.RowAlignCenterJustifyBetween
  }

}

export default PageContainerStyle;