// @flow

import React, { PureComponent } from 'react'
import { BackHandler } from 'react-native'
import { connect } from 'react-redux'
import { reduxifyNavigator } from 'react-navigation-redux-helpers'
import { NavigationActions, createSwitchNavigator } from 'react-navigation'
import Start from '../Start/Start'
import Main from '../Main/Main'
import Dashboard from '../Dashboard/Dashboard'

export const rootNavigator = createSwitchNavigator({
  Start: {
    screen: Start
  },
  Main: {
    screen: Main
  }
})

class Root extends PureComponent<any> {
  ReduxAppNavigator = reduxifyNavigator(rootNavigator, 'root')

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress)
  }

  onBackPress = () => {
    const { dispatch, state } = this.props
    if (state.index === 0) {
      return false
    }

    dispatch(NavigationActions.back())

    return true
  }

  render() {
    const { dispatch, state } = this.props
    console.log('state Root',state)
    return <this.ReduxAppNavigator dispatch={dispatch} state={state} />
  }
}

const mapStateToProps = state => ({
  state: state.nav
})

export default connect(mapStateToProps)(Root)
