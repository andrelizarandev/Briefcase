// Modules
import { lightGreen } from "@mui/material/colors";

// Style
import FlexStyle from "../../../../styles/flex";

const ExperienceSectionStyle = {

  ExperienceCardPaddingContainer: {
    ...FlexStyle.AlignCenterJustifyCenter,
    padding:2,
    textAlign:'center',
    rowGap:2
  },

  Logo: {
    height:'50px'
  },

  BottomBorder: {
    backgroundColor:lightGreen[400],
    borderRadius:'0 0 4px 4px',
    paddingY:.3
  }

}

export default ExperienceSectionStyle;