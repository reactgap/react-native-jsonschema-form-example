// @flow

import React, { PureComponent } from 'react'
import { View,
  StyleSheet,
  ScrollView,
  Dimensions,
  Text } from 'react-native'
import ListGroupItem from '../../ListGroup/Item/ListGroupItem'
import csstyles from '../../../csstyles'
import Markdown from 'react-native-markdown-renderer'
import ReportTime from './ReportTime.json'
import { PickerOption } from 'react-native-jsonschema-form'
import { IS_DEVICE_VERY_LONG_WIDTH } from '../../../utils/deviceHelper'
import { ProductReportTime } from '../../../types'

type Props = {

}

type State = {
  reportTime: ProductReportTime
}

class ProductReport extends PureComponent<Props, State> {

  state = {
    reportTime: ReportTime[0]
  }

  pickerOnchange = (value) => {

  }
  

  render() {
    const { reportTime } = this.state
    return (
      <View style={styles.screen}>
        <View style={styles.timeOptions}>
          <PickerOption
            label="Time Option"
            value={reportTime.name}
            data={ReportTime}
            onChange={this.pickerOnchange}
            pickerCenter={IS_DEVICE_VERY_LONG_WIDTH}
          />
        </View>
        <View>
        <ScrollView
          style={csstyles.base.full}
        >
          
        </ScrollView>

        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  screen: {
    ...csstyles.base.full,
    backgroundColor: csstyles.vars.csGreyDark
  },
  timeOptions: {
    margin: csstyles.vars.csBoxMargin
  },
  markdown: {
    ...csstyles.base.markdown
  }
})

export default ProductReport
