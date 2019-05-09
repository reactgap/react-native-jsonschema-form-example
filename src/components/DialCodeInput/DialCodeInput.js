// @flow

import React, { PureComponent } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import csstyles from '../../csstyles'
import DialCodePicker from './Picker/DialCodePicker'
import { IS_DEVICE_VERY_LONG_WIDTH } from '../../utils/deviceHelper'

type Props = {
  countryName: string,
  dialCode: string,
  selectText: string,
  onChange: (countryName: string, dialCode: string) => void,
  label?: string,
  pickerCenter?: boolean
}

type State = {
  showingPicker: boolean
}

class DialCodeInput extends PureComponent<Props, State> {
  state: State = {
    showingPicker: false
  }

  onPress = () => {
    this.setState({
      showingPicker: true
    })
  }

  onChange = (countryName: string, dialCode: string) => {
    const { onChange } = this.props

    this.setState({
      showingPicker: false
    })

    onChange(countryName, dialCode)
  }

  render() {
    const { countryName, dialCode, label, selectText, pickerCenter } = this.props
    const { showingPicker } = this.state

    return (
      <View
        style={{
          marginBottom: csstyles.vars.csBoxSpacing
        }}
      >
        <DialCodePicker
          isOpen={showingPicker}
          countryName={countryName}
          dialCode={dialCode}
          center={pickerCenter}
          onChange={this.onChange}
        />

        {label && <Text style={styles.label}>{label}</Text>}
        <View style={csstyles.base.rowCenterLineBetween}>
          <TouchableOpacity activeOpacity={0.8} onPress={this.onPress} style={csstyles.base.full}>
            <View style={styles.inputContainer}>
              <Text style={[styles.inputText, dialCode ? null : styles.selecText]}>
                {dialCode ? `${countryName} (${dialCode})` : selectText}
              </Text>

              <View style={styles.inputIcon}>
                <FontAwesome5 size={20} name="globe" color={csstyles.vars.csWhite} />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: csstyles.vars.csBoxBorderWidth,
    borderColor: csstyles.vars.csGreen,
    height: csstyles.vars.csInputHeight,
    borderRadius: csstyles.vars.csInputBorderRaius,
    overflow: 'hidden',
    backgroundColor: csstyles.vars.csBlack,
    position: 'relative',
    justifyContent: 'center',
    paddingLeft: csstyles.vars.csInputHorizontalPadding,
    paddingRight: csstyles.vars.csInputHeight + csstyles.vars.csBoxSpacing
  },
  inputText: {
    color: csstyles.vars.csWhite,
    ...csstyles.text.regular,
    fontSize: 16,
    textAlignVertical: 'center'
  },
  inputIcon: {
    width: csstyles.vars.csInputHeight,
    height: csstyles.vars.csInputHeight,
    borderRadius: csstyles.vars.csInputBorderRaius,
    backgroundColor: csstyles.vars.csGreen,
    ...csstyles.base.center,
    position: 'absolute',
    top: -2,
    right: -2
  },
  label: {
    paddingLeft: csstyles.vars.csInputHorizontalPadding,
    ...csstyles.text.textPrimary,
    ...csstyles.text.medium,
    fontSize: 13,
    marginBottom: csstyles.vars.csBoxSpacingHalf
  },
  selecText: {
    color: csstyles.vars.csGreen
  }
})

export default DialCodeInput
