// @flow
// @format

import { StyleSheet, Dimensions } from 'react-native'
import { Header } from 'react-navigation'
import { DEVICE_BOTTOM_SAFE,
  DEVICE_TOP_SAFE,
  IS_DEVICE_SHORT_HEIGHT,
  IS_DEVICE_VERY_LONG_WIDTH } from './utils/deviceHelper'

const widthProduct = Dimensions.get('window').width/2 - 24

const vars = {
  csGreyDark:'#363A44',
  csGrey: '#1C1E24',
  csGreen: '#2d6446',
  csOrange: '#f88100',
  csGreenDeep: '#137ab1', 
  csGreenBorder: '#154864',
  csDanger: '#DC3545',
  csBrown: '#5F5F5F',
  csLight: '#D8D8D8',
  csWhite: '#FFFFFF',
  csBlack: '#000000',
  csBlue: '#3D4D8D',
  csDollar: '#2B593F',
  csBoxMargin: 16,
  csHeader: DEVICE_TOP_SAFE + 44,
  csBoxBorderWidth: 2,
  csBoxBorderRadius: 6,
  csBoxBorderRadius2x: 16,
  csBoxSpacingHalf: IS_DEVICE_VERY_LONG_WIDTH ? 6 : 4,
  csBoxSpacing: IS_DEVICE_VERY_LONG_WIDTH ? 12 : 8,
  csBoxSpacing2x: IS_DEVICE_VERY_LONG_WIDTH ? 24 : 16,
  csInputHeight: IS_DEVICE_SHORT_HEIGHT ? 30 : 44,
  csInputBorderRaius: IS_DEVICE_SHORT_HEIGHT ? 15 : 22,
  csInputHorizontalPadding: IS_DEVICE_SHORT_HEIGHT ? 13 : 20,
  widthForContainerOnLargeScreen: 500,
  widthProduct
}

const mixin = {
  csBlackOpacity: (opacity: number) => `rgba(0, 0, 0, ${opacity.toFixed(2)})`,
  csGreyOpacity: (opacity: number) => `rgba(34, 34, 34, ${opacity.toFixed(2)})`
}

const text = StyleSheet.create({
  regular: {
    fontFamily: 'Montserrat-Regular'
  },
  medium: {
    fontFamily: 'Montserrat-Medium'
  },
  bold: {
    fontFamily: 'Montserrat-Bold'
  },
  textPrimary: {
    color: vars.csGreen
  },
  textWhite: {
    color: vars.csWhite
  },
  textDanger: {
    color: vars.csDanger
  },
  textSecondary: {
    color: vars.csBrown
  },
  textLight: {
    color: vars.csLight
  }
})

const nav = StyleSheet.create({
  header: {
    backgroundColor: vars.csGreen,
    elevation: 0,
    shadowColor: 'transparent',
    borderBottomWidth: 0,
    shadowRadius: 0,
    shadowOffset: {
      height: 0
    }
  }
})
//['#2A3540', '#36424F', '#445160']
//['#010101', '#1A1A1A', '#3F3F3F'] dark
const gradients = ['#39373E', '#555057', '#39373E']

const base = StyleSheet.create({
  full: {
    position: 'relative',
    flex: 1
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  fullCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  fullTopSafe: {
    flex: 1,
    paddingTop: DEVICE_TOP_SAFE 
  },
  fullTopBottomSafe: {
    flex: 1,
    paddingTop: DEVICE_TOP_SAFE,
    paddingBottom: DEVICE_BOTTOM_SAFE
  },
  form: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: DEVICE_TOP_SAFE,
    paddingBottom: DEVICE_BOTTOM_SAFE
  },
  rowCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  rowCenterLine: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  rowCenterLineBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  row: {
    flexDirection: 'row'
  },
  column: {
    flexDirection: 'column'
  },
  relative: {
    position: 'relative'
  },
  rowWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  rowReverse: {
    flexDirection: 'row-reverse'
  },
  absoluteFull: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  absoluteTopLeft: {
    position: 'absolute',
    top: 0,
    left: 0
  },
  absoluteBottomLeftRight: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0
  },
  absoluteTopBottomLeft: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0
  },
  absoluteTopBottomRight: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0
  },
  cardPrimary: {
    backgroundColor: vars.csWhite,
    borderWidth: vars.csBoxBorderWidth,
    borderColor: vars.csGreen,
    borderRadius: vars.csBoxBorderRadius,
    padding: vars.csBoxSpacing,
    marginBottom: vars.csBoxSpacing,
    overflow: 'hidden'
  },
  cardSecondary: {
    backgroundColor: vars.csGrey,
    borderRadius: vars.csBoxBorderRadius,
    padding: vars.csBoxSpacing,
    marginBottom: vars.csBoxSpacing,
    overflow: 'hidden'
  },
  linePrimary: {
    height: 1,
    backgroundColor: vars.csGreen,
    marginTop: 3,
    marginBottom: 2
  },
  backBtn: {
    position: 'absolute',
    top: vars.csBoxSpacing2x + DEVICE_TOP_SAFE,
    left: vars.csBoxSpacing2x
  },
  headerStyle: {
    top: vars.csBoxSpacing2x + DEVICE_TOP_SAFE,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    zIndex: 100
  },
  bottomView: {
    marginBottom: 0,
    height: DEVICE_BOTTOM_SAFE + 50
  },
  markdown: {
    marginHorizontal: vars.csBoxMargin
  },
  scrollableTabBar: {
    borderWidth:0,
    backgroundColor: vars.csGrey
  },
  viewBelowHeader: {
    marginTop: Header.HEIGHT,
    flex: 1
  }
})

const screen = StyleSheet.create({
  main: {
    ...base.fullTopBottomSafe,
    backgroundColor: vars.csGrey
  }
})

const border = StyleSheet.create({
  top: {
    borderTopWidth: vars.csBoxBorderWidth
  },
  primary: {
    borderColor: vars.csGreen
  }
})

const indicatorCustomStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize:30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#fe7013',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#fe7013',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#fe7013',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#fe7013',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#fe7013',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 10,
  currentStepLabelColor: '#fe7013'
}

export default {
  mixin,
  vars,
  text,
  base,
  border,
  nav,
  screen,
  gradients,
  indicatorCustomStyles
}
