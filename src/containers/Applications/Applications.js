// @flow

import React, { Component } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { type NavigationTabScreenOptions } from 'react-navigation'
import ScrollableTabView, { ScrollableTabBar, ChangeTabProperties} from 'react-native-scrollable-tab-view';
import { connect } from 'react-redux'
import TabBarIcon from '../../components/TabBar/TabBarIcon'
import csstyles from '../../csstyles'
import { HomeInfo, HomeInfoView } from '../../types'
import { ReduxState } from '../../reducers/types.reducer'
import homeActions from '../../actions/home.actions'
import SearchApplication from './SearchApplication/SearchApplication'
import MyApplication from './MyApplication/MyApplication'

type Props = {
  homeInfo: Home
}

class Applications extends Component<Props> {
  static navigationOptions = (): NavigationTabScreenOptions => ({
    tabBarLabel: 'APPLICATIONS',
    tabBarIcon: options => <TabBarIcon icon="copy" tintColor={options.tintColor} />
  })


  handleChangeTab = ({ i, ref, from } :ChangeTabProperties ) => {
    
  }

  renderContent = () => {
    {/* <ScrollableTabView
          style={{marginTop: 0, flex: 1, backgroundColor: csstyles.vars.csGreyDark}}
          initialPage={0}
          onChangeTab={this.handleChangeTab}
          tabBarInactiveTextColor={csstyles.vars.csWhite}
          tabBarActiveTextColor={csstyles.vars.csGreen}
          tabBarUnderlineStyle={{ backgroundColor: csstyles.vars.csGreen }}
          renderTabBar={() => <ScrollableTabBar style={csstyles.base.scrollableTabBar}/>}
        >
          <SearchApplication tabLabel='Search Applications' />
          
        </ScrollableTabView> */}
  }

  render() {
    const { home, isLoading, navigation } = this.props
    const { wallet, products } = home || {}
    return (
      <View
        style={{
          ...csstyles.base.full,
          backgroundColor: csstyles.vars.csBlack
        }}
      >
        <MyApplication navigation={navigation}/>
      </View>
    )
  }
}

const mapStateToProps = (state: ReduxState) => {
  const { homeInfo, isLoading } = state.home
  return {
    homeInfo,
    isLoading
  }
}

export default connect(
  mapStateToProps
)(Applications)
