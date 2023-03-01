// Modules
import { grey, indigo } from "@mui/material/colors";

// Style
import FlexStyle from "../../styles/flex";

const PageContainerStyle = {

  MainContainer: {
    backgroundColor:grey[100],
    minHeight:'100vh',
  },

  MainPaddingContainer: {
    padding:2,
    paddingTop:'7vh'
  },

  MainPaddingHelperContainer: {
    paddingTop:2,
    rowGap:2,
  },

  TopBarContainer: {
    height:'7vh',
    backgroundColor:indigo[500],
    width:'100%',
    position:'fixed',
    top:0,
    zIndex:1,
    justifyContent:'center'
  },

  TopBarPaddingContainer: {
    padding:2,
    ...FlexStyle.RowAlignCenterJustifyBetween
  }

}

export default PageContainerStyle;