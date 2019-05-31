// @flow

import React, { PureComponent } from 'react'
import { View,
  StyleSheet,
  RefreshControl,
  FlatList,
  ActivityIndicator,
  Modal,
  Text,
  type ListRenderItem } from 'react-native'
import { connect } from 'react-redux'
import { type NavigationTabScreenOptions } from 'react-navigation'
import { i18nTranslator } from '../../../utils/i18n'
import csstyles from '../../../csstyles'
import { type ScreenNavigationProps, type Application, type I18NComponent } from '../../../types'
import { ReduxState } from '../../../reducers/types.reducer'
import { IS_DEVICE_VERY_LONG_WIDTH } from '../../../utils/deviceHelper'
import ApplicationListItem from './ApplicationListItem'
import Hud, { type HudConfig } from '../../../components/Hud/Hud'
import applicationActions from '../../../actions/application.actions'
import CSBackButton from '../../../components/Button/CSBackButton/CSBackButton'
import NavTitle from '../../../components/NavTitle/NavTitle'

type Props = ScreenNavigationProps<{}> & I18NComponent &  {
  isLoading: Boolean,
  applications: Application[]
}

type State = {
  registerConfirm: boolean,
}

class ApplicationList extends PureComponent<Props,State> {

  static navigationOptions = (props): NavigationStackScreenOptions => {
    console.log('navigationOptions',props)
    const state = props.navigation.state
    const { data } = state
    return {
      headerLeft: <CSBackButton wrapperStyle={styles.backBtn} lighterBg={false}/>,
      headerTitle: <NavTitle titleCode={''} />,
      headerTintColor: csstyles.vars.csGreen,
      headerTruncatedBackTitle: true,
      headerRight: null,
      headerStyle: csstyles.nav.header
    }
  }

  state: State = {
    registerConfirm: false
  }

  componentDidMount() {
    applicationActions.applicationListByType()
  }

  onSelect = (application: Application) => {
    this.setState({
      registerConfirm: true
    })
  }

  renderItem: ListRenderItem<Application> = ({ item, index }) => {
    const state = this.props.navigation.state
    console.log('this.props.navigation',this.props.navigation)
    const data = state.params.data || null
    const type = data.type || -1
    return (
      <ApplicationListItem data={item} index={index} onPress={this.onSelect} type={type}/>
    )
  }

  onRefresh = () => {

  }

  onRequestClose = () => {
    // For BackHandler
  }

  renderEmpty = () => {
    return (
      <View>
        <Text>Empty View</Text>
      </View>
    )
  }

  getHudConfig = (): HudConfig => {
    const { logout } = this.props
    const { registerConfirm } = this.state

    if (registerConfirm) {
      return {
        isOpen: true,
        type: 'actions',
        actionsTitle: i18nTranslator('ALERT_CONFIRM'),
        actionsDesc: 'Do you want to buy this application?',
        actionsBtns: [
          {
            key: 'ok',
            title: i18nTranslator('ALERT_OK'),
            type: 'primary',
            onPress: () => logout()
          },
          {
            key: 'cancel',
            title: i18nTranslator('ALERT_CANCEL'),
            type: 'secondary',
            onPress: () => this.setState({
              registerConfirm: false
            })
          }
        ]
      }
    }
    return {
      isOpen: false
    }
  }
  

  render() {
    const { applications, isLoading, damage } = this.props
    const hudConfig = this.getHudConfig()
    if (applications == null) {
      return (
        <View style={[styles.screen, csstyles.base.fullCenter]}>
          <ActivityIndicator color={csstyles.vars.csGreen} size="small" />
        </View>
      )
    }
    console.log('render applications', applications)
    // const refreshControl = damages && (
    //   <RefreshControl
    //     size={20}
    //     tintColor={csstyles.vars.csGreen}
    //     refreshing={isRefreshing}
    //     onRefresh={this.onRefresh}
    //   />
    // )

    return (
      <View style={csstyles.base.full}>
        <Hud {...hudConfig} />
        <FlatList
          style={csstyles.base.full}
          contentContainerStyle={styles.listContainer}
          // refreshControl={refreshControl}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={this.renderEmpty}
          data={applications}
          keyExtractor={item => `${item.applicationId}`}
          numColumns={1}
          renderItem={this.renderItem}
          windowSize={20}
      />

      </View>
    )
  }
}

const styles = StyleSheet.create({
  screen: {
    ...csstyles.base.full,
    
  },
  listContainer: {
    paddingBottom: csstyles.vars.csBoxSpacing2x,
    paddingHorizontal: csstyles.vars.csBoxMargin
  },
  footer: {
    ...csstyles.base.rowCenter,
    backgroundColor: csstyles.vars.csBlack,
    height: 44
  }
})

const mapStateToProps = (state: ReduxState) => {
  const { isLoading, applications } = state.application
  return {
    applications,
    isLoading
  }
}

export default connect(
  mapStateToProps
)(ApplicationList)