// @flow

import React, { Component } from 'react'
import { StatusBar, View, Image, Platform, Linking } from 'react-native'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { I18nextProvider } from 'react-i18next'
import configureStore from '../reduxStore'
import i18next, { i18nInit, currLanguage } from '../utils/i18n'
import csstyles from '../csstyles'
import Root from '../components/Root/Root'
import CrashConfirm from '../components/CrashConfirm/CrashConfirm'

class App extends Component<{}> {

  initialUrl: string | null = null

  componentDidMount() {
    StatusBar.setBarStyle('light-content', false)
  }

  onBeforeLift = async () => {
    try {
      await i18nInit()
    } catch (error) {
      debugger
      console.log(error)
    }
    return true
  }

  renderLoadingScreen = () => (Platform.OS === 'ios' ? null : (
    <View
      style={{
        ...csstyles.base.fullCenter,
        backgroundColor: csstyles.vars.csGrey
      }}
    >
      <Image
        source={{
          uri: 'logo'
        }}
        style={{
          width: 80,
          height: 80
        }}
      />
    </View>
  ))

  renderContent = (bootstraped) => {
    console.log('bootstraped',bootstraped)
    if (!bootstraped) return this.renderLoadingScreen()
    return (
      <I18nextProvider i18n={i18next}>
        <Root />
        <CrashConfirm />
      </I18nextProvider>
    )
  }

  render() {
    return (
      <Provider store={configureStore.store}>
        <PersistGate onBeforeLift={this.onBeforeLift} persistor={configureStore.persistor}>
          {this.renderContent}
        </PersistGate>
      </Provider>
    )
  }
}

export default App;
