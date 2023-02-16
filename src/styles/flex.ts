const FlexStyle = {

  AlignCenterJustifyCenter: {
    alignItems:'center',
    justifyContent:'center'
  },

  RowAlignCenterJustifyBetween: {
    flexDirection:{
      xs:'column',
      md:'row'
    },
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

  RowJustifyCenterColumnGap2RowGap2:{ 
    flexDirection:'row',
    columnGap:2,
    flexWrap:'wrap',
    rowGap:2,
    justifyContent:'center'
  },

}

export default FlexStyle;