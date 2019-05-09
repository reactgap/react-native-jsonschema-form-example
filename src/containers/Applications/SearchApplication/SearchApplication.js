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
import ApplicationList from './ApplicationList'
import FilterView from '../FilterView'
import applicationActions from '../../../actions/application.actions'
import Services from '../SearchApplication/Services.json'
import FilterTime from '../SearchApplication/FilterTime.json'

type Props = {
  isLoading: Boolean,
  applications: Application[]
}

type State = {
  service: Productservice,
  
}

class SearchApplication extends PureComponent<Props, State> {
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

  render() {
    const { service, time } = this.state
    const { applications, isLoading } = this.props
    return (
      <View style={styles.screen}>
        <FilterView service={service} time={time} onChange={this.onChange}/>
        <ApplicationList applications={applications} isLoading={isLoading} type={'searchApplication'}/>
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
  console.log('state.application', state.application)
  return {
    applications,
    isLoading
  }
}

export default  connect(mapStateToProps)(SearchApplication)
