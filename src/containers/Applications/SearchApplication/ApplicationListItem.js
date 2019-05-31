// @flow

import React, { Component } from 'react'
import { 
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native'
import { type Application } from '../../../types'
import csstyles from '../../../csstyles'
import CSButton from '../../../components/Button/CSButton/CSButton'
import ICSvg from '../../../components/icons/ICSvg'
import { dateFormatToString } from '../../../utils/DatetimeFormat'
import numberFormat from '../../../utils/numberFormat'

type Props = {
  data: Application,
  index: Number,
  onPress: (damage: Application) => void,
  type?: Number
}

class ApplicationListItem extends Component<Props> {
  shouldComponentUpdate(nextProps: Props) {
    const { data } = this.props

    return nextProps.data !== data
  }

  onPress = () => {
    const { onPress, data } = this.props
    onPress(data)
  }

  onPressNeedApplication = () => {
    const { onPress, data } = this.props
    onPress(data)
  }

  onPressRejectInfo = () => {

  }

  renderLeftInfoByType = () => {
    const { data, type } = this.props
    const updatedDate = dateFormatToString(data.updatedDate)
    switch(type) {
      case 1: {
        //"Chờ xử lý"
        return (
          <View>
            <Text style={{...csstyles.text.textMain, paddingVertical: csstyles.vars.csBoxSpacing }}>
              Chờ xử lý
            </Text>
          </View>
        )
      }
      case 2: {
        //"Đang xử lý"
        return (
          <View style={{ ...csstyles.base.row }}>
            <Text style={{...csstyles.text.textMain, paddingVertical: csstyles.vars.csBoxSpacing + 5, flex: 1, color: csstyles.vars.csGreen }}>
              Data Entry
            </Text>
          </View>
        )
      }
      case 3: {
        //"Hủy"
        return (
          <View style={csstyles.base.row}>
            <View style={{ paddingVertical: csstyles.vars.csBoxSpacing + 5, flex: 1 }}>
              <CSButton title={'Xem chi tiết'} textCustomStyle={{ fontSize: 12 }} type="danger" onPress={this.onPressRejectInfo} style={styles.rejectDetailBtn} />
            </View>
        </View>
        )
      }
      case 4: {
        //"Lỗi"
        return (
          <View style={csstyles.base.row}>
            <View style={{ paddingVertical: csstyles.vars.csBoxSpacing + 5, flex: 1 }}>
              <CSButton title={'Xem chi tiết lỗi'} textCustomStyle={{ fontSize: 12 }} type="custom" onPress={this.onPressRejectInfo} customStyle={styles.errorDetailBtn} />
            </View>
          </View>
          
        )
      }
      case 5: {
        //"Thành công"
        return (
          <View style={{ ...csstyles.base.column }}>
            <Text style={{...csstyles.text.textMain, paddingVertical: csstyles.vars.csBoxSpacing, flex: 1, color: csstyles.vars.csGreen, ...csstyles.text.regular, fontSize: 15 }}>
              Disbursed
            </Text>
            <Text style={{...csstyles.text.textMain, flex: 1, color: csstyles.vars.csGreen, ...csstyles.text.regular, fontSize: 15 }}>
            {numberFormat.toLocaleString(2000000)}
            </Text>
          </View>
        )
      }
      default: {

        break
      }
    }
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
    const { data, index, type } = this.props
    console.log('data',data)
    const fullName = data.customer.firstName + ' ' +data.customer.lastName
    const applicationId = data.applicationId + ''
    let address = ''
    if (data.customer.address != null) {
      address = data.customer.address.district + ' - ' + data.customer.address.province || ''
    }
    const statusInfo: StatusInfo = this.colorWithType(type)
    const dateStr = dateFormatToString(data.createDate)
    console.log('dateeeee',dateStr)
    return (
      <View styles={styles.container}>
        <View style={styles.mainView}>
          <View style={{ backgroundColor: statusInfo.color, width: 5, overflow: 'hidden', borderBottomLeftRadius: csstyles.vars.csBoxBorderRadius, borderTopLeftRadius: csstyles.vars.csBoxBorderRadius }}/>
          <View style={styles.leftView}>
            <View>
              <Text style={styles.value}>{applicationId.length > 0 ? applicationId + '-' + fullName : fullName}</Text>
              <Text style={styles.title}>CMND: {data.customer.nationalId}</Text>
            </View>
            <View style={{ height: 0.5, marginTop: 10 ,marginLeft: 0, marginRight: 0, backgroundColor: '#E2E2E2' }}/>
            {this.renderLeftInfoByType()}
          </View>
          <View style={styles.rightView}>
            <View style={styles.lineView}/>
            <View style={styles.rightContent}>
              {/* <Text style={[styles.applicationTextId, {color: statusInfo.color }]}>{data.applicationId}</Text> */}
              <Text style={{ textAlign: 'center', ...csstyles.text.textMain, fontSize: 12, paddingTop: csstyles.vars.csBoxSpacing/2 }}>Ngày Khởi Tạo</Text>
              <Text style={[styles.textCommon, { textAlign: 'center', paddingBottom: csstyles.vars.csBoxSpacing }]}>{dateStr}</Text>
              <Image
                source={{
                  uri: 'separateCircle'
                }}
                resizeMode={'center'}
                style={styles.image}
              />
              <Text style={[styles.textCommon,{ textAlign: 'center', paddingTop: csstyles.vars.csBoxSpacing/2 }]}>Ngày cập nhật</Text>
              <Text style={[styles.textCommon, { textAlign: 'center', paddingBottom: csstyles.vars.csBoxSpacing }]}>{dateStr}</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    ...csstyles.base.full,
    ...csstyles.base.row,
    // padding: csstyles.vars.csBoxSpacing,
    margin: csstyles.vars.csBoxSpacing,
    backgroundColor: csstyles.vars.csContainer,

  },
  mainView: {
    ...csstyles.base.row,
    borderRadius: csstyles.vars.csBoxBorderRadius,
    backgroundColor: csstyles.vars.csWhite,
    ...csstyles.base.shadow,
    marginTop: 10
  },
  leftView: {
    ...csstyles.base.column,
    ...csstyles.base.full,
    paddingHorizontal: csstyles.vars.csBoxSpacing2x,
    paddingVertical: csstyles.vars.csBoxSpacing,
  },
  rightView: {
    ...csstyles.base.row,
    width: 100
  },
  rightContent: {
    flex: 1,
    ...csstyles.base.columnCenter,

  },
  lineView: {
    width: 0.5,
    backgroundColor: '#E2E2E2'
  },
  applicationId: {
    ...csstyles.base.column,
    ...csstyles.base.full,
    width: 100

  },
  customerInfo:{
    ...csstyles.base.column,
    ...csstyles.base.full
  },
  title: {
    ...csstyles.text.regular,
    ...csstyles.text.textMain,
    fontSize: 15,
  },
  value: {
    ...csstyles.text.medium,
    paddingBottom: 5,
    fontSize: 16,
    ...csstyles.text.textMain
  },
  applicationTextId: {
    fontSize: 16,
    textAlign: 'center'
  },
  image: {
    justifyContent: 'center',
    width: 15,
    height: 41,
  },
  textCommon: {
    ...csstyles.text.textMain,
    ...csstyles.text.regular, 
    fontSize: 12
  },
  backBtn: {
    left: csstyles.vars.csBoxSpacing
  },
  rejectDetailBtn: {
    fontSize: 12,
    height: 30,
    width: 120,
    flex: 1
  },
  errorDetailBtn: { 
    backgroundColor: csstyles.statusColor.error, 
    borderWidth: 0, 
    height: 30, 
    width: 120
  }
})

export default ApplicationListItem
