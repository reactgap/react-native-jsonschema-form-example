// @flow
// @format

import React, { Component } from 'react'
import { Text, View, ScrollView, Image, Keyboard, Platform } from 'react-native'
import csstyles from '../../csstyles'
import { type ScreenNavigationProps } from '../../types'
import CSBackButton from '../Button/CSBackButton/CSBackButton'
import { i18nTranslator } from '../../utils/i18n'
import baseFormStyles from './baseFormStyles'
import validate from '../../utils/validations/validate'
import { DEVICE_BOTTOM_SAFE } from '../../utils/deviceHelper'
import Hud from '../Hud/Hud'
import UniversalScreenContainer from '../UniversalScreenContainer/UniversalScreenContainer'

export type BaseFormState = {
  keyboardOpen: boolean,
  isRequesting: boolean,
  requestError?: string,
  errors: { [field: string]: string }
}

export type BaseFormProps = ScreenNavigationProps<{}>

class BaseForm<State = {}, Props = {}> extends Component<
  BaseFormProps & Props,
  BaseFormState & State
> {
  title: () => string = null

  description: () => string = null

  scrollView: ScrollView = null

  validateConfig: any = null

  keyboardDidShowListener: any = null

  keyboardDidHideListener: any = null

  stateOnSubmitSuccess: any = null

  submitRequest: () => void = null

  renderFields: () => React.ReactNode = null

  onSubmitSuccess: () => void = null

  getHudConfig: () => {
    title: string,
    desc: string,
    type: 'loading' | 'alert',
    isOpen: boolean,
    alertType: 'success' | 'error',
    btnOnPress: () => {}
  } = null

  constructor(props: BaseFormProps, context: any, initState: State) {
    super(props, context)

    this.state = {
      ...initState,
      isRequesting: false,
      keyboardOpen: false
    }
  }

  componentDidMount() {
    if (Platform.OS === 'ios') {
      this.keyboardDidShowListener = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow)
      this.keyboardDidHideListener = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide)
    } else {
      this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardWillShow)
      this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardWillHide)
    }
  }

  componentWillUnmount() {
    this.keyboardDidShowListener && this.keyboardDidShowListener.remove()
    this.keyboardDidShowListener && this.keyboardDidHideListener.remove()
  }

  keyboardWillShow = (event: any) => {
    if (Platform.OS === 'ios') {
      const { endCoordinates } = event

      const keyboardHeight = endCoordinates.height

      this.scrollView.setNativeProps({
        contentInset: {
          top: 0,
          left: 0,
          bottom: keyboardHeight - DEVICE_BOTTOM_SAFE,
          right: 0
        },
        contentOffset: {
          x: 0,
          y: 0
        }
      })
    }

    this.setState({
      keyboardOpen: true
    })
  }

  keyboardWillHide = () => {
    if (Platform.OS === 'ios') {
      this.scrollView.setNativeProps({
        contentInset: {
          top: 0,
          left: 0,
          bottom: 0,
          right: 0
        },
        contentOffset: {
          x: 0,
          y: 0
        }
      })
    }

    this.setState({
      keyboardOpen: false
    })
  }

  onChangeField = (name: string, value: string) => {
    this.setState(
      {
        [name]: value
      },
      () => {
        this.setState(state => ({
          errors: validate(state, this.validateConfig || {})
        }))
      }
    )
  }

  onChangeFields = (data: { [id: string]: any }) => {
    this.setState(data, () => {
      this.setState(state => ({
        errors: validate(state, this.validateConfig || {})
      }))
    })
  }

  submit = async () => {
    this.setState({
      isRequesting: true
    })
    try {
     this.submitRequest()
      console.log('submit')
      setTimeout(() => {
        this.setState(
          {
            isRequesting: false,
            ...this.stateOnSubmitSuccess
          },
          this.onSubmitSuccess
        )
      }, 1000);
      
    } catch (error) {
      console.log('submit error', error.code)

      this.setState({
        isRequesting: false,
        requestError: error.code
      })
    }
  }

  tryAgain = () => {
    this.setState({
      requestError: null
    })
  }
  
  renderTop = () => {
    const { keyboardOpen } = this.state

    if (keyboardOpen) return null

    return (
      <View style={baseFormStyles.top}>
        <CSBackButton wrapperStyle={baseFormStyles.backBtn} />
        <Image
          source={{
            uri: 'logo'
          }}
          resizeMode={'contain'}
          style={baseFormStyles.logo}
        />
      </View>
    )
  }

  renderForm = () => (
    <View style={baseFormStyles.form}>
      <UniversalScreenContainer>
        <Text style={baseFormStyles.formTitle}>{this.title ? this.title() : ''}</Text>
        <Text style={baseFormStyles.formDesc}>{this.description ? this.description() : ''}</Text>
        {this.renderFields && this.renderFields()}
      </UniversalScreenContainer>
    </View>
  )

  render() {
    const { keyboardOpen } = this.state

    const hudConfig = this.getHudConfig ? this.getHudConfig() : null
    return (
      <View style={csstyles.base.full}>
        {hudConfig && (
          <Hud
            isOpen={hudConfig.isOpen}
            type={hudConfig.type}
            alertType={hudConfig.alertType}
            alertBtnTitle={'ALERT_OK'}
            alertTitle={hudConfig.title}
            alertDesc={hudConfig.desc}
            alertBtnOnPress={hudConfig.btnOnPress}
          />
        )}
        <ScrollView
          style={baseFormStyles.screen}
          scrollEnabled={keyboardOpen}
          keyboardDismissMode="interactive"
          keyboardShouldPersistTaps="handled"
          automaticallyAdjustContentInsets={false}
          contentInsetAdjustmentBehavior="never"
          showsVerticalScrollIndicator={false}
          ref={(ref) => {
            this.scrollView = ref
          }}
        >
          <View
            style={keyboardOpen ? baseFormStyles.containerOnKeyboardOpen : baseFormStyles.container}
          >
            {this.renderTop()}
            {this.renderForm()}
          </View>
        </ScrollView>
      </View>
    )
  }
}

export default BaseForm
