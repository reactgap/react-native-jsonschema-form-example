// @flow
// @format

import React from 'react'
import csstyles from '../../../csstyles'
import { i18nTranslator, currLanguage } from '../../../utils/i18n'
import CSButton from '../../../components/Button/CSButton/CSButton'
import TextField from '../../../components/TextField/TextField'
import validate from '../../../utils/validations/validate'
import isEmpty from '../../../utils/validations/isEmpty'
// import authActions from '../../../actions/auth.actions'
import BaseForm, { type BaseFormProps } from '../../../components/BaseForm/BaseForm'
import DialCodeInput from '../../../components/DialCodeInput/DialCodeInput'
import { IS_DEVICE_VERY_LONG_WIDTH } from '../../../utils/deviceHelper'

type State = {
  phoneNumber: string,
  dialCode: string,
  countryName: string
}

const PhoneRegisterValidateConfig = {
  phoneNumber: {
    require: true
  },
  dialCode: {
    require: true
  },
  countryName: {
    require: true
  }
}

class PhoneRegister extends BaseForm<State, {}> {
  constructor(props: BaseFormProps, context: any) {
    super(props, context, {
      isSuccess: false,
      phoneNumber: '',
      dialCode: '+84',
      countryName: 'Viet Nam',
      errors: validate({}, PhoneRegisterValidateConfig)
    })
  }

  phoneVerificationId: string | null = null

  title = () => i18nTranslator('USER_AUTH_PHONE_TITLE')

  description = () => i18nTranslator('USER_AUTH_PHONE_DESC')

  validateConfig = PhoneRegisterValidateConfig

  submitRequest = () => {
    const { dialCode, phoneNumber } = this.state

    this.phoneVerificationId = null
    this.phoneVerificationId = "123456789"
    // this.phoneVerificationId = await authActions.sendPhoneVerificationCode(dialCode, phoneNumber)
  }

  onSubmitSuccess = () => {
    const { navigation } = this.props
    const { dialCode, phoneNumber } = this.state

    phoneNumber.substr(phoneNumber.length - 4)
    console.log('onSubmitSuccess')
    navigation.push('PhoneVerify', {
      maskedPhone: `+${'*'.repeat(
        dialCode.length - 1 + phoneNumber.length - 3
      )}${phoneNumber.substr(phoneNumber.length - 3)}`,
      verificationId: this.phoneVerificationId
    })
  }

  getHudConfig = () => {
    const { isRequesting, requestError } = this.state

    const desc = i18nTranslator('USER_AUTH_PHONE_ERR_NOT_SENT')
    const title = i18nTranslator('ALERT_ERROR')

    return {
      title,
      desc,
      type: isRequesting ? 'loading' : 'alert',
      alertType: 'error',
      isOpen: requestError != null || isRequesting,
      btnOnPress: this.tryAgain
    }
  }

  renderFields = () => {

    const { phoneNumber, isRequesting, errors, dialCode, countryName } = this.state
    console.log('phoneNumber + countryName',dialCode,countryName)
    console.log('errors',errors)
    console.log('navigation', this.props.navigation)
    const phoneRegisterErrorMessages = {
      phoneNumber: {
        require: i18nTranslator('USER_AUTH_PHONE_NUMBER_REQUIRED')
      }
    }

    return (
      <>
        <DialCodeInput
          countryName={countryName}
          dialCode={dialCode}
          selectText={i18nTranslator('USER_AUTH_PHONE_DIAL_CODE_SELECT')}
          onChange={(name, code) => this.onChangeFields({
            countryName: name,
            dialCode: code
          })
          }
          pickerCenter={IS_DEVICE_VERY_LONG_WIDTH}
        />
        <TextField
          keyboardType="number-pad"
          placeholder={i18nTranslator('USER_AUTH_PHONE_NUMBER')}
          value={phoneNumber}
          onChange={text => this.onChangeField('phoneNumber', text)}
          invalid={errors.phoneNumber != null}
          invalidMessage={
            errors.phoneNumber && phoneRegisterErrorMessages.phoneNumber[errors.phoneNumber]
          }
          autoCapitalize="none"
        />
        <CSButton
          title={i18nTranslator('USER_AUTH_PHONE_SUBMIT')}
          type="primary"
          disabled={isRequesting || !isEmpty(errors)}
          style={{
            marginBottom: csstyles.vars.csBoxSpacing
          }}
          onPress={this.submit}
        />
      </>
    )
  }
}

export default PhoneRegister
