// @flow

import React, { Component } from 'react'
import { 
  StyleSheet,
  View,
  Text
} from 'react-native'
import { type Application } from '../../../types'
import csstyles from '../../../csstyles'
import CSButton from '../../../components/Button/CSButton/CSButton'
type Props = {
  data: Application,
  index: number,
  onPress: (damage: Application) => void,
  type?: 'myApplication' | 'searchApplication'
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

  render() {
    const { data, index, type } = this.props
    console.log('data',data)
    const fullName = data.customer.firstName + ' ' +data.customer.lastName
    let address = ''
    if (data.customer.address != null) {
      address = data.customer.address.district + ' - ' + data.customer.address.province || ''
    }

    return (
      <View styles={styles.container}>
        <View style={ styles.borderView }/>
        <View style={csstyles.base.column}>
          <View style={styles.topView}>
            <View style={styles.applicationId}>
              <Text style={styles.title}>Application#</Text>
              <Text style={styles.value}>{data.applicationId}</Text>
            </View>
            
              { type && type === 'searchApplication' ?
                  (
                  <View style={csstyles.base.column}>
                    <Text style={[styles.title, styles.creditTextStyle]}>10 credits</Text>
                    <CSButton
                        type='main'
                        title={'Need it'}
                        onPress={this.onPressNeedApplication}
                        style={{
                          marginTop: 5,
                          height: 25
                        }}
                      />
                  </View>
                  )
                : 
                (
                  <View style={csstyles.base.column}>
                    <Text style={styles.title}>Status</Text>
                  </View>
                )
              }

          </View>
          <View style={styles.midView}>
          <View style={csstyles.base.row}>
            <View style={styles.customerInfo}>
              <Text style={styles.title}>Full Name</Text>
              <Text style={styles.value}>{fullName}</Text>
              <Text style={styles.title}>Address</Text>
              <Text style={styles.value}>{address}</Text>
            </View>
            <View style={csstyles.base.column}>
              <Text  style={[styles.title, styles.leftValue]}>Service Type</Text>
              <Text  style={[styles.value, styles.leftValue]}>ABC</Text>
            </View>
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
    borderRadius: csstyles.vars.csBoxBorderRadius,
    padding: csstyles.vars.csBoxSpacing,
    backgroundColor: csstyles.vars.csWhite,

  },
  borderView: {
    height: 10,
    marginHorizontal: 10,
    backgroundColor: csstyles.vars.csGreenBorder,
    borderTopRightRadius: csstyles.vars.csBoxBorderRadius,
    borderTopLeftRadius: csstyles.vars.csBoxBorderRadius
  },
  topView: {
    ...csstyles.base.row,
    ...csstyles.base.full,
    backgroundColor: csstyles.vars.csGreenDeep,
    paddingHorizontal: csstyles.vars.csBoxSpacing2x,
    paddingVertical: csstyles.vars.csBoxSpacing,
    borderTopRightRadius: csstyles.vars.csBoxBorderRadius,
    borderTopLeftRadius: csstyles.vars.csBoxBorderRadius
  },  
  midView: {
    ...csstyles.base.column,
    ...csstyles.base.full,
    backgroundColor: csstyles.vars.csGreen,
    paddingHorizontal: csstyles.vars.csBoxSpacing2x,
    paddingVertical: csstyles.vars.csBoxSpacing,
    marginBottom: csstyles.vars.csBoxSpacing2x,
    borderBottomRightRadius: csstyles.vars.csBoxBorderRadius,
    borderBottomLeftRadius: csstyles.vars.csBoxBorderRadius
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
    color: csstyles.vars.csLight
  },
  value: {
    ...csstyles.text.medium,
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 16,
    color: csstyles.vars.csWhite
  },
  leftValue: {
    textAlign: 'right'
  },
  creditTextStyle: {
    ...csstyles.text.bold,
    fontSize: 15,
    textAlign: 'center',
    color: csstyles.vars.csGrey 
  }
})

export default ApplicationListItem
