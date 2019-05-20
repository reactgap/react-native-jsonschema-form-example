// @flow

import React, { PureComponent } from 'react'
import { View,
  StyleSheet,
  RefreshControl,
  FlatList,
  ActivityIndicator,
  Text,
  type ListRenderItem } from 'react-native'
import { type NavigationTabScreenOptions } from 'react-navigation'
import { i18nTranslator } from '../../../utils/i18n'
import csstyles from '../../../csstyles'
import { type ScreenNavigationProps, type Summary, type SummaryItem, type I18NComponent, type ReduxState } from '../../../types'
import { IS_DEVICE_VERY_LONG_WIDTH } from '../../../utils/deviceHelper'
import ApplicationSummaryItem from './ApplicationSummaryItem'

type Props = ScreenNavigationProps<{}> & I18NComponent &  {
  isLoading: Boolean,
  summary: Summary
}

type State = {

}

class ApplicationSummary extends PureComponent<Props,State> {

  // state: State = {

  // }

  onSelect = (application: Application) => {
    this.setState({
      registerConfirm: true
    })
  }

  renderItem: ListRenderItem<SummaryItem> = ({ item, index }) => (
    <ApplicationSummaryItem data={item} index={index} onPress={this.onSelect}/>
  )

  onRefresh = () => {

  }

  onRequestClose = () => {
    // For BackHandler
  }

  render() {
    const { summary, isLoading } = this.props
    

    if (summary == null) {
      return (
        <View style={[styles.screen, csstyles.base.fullCenter]}>
          <ActivityIndicator color={csstyles.vars.csGreen} size="small" />
        </View>
      )
    }
    const response = summary.response || []
    console.log('response', response)

    const refreshControl = <RefreshControl 
                          size={20}
                          tintColor={csstyles.vars.csGreen}
                          refreshing={false}
                          onRefresh={this.onRefresh}
                        />

    return (
      <View style={csstyles.base.full}>
        <FlatList
          style={csstyles.base.full}
          contentContainerStyle={styles.listContainer}
          refreshControl={refreshControl}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={this.renderEmpty}
          data={response}
          keyExtractor={item => `${item.type}`}
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
    ...csstyles.base.full
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

export default ApplicationSummary
