// @flow
// @format

import React from 'react'
import csstyles from '../../../csstyles'
import { i18nTranslator } from '../../../utils/i18n'
import CSButton from '../../../components/Button/CSButton/CSButton'
import TextField from '../../../components/TextField/TextField'
import validate from '../../../utils/validations/validate'
import isEmpty from '../../../utils/validations/isEmpty'
import authActions from '../../../actions/auth.actions'
import BaseForm, { type BaseFormProps } from '../../../components/BaseForm/BaseForm'
import DialCodeInput from '../../../components/DialCodeInput/DialCodeInput'
import { IS_DEVICE_VERY_LONG_WIDTH } from '../../../utils/deviceHelper'
import ErrorWithCode from '../../../utils/errorWithCode'


type State = {
  code: string
}

const PhoneVerifyValidateConfig = {
  code: {
    require: true
  }
}

class PhoneVerify extends BaseForm<State, {}> {
  constructor(props: BaseFormProps, context: any) {
    super(props, context, {
      isSuccess: false,
      code: '',
      errors: validate({}, PhoneVerifyValidateConfig)
    })
  }

  title = () => i18nTranslator('USER_AUTH_PHONE_VERIFY_TITLE')

  description = () => {
    const { navigation } = this.props
    const { maskedPhone } = navigation.state.params

    return i18nTranslator('USER_AUTH_PHONE_VERIFY_DESC').replace(/\[PHONE_NUMBER\]/gi, maskedPhone)
  }

  validateConfig = PhoneVerifyValidateConfig

  submitRequest = () => {
    const { navigation: { state: { params } } } = this.props
    const { code } = this.state
    console.log('submitRequest')
  }

  onSubmitSuccess = () => {
    const { navigation } = this.props
    navigation.push('Profile')
  }

  getHudConfig = () => {
    const { isRequesting, requestError } = this.state

    let desc = null
    const title = i18nTranslator('ALERT_ERROR')

    switch (requestError) {
    case 'auth/invalid-verification-code':
      desc = i18nTranslator('USER_AUTH_PHONE_ERR_WRONG_CODE')
      break
    default:
      desc = i18nTranslator('USER_AUTH_PHONE_ERR_UNKNOWN')
      break
    }

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
    const { code, isRequesting, errors } = this.state
    console.log('error from renderfields', errors)
    const phoneVerifyErrorMessages = {
      code: {
        require: i18nTranslator('USER_AUTH_PHONE_VERIFY_CODE_REQUIRED')
      }
    }

    return (
      <>
        <TextField
          keyboardType="number-pad"
          placeholder={i18nTranslator('USER_AUTH_PHONE_VERIFY_CODE')}
          value={code}
          onChange={text => this.onChangeField('code', text)}
          invalid={errors.code != null}
          invalidMessage={errors.code && phoneVerifyErrorMessages.code[errors.code]}
          autoCapitalize="none"
        />
        <CSButton
          title={i18nTranslator('USER_AUTH_PHONE_VERIFY_SUBMIT')}
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

export default PhoneVerify
