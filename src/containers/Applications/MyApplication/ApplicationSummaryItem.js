// @flow

import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native'

import { SummaryItem } from '../../../types'
import csstyles from '../../../csstyles'
import CSButton from '../../../components/Button/CSButton/CSButton'
import ICSvg from '../../../components/icons/ICSvg'
import { DEVICE_SCREEN_WIDTH } from '../../../utils/deviceHelper'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

type Props = {
  data: SummaryItem,
  index: number,
  onPress: (summaryItem: SummaryItem) => void,
}

type StatusInfo = {
  color: String,
  text: String
}

const heightCell = 44

class ApplicationSummaryItem extends Component<Props> {
  shouldComponentUpdate(nextProps: Props) {
    const { data } = this.props
    return nextProps.data !== data
  }

  onPress = () => {
    const { onPress, data } = this.props
    onPress(data)
  }

  colorWithType = (type: Number) => {
    var statusInfo: StatusInfo = {color:"#007F77", text: ""}
    switch(type) {
      case 1: {
        statusInfo.color = "#007F77"
        statusInfo.text = "Chờ xử lý"
        break
      }
      case 2: {
        statusInfo.color = "#00C9BD"
        statusInfo.text = "Đang xử lý"
        break
      }
      case 3: {
        statusInfo.color = "#ED5350"
        statusInfo.text = "Hủy"
        break
      }
      case 4: {
        statusInfo.color = "#FFCD61"
        statusInfo.text = "Lỗi"
        break
      }
      case 5: {
        statusInfo.color = "#4A9E42"
        statusInfo.text = "Thành công"
        break
      }
      default: {
        statusInfo.color = "#007F77"
        statusInfo.text = ""
        break
      }
    }
    return statusInfo
  }

  render() {
    const { data, index } = this.props
    console.log('data',data)
    const statusInfo = this.colorWithType(data.type)
    return (
      <TouchableOpacity
      onPress={this.onPress}
      activeOpacity={0.6}
    >
      <View style={styles.container}>
        <View style={styles.centerContent}>
          <Text style={styles.statusText}>{statusInfo.text}</Text>
          <View style={[styles.separateView, {backgroundColor: statusInfo.color}]}/>
          <View style={styles.leftOfContentView}>
            <Text style={styles.numberApplicationText}>{data.value}</Text>
          </View>
        </View>
        <View style={[styles.rightContent, {backgroundColor: statusInfo.color}]} >
          <FontAwesome5 style={styles.rightIcon} name={'chevron-right'} solid size={13} />
        </View>
        <ICSvg
            name="status"
            tintColor={statusInfo.color}
            height={40}
            width={13}
            containerStyle={{ position: 'absolute', top: -1, left: 0 }}
        />
      </View>
    </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: csstyles.vars.csGreen,
    // flex: 1
  },
  container: {
    ...csstyles.base.full,
    ...csstyles.base.rowCenter,
    marginHorizontal: csstyles.vars.csBoxMargin,
    marginTop: csstyles.vars.csBoxMargin * 1.5,
    height: heightCell,
  },
  centerContent: {
    ...csstyles.base.row,
    ...csstyles.base.full,
    ...csstyles.base.relative,
    ...csstyles.base.shadow,
    alignItems: 'center',
    backgroundColor: csstyles.vars.csWhite,
    height: heightCell,
    marginLeft: 5
  },
  leftOfContentView: {
    flex: 1/3,
    height: heightCell,
    ...csstyles.base.row,
    alignItems:'center',
  },
  separateView: {
    height: 44 - 10,
    marginVertical: 5,
    width: 1
  },
  statusText: {
    ...csstyles.base.full,
    marginLeft: 30,
    ...csstyles.text.regular,
    fontSize: 16
  },
  numberApplicationText: {
    ...csstyles.base.full,
    ...csstyles.text.regular,
    textAlign: 'center',
    fontSize: 16
  },
  rightContent: {
    ...csstyles.base.center,
    ...csstyles.base.shadow,
    marginLeft: 0,
    height: heightCell,
    width: heightCell,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  rightIcon: {
    color: csstyles.vars.csWhite
  }
})

export default ApplicationSummaryItem
