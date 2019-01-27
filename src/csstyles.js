// @flow
// @format

import { StyleSheet } from 'react-native'
import { DEVICE_BOTTOM_SAFE,
  DEVICE_TOP_SAFE,
  IS_DEVICE_SHORT_HEIGHT,
  IS_DEVICE_VERY_LONG_WIDTH } from './utils/deviceHelper'

const vars = {
  csGrey: '#363A44',
  csGreen: '#05BE76',
  csDanger: '#DC3545',
  csBrown: '#5F5F5F',
  csLight: '#D8D8D8',
  csWhite: '#FFFFFF',
  csBlack: '#000000',
  csBoxBorderWidth: 2,
  csBoxBorderRadius: 8,
  csBoxBorderRadius2x: 16,
  csBoxSpacingHalf: IS_DEVICE_VERY_LONG_WIDTH ? 6 : 4,
  csBoxSpacing: IS_DEVICE_VERY_LONG_WIDTH ? 12 : 8,
  csBoxSpacing2x: IS_DEVICE_VERY_LONG_WIDTH ? 24 : 16,
  csInputHeight: IS_DEVICE_SHORT_HEIGHT ? 30 : 44,
  csInputBorderRaius: IS_DEVICE_SHORT_HEIGHT ? 15 : 22,
  csInputHorizontalPadding: IS_DEVICE_SHORT_HEIGHT ? 13 : 20,
  widthForContainerOnLargeScreen: 500
}

const mixin = {
  csBlackOpacity: (opacity: number) => `rgba(0, 0, 0, ${opacity.toFixed(2)})`,
  csGreyOpacity: (opacity: number) => `rgba(34, 34, 34, ${opacity.toFixed(2)})`
}

const text = StyleSheet.create({
  regular: {
    // fontFamily: 'Montserrat-Regular'
  },
  medium: {
    // fontFamily: 'Montserrat-Medium'
  },
  bold: {
    // fontFamily: 'Montserrat-Bold'
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
    backgroundColor: vars.csGrey,
    elevation: 0,
    shadowColor: 'transparent',
    borderBottomWidth: 0,
    shadowRadius: 0,
    shadowOffset: {
      height: 0
    }
  }
})

const base = StyleSheet.create({
  full: {
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
  form: {
    marginTop: 60,
    marginHorizontal: 30
  },
})

const border = StyleSheet.create({
  top: {
    borderTopWidth: vars.csBoxBorderWidth
  },
  primary: {
    borderColor: vars.csGreen
  }
})

export default {
  mixin,
  vars,
  text,
  base,
  border,
  nav
}
