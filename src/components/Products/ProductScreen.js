// @flow

import React, { Component } from 'react'
import { View, Text, ActivityIndicator, StyleSheet, Dimensions, Platform, ScrollView } from 'react-native'
import { type NavigationScreenProp, NavigationRoute } from 'react-navigation'
import { connect } from 'react-redux'
import TabBarIcon from '../TabBar/TabBarIcon'
import csstyles from '../../csstyles'
import { Product } from '../../types'
import { ReduxState } from '../../reducers/types.reducer'
import Photo from '../Photo/Photo'
import CSBackButton from '../Button/CSBackButton/CSBackButton'
import CSButton from '../Button/CSButton/CSButton'
import Scrollable, { HEADER_MIN_HEIGHT } from '../Scrollable/Scrollable'
// import ScrollableTabView, { ScrollableTabBar, ChangeTabProperties} from 'react-native-scrollable-tab-view';
import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';
import { DEVICE_BOTTOM_SAFE, DEVICE_TOP_SAFE} from '../../utils/deviceHelper'
import ProductPolicy from './ProductPolicy/ProductPolicy'
import ProductDocumentation from './ProductDocumentation/ProductDocumentation'
import ProductReport from  './ProductReport/ProductReport'
import Hud, { type HudConfig } from '../../components/Hud/Hud'
import { i18nTranslator } from '../../utils/i18n'
import NavTitle from '../NavTitle/NavTitle'
import isEmpty from '../../utils/validations/isEmpty'
type Props = {
  product: Product
}
type State = {
  registerConfirm: boolean,
}

class ProductScreen extends Component<Props, State> {
  static navigationOptions = (props): NavigationStackScreenOptions => {
    console.log('navigationOptions',props)
    const state = props.navigation.state
    const product = state.params.product || null
    const name = product.name || "Product Detail"
    return {
      headerLeft: <CSBackButton wrapperStyle={styles.backBtn} lighterBg={false}/>,
      headerTitle: <NavTitle titleCode={name} />,
      headerTintColor: csstyles.vars.csGreen,
      headerTruncatedBackTitle: true,
      headerRight: null,
      headerStyle: csstyles.nav.header
    }
  }

  state: State = {
    registerConfirm: false,
  }

  handleChangeTab = ({ i, ref, from } :ChangeTabProperties ) => {
    
  }

  renderScrollViewContent = (product: Product) => {
    const infoUrl = product.informationURL  || ''
    console.log('infoUrl',infoUrl)
    return (
      <ScrollableTabView
        style={[{marginTop: 0, flex: 1}]}
        initialPage={0}
        locked={true}
        onChangeTab={this.handleChangeTab}
        tabBarInactiveTextColor={csstyles.vars.csGrey}
        tabBarActiveTextColor={csstyles.vars.csGrey}
        tabBarUnderlineStyle={{ backgroundColor: csstyles.vars.csGreenDeep }}
        renderTabBar={() => <DefaultTabBar style={csstyles.base.scrollableTabBar} textStyle={styles.textStyle}/>}
      >
          <ProductPolicy tabLabel='Policy' url={infoUrl}/>
          <ProductDocumentation tabLabel='Documentation'/>
          <ProductReport tabLabel='Report'/>
        </ScrollableTabView>
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
        actionsDesc: 'I agree to the Terms of use',
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
    const hudConfig = this.getHudConfig()
    const {  product } = this.props
    console.log('product',product)
    const imageUrl = product.imageUrl  || ''
    const title = product.name || 'Product Detail'
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <Hud {...hudConfig} />
        <View style={csstyles.base.full}>
          {this.renderScrollViewContent(product)}
        </View>
        { (product.code == null || product.code === "") && 
        (<View style={csstyles.base.bottomView} >
          <CSButton
            type="primary"
            title={'Register'}
            onPress={() => {
              this.setState({
                registerConfirm: true
              })
            }}
            style={{
              marginTop: csstyles.vars.csBoxSpacing,
              marginHorizontal: csstyles.vars.csBoxMargin
            }}
          />
      </View>) }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  screen: {
    ...csstyles.base.full,
    backgroundColor: csstyles.vars.csGrey
  },
  backBtn: {
    left: csstyles.vars.csBoxSpacing
  },
  row: {
    height: 40,
    margin: 16,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    ...csstyles.text.regular,
    fontSize: csstyles.fontSize.normal
  }
})

const mapStateToProps = (state: ReduxState) => {
  console.log('mapStateToProps',state.home)
  const { product } = state.home
  return {
    product
  }
}

export default connect(
  mapStateToProps
)(ProductScreen)
