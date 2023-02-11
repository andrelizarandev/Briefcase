const FlexStyle = {

  AlignCenterJustifyCenter: {
    alignItems:'center',
    justifyContent:'center'
  },

  RowAlignCenterJustifyBetween: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },

  Row: {
    flexDirection:'row',
  },

  RowColumnGap2:{ 
    flexDirection:'row',
    columnGap:2,
    flexWrap:'wrap'
  },

  RowColumnGap2RowGap2:{ 
    flexDirection:'row',
    columnGap:2,
    flexWrap:'wrap',
    rowGap:2
  },

}

export default FlexStyle;