// Modules
import { grey, indigo } from "@mui/material/colors";

// Style
import FlexStyle from "../../styles/flex";

const PageContainerStyle = {

  MainContainer: {
    backgroundColor:grey[100],
    minHeight:'100vh'
  },

  MainPaddingContainer: {
    padding:2,
    paddingTop:{
      xs:14,
      md:12
    },
    height:'100%',
    rowGap:2
  },

  TopBarContainer: {
    backgroundColor:indigo[500],
    width:'100%',
    position:'fixed',
    top:0,
    zIndex:1
  },

  TopBarPaddingContainer: {
    padding:2,
    ...FlexStyle.RowAlignCenterJustifyBetween
  }

}

export default PageContainerStyle;