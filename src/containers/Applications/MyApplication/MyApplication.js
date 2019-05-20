// @flow

import React, { PureComponent } from 'react'
import { View,
  StyleSheet,
  ScrollView,
  Dimensions,
  Text } from 'react-native'
import csstyles from '../../../csstyles'
import { connect } from 'react-redux'
import ApplicationList from '../SearchApplication/ApplicationList'
import ApplicationSummary from './ApplicationSummary'
import FilterView from '../FilterView'
import Services from '../SearchApplication/Services.json'
import FilterTime from '../SearchApplication/FilterTime.json'
import applicationActions from '../../../actions/application.actions'
import FloatButton from '../../../components/Button/FloatButton/FloatButton'
import { ReduxState } from '../../../reducers/types.reducer'
import { Summary } from '../../../types'

type Props = {
  summary: Summary,
  isLoading: Boolean
}

type State = {
  service: Productservice
}

class MyApplication extends PureComponent<Props, State> {
  state = {
    service: Services[0],
    time: FilterTime[0]
  }

  componentDidMount() {
    // applicationActions.filterApplication()
    applicationActions.filterApplicationSummary()
  }

  onChange = (value: String, index: Number, type: String) => {
    console.log('onChange with type', type)
    switch (type) {
      case 'time':
        this.setState({ time: FilterTime[index] })
        break
      case 'service':
        this.setState({ service: Services[index] })
        break
      default:
        console.log('Please check type of picker');

    }
  }

  onPress = () => {
    const { navigation } = this.props
    navigation.push('ApplicationDetail')
  }

  render() {
    const { service, time } = this.state
    const { summary, isLoading } = this.props
    const total = summary && summary.info.total ? summary.info.total : 0
    const headerTitle = "Tổng số hồ sơ (" +  total + ")"
    return (
      <View style={styles.screen}>
        <FilterView service={service} time={time} onChange={this.onChange}/>
        {/* <ApplicationList applications={applications} isLoading={isLoading} type={'searchApplication'}/> */}
        <Text style={styles.headerText}>{headerTitle}</Text>
        <ApplicationSummary summary={summary} isLoading={isLoading}/>
        <FloatButton type="main" icon="plus" disabled={false} onPress={this.onPress}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  screen: {
    ...csstyles.base.full,
    backgroundColor: csstyles.vars.csContainer
  },
  headerText: {
    ...csstyles.text.textMain,
    ...csstyles.text.regular,
    marginLeft: 20,
    paddingTop: csstyles.vars.csBoxMargin,
    fontSize: 16
  }
})

const  mapStateToProps  = (state: ReduxState) => {
  const { summary, isLoading } = state.application
  return {
    summary,
    isLoading
  }
}
export default  connect(mapStateToProps)(MyApplication)
