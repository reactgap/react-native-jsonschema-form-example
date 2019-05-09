// @flow

import React, { PureComponent } from 'react'
import { Text, View, TextInput, StyleSheet, type ViewStyle } from 'react-native'
import csstyles from '../../csstyles'

type Props = {
  placeholder: string,
  autoCapitalize?: 'none' | 'words',
  onChange?: (text: string) => void,
  value?: string,
  keyboardType?: 'email-address' | 'number-pad' | 'default',
  multiline?: boolean,
  password?: boolean,
  wrapperStyle?: ViewStyle,
  inputStyle?: ViewStyle,
  invalid?: boolean,
  invalidMessage?: string,
  blurOnSubmit?: boolean,
  disabled?: boolean,
  returnKeyType?: 'default' | 'send'
}

type State = {
  touched: boolean
}

class TextField extends PureComponent<Props, State> {
  static defaultProps = {
    password: false,
    keyboardType: 'default',
    autoCapitalize: 'none',
    multiline: false
  }

  state: State = {
    touched: false
  }

  inputRef: TextInput | null = null

  onBlur = () => {
    const { touched } = this.state

    if (!touched) {
      this.setState({
        touched: true
      })
    }
  }

  focus = () => {
    this.inputRef && this.inputRef.focus()
  }

  blur = () => {
    this.inputRef && this.inputRef.blur()
  }

  render() {
    const {
      placeholder,
      keyboardType,
      autoCapitalize,
      password,
      wrapperStyle,
      inputStyle,
      value,
      onChange,
      multiline,
      invalid,
      invalidMessage,
      blurOnSubmit,
      returnKeyType,
      disabled
    } = this.props
    const { touched } = this.state

    const showError = invalid && touched

    return (
      <View style={[styles.wrapper, wrapperStyle]}>
        <TextInput
          placeholder={placeholder}
          keyboardType={keyboardType}
          value={value}
          onChangeText={onChange}
          secureTextEntry={password}
          style={[
            styles.textInput,
            multiline ? styles.textInputMultiLine : null,
            inputStyle,
            showError ? styles.textInputInvalid : null
          ]}
          placeholderTextColor={csstyles.vars.csGreen}
          onBlur={this.onBlur}
          autoCapitalize={autoCapitalize}
          underlineColorAndroid="transparent"
          multiline={multiline}
          keyboardAppearance="dark"
          ref={(ref) => {
            this.inputRef = ref
          }}
          blurOnSubmit={blurOnSubmit}
          returnKeyType={returnKeyType}
          editable={!disabled}
        />
        {showError && (
          <View style={styles.errorWrapper}>
            <Text style={styles.errorText}>{invalidMessage}</Text>
          </View>
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: csstyles.vars.csBoxSpacing
  },
  textInput: {
    borderWidth: csstyles.vars.csBoxBorderWidth,
    borderColor: csstyles.vars.csGreen,
    height: csstyles.vars.csInputHeight,
    borderRadius: csstyles.vars.csInputBorderRaius,
    paddingHorizontal: csstyles.vars.csInputHorizontalPadding,
    overflow: 'hidden',
    backgroundColor: csstyles.vars.csBlack,
    color: csstyles.vars.csWhite,
    ...csstyles.text.regular,
    fontSize: 16
  },
  textInputMultiLine: {
    borderRadius: csstyles.vars.csBoxBorderRadius,
    height: 'auto',
    minHeight: csstyles.vars.csInputHeight * 3,
    paddingTop: csstyles.vars.csInputHeight - 16 * 2,
    paddingBottom: csstyles.vars.csInputHeight - 16 * 2,
    textAlignVertical: 'top'
  },
  textInputInvalid: {
    borderColor: csstyles.vars.csDanger
  },
  errorWrapper: {
    marginTop: 3,
    paddingHorizontal: csstyles.vars.csInputHorizontalPadding
  },
  errorText: {
    ...csstyles.text.medium,
    ...csstyles.text.textLight,
    fontStyle: 'italic',
    fontSize: 13
  }
})

export default TextField
