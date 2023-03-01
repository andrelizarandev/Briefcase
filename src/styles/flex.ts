const FlexStyle = {

  AlignCenterJustifyCenter: {
    alignItems:'center',
    justifyContent:'center'
  },

  RowAlignCenterJustifyBetween: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    rowGap:1
  },

  Row: {
    flexDirection:'row',
  },

  RowColumnGap2:{ 
    flexDirection:'row',
    columnGap:2,
    flexWrap:'wrap',
    rowGap:2
  },

  RowColumnGap2RowGap2:{ 
    flexDirection:'row',
    columnGap:2,
    flexWrap:'wrap',
    rowGap:2
  },

  HStackJustifyCenter:{ 
    flexDirection:'row',
    columnGap:2,
    rowGap:2,
    flexWrap:'wrap',
    justifyContent:'center'
  },

  XSVStackMDRStack: {
    flexDirection: {
      xs:'column',
      md:'row'
    },
    columnGap:2,
    rowGap:2,
    alignItems:'center',
    justifyContent:{
      xs:'center',
      md:'space-between'
    }
  }

}

export default FlexStyle;