// @flow
import React, { PureComponent } from 'react'
import { View,
  StyleSheet,
  Dimensions,
  Text } from 'react-native'
import csstyles from '../../csstyles'
import Services from './SearchApplication/Services.json'
import FilterTime from './SearchApplication/FilterTime.json'
import { PickerOption } from 'react-native-jsonschema-form'
import { IS_DEVICE_VERY_LONG_WIDTH, DEVICE_SCREEN_WIDTH } from '../../utils/deviceHelper'


type Props = I18NComponent & {
  onChange: (value: String, index: Number, type: String) => void,
}

class FilterView extends PureComponent<Props> {
  pickerOnchange = (value: String, index: Number, type: String) => {
    const { onChange } = this.props
    console.log('picker: ',value, index)
    if (onChange) {
      onChange(value, index, type)
    }
  }

  render() {
    const { service, time } = this.props
    console.log('FilterView')
    console.log('service',service)
    console.log('time',time)
    return (
      <>
        <View style={styles.filterForm}>
        <View style={styles.viewPicker}>
          <PickerOption
            label="Service Option"
            icon={'money-check-alt'}
            value={service.name}
            data={Services}
            onChange={this.pickerOnchange}
            pickerCenter={IS_DEVICE_VERY_LONG_WIDTH}
            fontSize={12}
            type="service"
            currentIndex={service.id}
          />
        </View>
        <View style={styles.viewPicker}>
          <PickerOption
            label="Time Option"
            value={time.name}
            data={FilterTime}
            onChange={this.pickerOnchange}
            pickerCenter={IS_DEVICE_VERY_LONG_WIDTH}
            fontSize={12}
            type="time"
            currentIndex={time.id}
          />
        </View>
      </View>
    </>
    )
  }
}

const styles = StyleSheet.create({
  filterForm: {
    ...csstyles.base.rowCenter,
    marginVertical: 10,

  },
  viewPicker: {
    marginLeft: 8,
    width: DEVICE_SCREEN_WIDTH/2 - 16
  }
})

export default  FilterView
