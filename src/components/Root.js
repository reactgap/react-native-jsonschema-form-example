// @flow

import React, { PureComponent } from 'react'
import { BackHandler } from 'react-native'
import { connect } from 'react-redux'
import { reduxifyNavigator } from 'react-navigation-redux-helpers'
import { NavigationActions, createSwitchNavigator } from 'react-navigation'
import Main from './Main'

export const rootNavigator = createSwitchNavigator({
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

    return <this.ReduxAppNavigator dispatch={dispatch} state={state} />
  }
}

const mapStateToProps = state => ({
  state: state.nav
})

export default connect(mapStateToProps)(Root)
