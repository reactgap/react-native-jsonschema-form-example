// @flow
// @format

import { StyleSheet } from 'react-native'
import csstyles from '../../csstyles'
import { DEVICE_SCREEN_HEIGHT,
  IS_DEVICE_SHORT_HEIGHT,
  IS_DEVICE_VERY_LONG_WIDTH } from '../../utils/deviceHelper'

let logoSize = 150

if (IS_DEVICE_SHORT_HEIGHT) {
  logoSize = 80
} else if (IS_DEVICE_VERY_LONG_WIDTH) {
  logoSize = 300
}

const baseFormStyles = StyleSheet.create({
  screen: {
    ...csstyles.base.full,
    backgroundColor: csstyles.vars.csGrey
  },
  container: {
    ...csstyles.base.fullTopBottomSafe,
    height: DEVICE_SCREEN_HEIGHT
  },
  containerOnKeyboardOpen: {
    ...csstyles.base.fullTopBottomSafe
  },
  top: {
    ...csstyles.base.full,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: logoSize,
    height: logoSize,
    borderRadius: 8
  },
  backBtn: {
    position: 'absolute',
    top: csstyles.vars.csBoxSpacing,
    left: csstyles.vars.csBoxSpacing2x
  },
  form: {
    paddingHorizontal: csstyles.vars.csBoxSpacing2x,
    justifyContent: 'center',
    marginBottom: csstyles.vars.csBoxSpacing
  },
  formTitle: {
    ...csstyles.text.bold,
    ...csstyles.text.textPrimary,
    textAlign: 'center',
    fontSize: 19,
    marginBottom: csstyles.vars.csBoxSpacing
  },
  formDesc: {
    ...csstyles.text.regular,
    ...csstyles.text.textWhite,
    textAlign: 'center',
    fontSize: 14,
    marginBottom: csstyles.vars.csBoxSpacing
  },
  forgotPassword: {
    marginTop: csstyles.vars.csBoxSpacing2x
  },
  question: {
    ...csstyles.text.medium,
    ...csstyles.text.textWhite,
    fontSize: 14,
    marginTop: csstyles.vars.csBoxSpacing2x,
    marginBottom: csstyles.vars.csBoxSpacing2x
  }
})

export default baseFormStyles
