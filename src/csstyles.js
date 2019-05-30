// @flow
// @format

import { StyleSheet, Dimensions } from 'react-native'
import { Header } from 'react-navigation'
import { DEVICE_BOTTOM_SAFE,
  DEVICE_TOP_SAFE,
  IS_DEVICE_SHORT_HEIGHT,
  IS_DEVICE_VERY_LONG_WIDTH , DEVICE_SCREEN_WIDTH} from './utils/deviceHelper'

const marginView = 10
const widthProduct = (Dimensions.get('window').width - marginView * 2)/3 - marginView * 3

const vars = {
  csGreyDark:'#363A44',
  csGrey: '#515151',
  csGreen: '#00A763',
  csGreenLight: '#5D9800',
  csGreenDark: '#163D26',
  csOrange: '#f88100',
  csGreenDeep: '#005E4D', 
  csGreenBorder: '#154864',
  csDanger: '#DC3545',
  csBrown: '#5F5F5F',
  csLight: '#D8D8D8',
  csWhite: '#FFFFFF',
  csBlack: '#000000',
  csBlue: '#005A8A',
  csDollar: '#2B593F',
  csContainer: '#F4F4F4',
  csBoxMargin: marginView,
  csHeader: DEVICE_TOP_SAFE + 44,
  csBoxBorderWidth: 2,
  csBoxBorderRadius: 6,
  csBoxBorderRadius2x: 16,
  csBoxSpacingHalf: IS_DEVICE_VERY_LONG_WIDTH ? 6 : 4,
  csBoxSpacing: IS_DEVICE_VERY_LONG_WIDTH ? 20 : 8,
  csBoxSpacing2x: IS_DEVICE_VERY_LONG_WIDTH ? 24 : 16,
  csInputHeight: IS_DEVICE_SHORT_HEIGHT ? 30 : 44,
  csInputBorderRaius: IS_DEVICE_SHORT_HEIGHT ? 15 : 22,
  csInputHorizontalPadding: IS_DEVICE_SHORT_HEIGHT ? 13 : 20,
  widthForContainerOnLargeScreen: 500,
  widthProduct
}

const mixin = {
  csBlackOpacity: (opacity: number) => `rgba(0, 0, 0, ${opacity.toFixed(2)})`,
  csGreyOpacity: (opacity: number) => `rgba(34, 34, 34, ${opacity.toFixed(2)})`,
  csGreenLightOpacity: (opacity: number) => `rgba(0, 167, 99, ${opacity.toFixed(2)})`,
  csGreenDeepOpacity: (opacity: number) => `rgba(0, 94, 77, ${opacity.toFixed(2)})`
}

const text = StyleSheet.create({
  regular: {
    fontFamily: 'SFProDisplay-Regular'
  },
  medium: {
    fontFamily: 'SFProDisplay-Medium'
  },
  bold: {
    fontFamily: 'SFProDisplay-Bold'
  },
  textPrimary: {
    color: vars.csBlack
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
  textMain: {
    color: vars.csGrey
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
  fullBottomSafe: {
    flex: 1,
    paddingBottom: DEVICE_BOTTOM_SAFE
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
  columnCenter: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
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
    overflow: 'visible',
    borderWidth:0,
    backgroundColor: vars.csWhite
  },
  viewBelowHeader: {
    marginTop: Header.HEIGHT,
    flex: 1
  },
  textGroup: {
    paddingBottom: vars.csBoxSpacing2x,
    fontSize: 18
  },
  inputIcon: {
    width: vars.csInputHeight,
    height: vars.csInputHeight,
    borderRadius: vars.csInputBorderRaius,
    backgroundColor: vars.csGreen,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: -2,
    right: -2
  },
  shadow: {
    // IOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    // Android
    elevation: 5,
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
  },
  shadowView: {
    overflow: 'visible',
    height: 0.5,
    width: DEVICE_SCREEN_WIDTH,
    backgroundColor: vars.csWhite,
    ...base.shadow,
    shadowOpacity: 0.5
  },
})

const statusColor = {
  pendding:'#007F77',
  processing: '#00C9BD',
  canceled: '#ED5350',
  error: '#FFCD61',
  sucess: '#4A9E42'
}

const fontSize = {
  verySmall: 10,
  small: 12,
  normal: 14,
  medium: 16,
  large: 18
}

const chartConfig = {
  
}

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
  indicatorCustomStyles,
  statusColor,
  fontSize
}
