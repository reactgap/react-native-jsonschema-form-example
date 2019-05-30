import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  processColor,
} from 'react-native';
import {PieChart} from 'react-native-charts-wrapper';
import csstyles from '../../../csstyles'
import { DEVICE_SCREEN_WIDTH } from '../../../utils/deviceHelper'
class PieChartScreen extends React.Component {

  
  constructor() {
    super();

    this.state = {
      legend: {
        enabled: true,
        textSize: 15,
        form: 'CIRCLE',

        horizontalAlignment: "RIGHT",
        verticalAlignment: "CENTER",
        orientation: "VERTICAL",
        wordWrapEnabled: true
      },
      data: {
        dataSets: [{
          values: [{value: 5, label: 'Chờ xử lý'},
            {value: 10, label: 'Đang xử lý'},
            {value: 15, label: 'Huỷ'},
            {value: 9, label: 'Lỗi'},
            {value: 15, label: 'Thành công'}],
          label: '',
          config: {
            colors: [processColor(csstyles.statusColor.pendding), processColor(csstyles.statusColor.processing), 
              processColor(csstyles.statusColor.canceled), processColor(csstyles.statusColor.error), processColor(csstyles.statusColor.sucess)],
            valueTextSize: 14,
            valueTextColor: processColor(csstyles.vars.csBlue),
            sliceSpace: 5,
            selectionShift: 13,
            // xValuePosition: "OUTSIDE_SLICE",
            // yValuePosition: "OUTSIDE_SLICE",
            valueFormatter: "#.#'%'",
            valueLineColor: processColor(csstyles.vars.csGrey),
            valueLinePart1Length: 0.5
          }
        }],
      },
      highlights: [{x:2}],
      description: null
    };
  }

  handleSelect(event) {
    let entry = event.nativeEvent
    if (entry == null) {
      this.setState({...this.state, selectedEntry: null})
    } else {
      this.setState({...this.state, selectedEntry: JSON.stringify(entry)})
    }

    console.log(event.nativeEvent)
  }

  render() {
    return (
      <View style={styles.container}>
        <PieChart
          style={styles.chart}
          logEnabled={true}
          chartBackgroundColor={processColor('transparent')}
          chartDescription={this.state.description}
          data={this.state.data}
          legend={this.state.legend}
          highlights={this.state.highlights}
          entryLabelColor={processColor(csstyles.vars.csBlue)}
          entryLabelTextSize={10}
          drawEntryLabels={false}
          rotationEnabled={true}
          rotationAngle={45}
          usePercentValues={true}
          styledCenterText={{text:'', color: processColor(csstyles.vars.csGreen), size: 20}}
          centerTextRadiusPercent={100}
          holeRadius={40}
          holeColor={processColor('#f0f0f0')}
          transparentCircleRadius={45}
          transparentCircleColor={processColor('#f0f0f088')}
          maxAngle={360}
          onSelect={this.handleSelect.bind(this)}
          onChange={(event) => console.log(event.nativeEvent)}
        />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    width: DEVICE_SCREEN_WIDTH,
    marginTop: csstyles.vars.csBoxMargin * 2,
    backgroundColor: csstyles.vars.csWhite,
    ...csstyles.base.shadow
  },
  chart: {
    marginHorizontal: csstyles.vars.csBoxSpacing,
    flex: 1
  }
});

export default PieChartScreen;

