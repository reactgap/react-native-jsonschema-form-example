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
import { IS_DEVICE_VERY_LONG_WIDTH, DEVICE_SCREEN_WIDTH } from '../../../utils/deviceHelper'
import { ProductReportTime } from '../../../types'
import PieChartScreen from './PieChartScreen'
import numberFormat from '../../../utils/numberFormat'

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
        {/* <View style={csstyles.border.shadowView}/> */}
        <View style={styles.timeOptions}>
          <PickerOption
            label="Time Option"
            icon={'sort-down'}
            value={reportTime.name}
            data={ReportTime}
            onChange={this.pickerOnchange}
            pickerCenter={IS_DEVICE_VERY_LONG_WIDTH}
            wrapStyles={styles.pikerWrap}
            mainColor={'#C1C1C1'}
            fontSize={csstyles.fontSize.normal}
          />
        </View>
        <ScrollView style={csstyles.base.full}>
          <PieChartScreen />
          <View style={styles.reportInfo}>
            <View style={styles.row}>
              <Text style={[styles.text , {flex: 2/3, marginLeft: csstyles.vars.csBoxMargin}]}>Hoa hồng tạm tính</Text>
              <Text style={[styles.text, {flex: 1/3, textAlign: 'right', marginRight: csstyles.vars.csBoxMargin}]}>{numberFormat.toLocaleString(1000000)}</Text>
            </View>
            <View style={styles.row}>
            <Text style={[styles.text , {flex: 2/3, marginLeft: csstyles.vars.csBoxMargin}]}>Tổng số hợp đồng thành công</Text>
            <View style={{flex: 1/3, justifyContent: 'center', alignItems: 'flex-end', marginRight: csstyles.vars.csBoxMargin}}>
              <Text style={[styles.text, styles.totalText]}>3</Text>
            </View>
            </View>

          </View>
        </ScrollView>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  screen: {
    ...csstyles.base.full,
    backgroundColor: '#F4F4F4'
  },
  pikerWrap: {
    borderWidth: 1,
    borderColor: '#C1C1C1',
    height: 40,
    borderRadius: csstyles.vars.csInputBorderRaius,
    overflow: 'hidden',
    backgroundColor: csstyles.vars.csWhite,
    position: 'relative',
    justifyContent: 'center',
    marginHorizontal: csstyles.vars.csBoxMargin * 2
  },
  timeOptions: {
    // margin: csstyles.vars.csBoxMargin,
    marginTop: 1,
    justifyContent: 'center',
    height: 60,
    backgroundColor: csstyles.vars.csWhite,
    ...csstyles.base.shadow
  },
  markdown: {
    ...csstyles.base.markdown
  },
  reportInfo: {
    ...csstyles.base.column,
    marginVertical: csstyles.vars.csBoxMargin * 2,
    flex: 1,
    backgroundColor: csstyles.vars.csWhite,
    ...csstyles.base.shadow
  },
  row: {
    flex: 1,
    ...csstyles.base.row
  },
  text: {
    ...csstyles.text.medium, 
    ...csstyles.text.textMain, 
    marginVertical: csstyles.vars.csBoxSpacing,
  },
  totalText: {
    overflow: 'hidden',
    backgroundColor: csstyles.statusColor.sucess, 
    textAlign: 'right', 
    paddingHorizontal: csstyles.vars.csBoxMargin,
    paddingVertical: 2,
    borderRadius: 5,
    color: csstyles.vars.csWhite
  }
})

export default ProductReport
