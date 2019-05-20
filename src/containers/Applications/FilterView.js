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
    return (
      <>
        <View style={{ marginTop: 0, height: 0.4, backgroundColor: csstyles.vars.csContainer }}/>
        <View style={styles.filterForm}>
          <View style={[styles.viewPicker, {marginRight: csstyles.vars.csBoxSpacing/2.0}]}>
            <PickerOption
              label="Service Option"
              icon={'sort-down'}
              value={service.name}
              data={Services}
              onChange={this.pickerOnchange}
              pickerCenter={IS_DEVICE_VERY_LONG_WIDTH}
              fontSize={10}
              type="service"
              currentIndex={service.id}
              themeMode='light'
            />
          </View>
          <View style={[styles.viewPicker, {marginLeft: csstyles.vars.csBoxSpacing/2.0}]}>
            <PickerOption
              label="Time Option"
              icon={'sort-down'}
              value={time.name}
              data={FilterTime}
              onChange={this.pickerOnchange}
              pickerCenter={IS_DEVICE_VERY_LONG_WIDTH}
              fontSize={10}
              type="time"
              currentIndex={time.id}
              themeMode='light'
            />
          </View>
      </View>
    </>
    )
  }
}

const styles = StyleSheet.create({
  filterForm: {
    ...csstyles.base.rowCenterLineBetween,
    backgroundColor: csstyles.vars.csGreen,
    paddingHorizontal: csstyles.vars.csBoxSpacing
  },
  viewPicker: {
    marginTop: csstyles.vars.csBoxMargin,
    marginBottom: csstyles.vars.csBoxMargin,
    flex: 1
  }
})

export default  FilterView
