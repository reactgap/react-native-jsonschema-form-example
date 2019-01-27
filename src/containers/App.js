// @flow

import React, { Component } from 'react'
import { StatusBar, View, Image, Platform, Linking } from 'react-native'
import { Provider } from 'react-redux'
import Root from '../components/Root'
import configureStore from '../reduxStore'

class App extends Component<{}> {

  componentDidMount() {
    StatusBar.setBarStyle('light-content', false)
  }

  render() {
    return (
      <Provider store={configureStore.store}>
          <Root />
      </Provider>
    )
  }
}

export default App;
