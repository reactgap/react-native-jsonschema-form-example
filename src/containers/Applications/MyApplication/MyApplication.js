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
import FilterView from '../FilterView'
import Services from '../SearchApplication/Services.json'
import FilterTime from '../SearchApplication/FilterTime.json'
import applicationActions from '../../../actions/application.actions'
import FloatButton from '../../../components/Button/FloatButton/FloatButton'

type Props = {

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
    applicationActions.filterApplication()
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
    const { applications, isLoading } = this.props
    return (
      <View style={styles.screen}>
        <FilterView service={service} time={time} onChange={this.onChange}/>
        <ApplicationList applications={applications} isLoading={isLoading} type={'searchApplication'}/>
        <FloatButton type="danger" icon="plus" disabled={false} onPress={this.onPress}/>
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

const  mapStateToProps  = (state: ReduxState) => {
  const { applications, isLoading } = state.application
  return {
    applications,
    isLoading
  }
}
export default  connect(mapStateToProps)(MyApplication)
