// @flow

import React, { PureComponent } from 'react'
import { View,
  StyleSheet,
  ScrollView,
  Dimensions,
  Text } from 'react-native'
import { connect } from 'react-redux'
import csstyles from '../../../csstyles'
import { Productservice, Application } from '../../../types'
import ApplicationBasic from './ApplicationBasic'
import CSBackButton from '../../../components/Button/CSBackButton/CSBackButton'
import CSButton from '../../../components/Button/CSButton/CSButton'
import NavTitle from '../../../components/NavTitle/NavTitle'
import StepIndicator from 'react-native-step-indicator'
import StepIndicatorData from '../../../../assets/locales/StepIndicator.json'
import ViewPager from '../../../components/ViewPager/ViewPager'
import { DEVICE_SCREEN_WIDTH } from '../../../utils/deviceHelper'
import FontAwesome from 'react-native-vector-icons/FontAwesome5'

type Props = {
  isLoading: Boolean,
  applications: Application[]
}

type State = {
}

const PageView = () => (
  <ApplicationBasic />
)

const PageView1 = () => (
  <View style={ { height: 30 } }/>
)

class ApplicationDetail extends PureComponent<Props, State> {
  static navigationOptions = (props): NavigationStackScreenOptions => {
    // const state = props.navigation.state
    // const product = state.params.product || null
    // const name = product.name || "Product Detail"
    return {
      headerLeft: <CSBackButton wrapperStyle={styles.backBtn}/>,
      headerTitle: <NavTitle titleCode={'New Application'} />,
      headerTintColor: csstyles.vars.csGreen,
      headerTruncatedBackTitle: true,
      headerRight: null,
      headerStyle: csstyles.nav.header
    }
  }

  constructor (props) {
    super(props)
    this.state = {
      currentPosition: 1
    }
 }

  componentDidMount() {

  }

  renderPages = () => {
    var pages = []
    for (i = 0; i <= this.state.currentPosition; i++) { 
      switch(i) {
        case 0: {
          pages.push({
            key: 0,
            component: PageView,
            props: {},
            containerStyle: {}
          })
          break
        }
        case 1: {
          pages.push({
            key: 1,
            component: PageView1,
            props: {},
            containerStyle: {}
          })
          break
        }
        case 2: {
          break
        }
      }
    }
    return pages
  }

  render() {
    const language = 'en' 
    // const { applications, isLoading } = this.props
    const pages = this.renderPages()
    const labels = StepIndicatorData[language]
    return (
      <View style={styles.screen}>
         <View style={{ marginTop: csstyles.vars.csBoxMargin}}>
            <StepIndicator
            customStyles={csstyles.indicatorCustomStyles}
            currentPosition={this.state.ApplicationBasic}
            labels={labels}
            stepCount={labels.length}
            />
         </View>
         <ViewPager
          wrapperStyle={csstyles.base.full}
          pages={pages}
          width={DEVICE_SCREEN_WIDTH}
          onPageChange={currentIndex => console.log(currentIndex)
          }
        />
        <View style={{ marginBottom: 50, height: 50 }}>
          <CSButton
            type="primary"
            title={'Next'}
            onPress={this.crashAction}
            style={{
              marginTop: csstyles.vars.csBoxSpacing2x,
              marginHorizontal: csstyles.vars.csBoxSpacing2x
            }}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  screen: {
    ...csstyles.base.full,
    backgroundColor: csstyles.vars.csGreyDark
  }
})

export default  ApplicationDetail
