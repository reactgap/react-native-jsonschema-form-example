// @flow
import React from 'react';
import { View, ViewStyle, TouchableOpacity } from 'react-native';
import Svg, { G, Path, Polygon, Circle, Rect } from 'react-native-svg';

type Props = {
  name:
    | 'status'
    | 'arrow-right'
    | 'arrow-down',
  tintColor?: string,
  width?: number,
  height?: number,
  containerStyle: ViewStyle,
  onPress: () => void
};

const orgSizes = {
  'border-circle':{
    orgWidth: 240,
    orgHeight: 60
  },
  status: {
    orgWidth: 22,
    orgHeight: 84
  },
  'arrow-right': {
    orgWidth: 7,
    orgHeight: 12
  },
  'arrow-down': {
    orgWidth: 11,
    orgHeight: 6
  }
};

export default class ICSvg extends React.PureComponent<Props> {
  static defaultProps: Props = {
    tintColor: '#000000',
    width: 0,
    height: 0
  };

  renderSvg = () => {
    const { tintColor, name } = this.props;

    switch (name) {
      case 'border-circle': {
       return(
        <Path
            d="M189.87 0h-4a0.5 0.5 0 0 0 0 1h4a0.5 0.5 0 0 0 0 -1Zm-10 0h-4a0.5 0.5 0 0 0 0 1h4a0.5 0.5 0 0 0 0 -1Zm-10 0h-4a0.5 0.5 0 0 0 0 1h4a0.5 0.5 0 0 0 0 -1Zm-10 0h-4a0.5 0.5 0 0 0 0 1h4a0.5 0.5 0 0 0 0 -1Zm-10 0h-4a0.5 0.5 0 0 0 0 1h4a0.5 0.5 0 0 0 0 -1Zm-10 0h-4a0.5 0.5 0 0 0 0 1h4a0.5 0.5 0 0 0 0 -1Zm-10 0h-4a0.5 0.5 0 0 0 0 1h4a0.5 0.5 0 0 0 0 -1Zm-10 0h-4a0.5 0.5 0 0 0 0 1h4a0.5 0.5 0 0 0 0 -1Zm-10 0h-4a0.5 0.5 0 0 0 0 1h4a0.5 0.5 0 0 0 0 -1Zm-10 0h-4a0.5 0.5 0 0 0 0 1h4a0.5 0.5 0 0 0 0 -1Zm-10 0h-4a0.5 0.5 0 0 0 0 1h4a0.5 0.5 0 0 0 0 -1Zm-10 0h-4a0.5 0.5 0 0 0 0 1h4a0.5 0.5 0 0 0 0 -1Zm-10 0h-4a0.5 0.5 0 0 0 0 1h4a0.5 0.5 0 0 0 0 -1Zm-10 0h-4a0.5 0.5 0 0 0 0 1h4a0.5 0.5 0 0 0 0 -1Zm-10 0h-4a0.5 0.5 0 0 0 0 1h4a0.5 0.5 0 0 0 0 -1Zm-10 0h-4a0.5 0.5 0 0 0 0 1h4a0.5 0.5 0 0 0 0 -1Zm-10 0H28.39l-0.53 0h-0.14l-0.22 0h-0.67l-0.95 0.11a0.5 0.5 0 0 0 0.07 1H26A29.39 29.39 0 0 1 29.87 1a0.5 0.5 0 0 0 0 -1ZM20.21 1.62l-0.16 0q-0.91 0.31 -1.79 0.68h0l0 0h0l0 0h-0.29l0 0h0l0 0h0l0 0h0q-0.64 0.28 -1.26 0.59h0l0 0h0l0 0h0l0 0h0a0.5 0.5 0 1 0 0.45 0.89 28.93 28.93 0 0 1 3.56 -1.51 0.5 0.5 0 0 0 -0.16 -1Zm-8.59 4.7a0.5 0.5 0 0 0 -0.31 0.11l-0.44 0.35h0l0 0h0l0 0h0l0 0h0l0 0h0l0 0h0l0 0h-0.05l0 0h-0.1l0 0h0l0 0h0l0 0h0l0 0h0l0 0h0l0 0h0l0 0h0l0 0h0L10 7.55h0Q9.13 8.3 8.35 9.1a0.5 0.5 0 0 0 0.72 0.69 29.28 29.28 0 0 1 2.87 -2.59 0.5 0.5 0 0 0 -0.31 -0.89ZM5 13.56a0.5 0.5 0 0 0 -0.42 0.23 29.93 29.93 0 0 0 -1.84 3.3h0l0 0.06h0v0h0l0 0.05h0v0h0v0h0a0.5 0.5 0 0 0 0.91 0.42 29 29 0 0 1 1.87 -3.38A0.5 0.5 0 0 0 5 13.56Zm-3.85 9a0.5 0.5 0 0 0 -0.48 0.38A29.93 29.93 0 0 0 0 26.88a0.5 0.5 0 0 0 0.45 0.54H0.53A0.5 0.5 0 0 0 1 27a29 29 0 0 1 0.65 -3.81 0.5 0.5 0 0 0 -0.37 -0.6ZM0.5 32.32h0a0.5 0.5 0 0 0 -0.45 0.54q0.06 0.66 0.15 1.31h0v0.09h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0q0.13 0.73 0.3 1.44a0.5 0.5 0 0 0 0.49 0.39h0.11a0.5 0.5 0 0 0 0.37 -0.6A29 29 0 0 1 1 32.77a0.5 0.5 0 0 0 -0.5 -0.45ZM3 41.77a0.5 0.5 0 0 0 -0.45 0.71q0.29 0.64 0.62 1.27h0l0 0.05h0v0h0l0 0.05h0v0h0v0h0v0h0v0h0v0h0v0h0l0 0h0v0h0l0 0.05h0l0 0.08h0q0.46 0.85 1 1.66a0.5 0.5 0 0 0 0.84 -0.54 29 29 0 0 1 -1.84 -3.4A0.5 0.5 0 0 0 3 41.77Zm5.5 8.1a0.5 0.5 0 0 0 -0.36 0.84l0.36 0.37h0l0 0h0l0 0h0l0 0h0l0 0h0l0 0h0l0 0h0l0 0h0l0 0h0q1.07 1 2.24 2a0.5 0.5 0 0 0 0.63 -0.78A29.27 29.27 0 0 1 8.89 50a0.5 0.5 0 0 0 -0.36 -0.15Zm7.84 5.87a0.5 0.5 0 0 0 -0.23 0.94 29.85 29.85 0 0 0 3.67 1.59l0.16 0a0.5 0.5 0 0 0 0.17 -1 28.93 28.93 0 0 1 -3.54 -1.54 0.5 0.5 0 0 0 -0.23 -0.06Zm9.32 3a0.5 0.5 0 0 0 -0.07 1q0.76 0.11 1.52 0.18h0.37q1 0.08 2.1 0.09h0a0.5 0.5 0 0 0 0 -1 29.36 29.36 0 0 1 -3.85 -0.29ZM39.61 59h-4a0.5 0.5 0 0 0 0 1h4a0.5 0.5 0 1 0 0 -1Zm10 0h-4a0.5 0.5 0 0 0 0 1h4a0.5 0.5 0 1 0 0 -1Zm10 0h-4a0.5 0.5 0 0 0 0 1h4a0.5 0.5 0 1 0 0 -1Zm10 0h-4a0.5 0.5 0 0 0 0 1h4a0.5 0.5 0 0 0 0 -1Zm10 0h-4a0.5 0.5 0 0 0 0 1h4a0.5 0.5 0 0 0 0 -1Zm10 0h-4a0.5 0.5 0 0 0 0 1h4a0.5 0.5 0 0 0 0 -1Zm10 0h-4a0.5 0.5 0 0 0 0 1h4a0.5 0.5 0 0 0 0 -1Zm10 0h-4a0.5 0.5 0 0 0 0 1h4a0.5 0.5 0 0 0 0 -1Zm10 0h-4a0.5 0.5 0 0 0 0 1h4a0.5 0.5 0 0 0 0 -1Zm10 0h-4a0.5 0.5 0 0 0 0 1h4a0.5 0.5 0 0 0 0 -1Zm10 0h-4a0.5 0.5 0 0 0 0 1h4a0.5 0.5 0 0 0 0 -1Zm10 0h-4a0.5 0.5 0 0 0 0 1h4a0.5 0.5 0 0 0 0 -1Zm10 0h-4a0.5 0.5 0 0 0 0 1h4a0.5 0.5 0 0 0 0 -1Zm10 0h-4a0.5 0.5 0 0 0 0 1h4a0.5 0.5 0 0 0 0 -1Zm10 0h-4a0.5 0.5 0 0 0 0 1h4a0.5 0.5 0 0 0 0 -1Zm10 0h-4a0.5 0.5 0 0 0 0 1h4a0.5 0.5 0 0 0 0 -1Zm9.67 -1.53l-0.16 0a28.89 28.89 0 0 1 -3.74 1 0.5 0.5 0 0 0 0.09 1h0.09q1 -0.2 2 -0.46H198q0.75 -0.21 1.48 -0.46a0.5 0.5 0 0 0 -0.16 -1Zm8.63 -4.62a0.5 0.5 0 0 0 -0.31 0.1 29.16 29.16 0 0 1 -3.21 2.16 0.5 0.5 0 0 0 0.5 0.87q0.66 -0.38 1.29 -0.8h0l0.05 0h0l0 0h0.19l0 0h0l0 0h0l0 0h0l0 0h0l0.05 0h0q0.76 -0.52 1.49 -1.08a0.5 0.5 0 0 0 -0.31 -0.9Zm6.65 -7.19a0.5 0.5 0 0 0 -0.42 0.23A29.21 29.21 0 0 1 211.81 49a0.5 0.5 0 0 0 0.75 0.66l0.4 -0.47h0v0h0l0 0h0l0 0h0l0 0h0v0h0l0 0h0v0h0l0 0h0v0h0l0 0h0l0 0h0l0 0h0l0 0h0l0 0h0l0 0h0q0.82 -1 1.55 -2.15a0.5 0.5 0 0 0 -0.42 -0.77Zm3.93 -9a0.5 0.5 0 0 0 -0.48 0.38 28.87 28.87 0 0 1 -1.19 3.68 0.5 0.5 0 0 0 0.93 0.37q0.28 -0.7 0.52 -1.41h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0l0 -0.09h0l0.07 -0.24h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0q0.1 -0.36 0.19 -0.72a0.5 0.5 0 0 0 -0.36 -0.6l-0.12 0Zm0.77 -9.76h0a0.5 0.5 0 0 0 -0.46 0.54c0.07 0.83 0.11 1.68 0.11 2.52q0 0.67 0 1.34a0.5 0.5 0 0 0 0.48 0.52h0a0.5 0.5 0 0 0 0.5 -0.47q0 -0.4 0 -0.81h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v0h0v-0.07h0v0h0v0h0v-0.1h0v0h0v0h0q0 -0.8 -0.08 -1.58h0v0h0v0h0v0h0v0h0v-0.07h0a0.5 0.5 0 0 0 -0.5 -0.46Zm-2.45 -9.47a0.5 0.5 0 0 0 -0.46 0.7 28.88 28.88 0 0 1 1.34 3.62 0.5 0.5 0 0 0 0.48 0.36l0.14 0a0.5 0.5 0 0 0 0.34 -0.62l-0.13 -0.44h0v0h0v0h0v0h0v0h0v0h0v0h0a29.8 29.8 0 0 0 -1.18 -3.08 0.5 0.5 0 0 0 -0.46 -0.29Zm-5.43 -8.15a0.5 0.5 0 0 0 -0.36 0.84 29.27 29.27 0 0 1 2.45 3 0.5 0.5 0 0 0 0.81 -0.58h0v0h0l0 0h0v0h0v0h0l0 0h0v0h0l0 0h0v0h0v0h0l0 0h0v0h0l0 0h0l0 0h0v0h0l0 0h0v0h0l0 0h0l0 0h0l0 0h0l0 0h0l0 0h0l0 0h0v0h0l0 0h0v0h0l0 0h0v0h0l0 0h0v0h0l0 0h0v0h0l0 0h0l0 0h0v0h0l0 0h0v0h0v0h0l0 0h0v0h0l0 0h0v0h0v0h0l0 0h0v0h0v0h0l0 0h0v0h-0.07l0 0h0l0 0h0l0 0h0l0 0h0l0 0h0v0h0l0 0h0c-0.36 -0.43 -0.74 -0.86 -1.13 -1.27a0.5 0.5 0 0 0 -0.36 -0.16Zm-7.79 -5.93a0.5 0.5 0 0 0 -0.23 0.94 29.11 29.11 0 0 1 3.29 2 0.5 0.5 0 0 0 0.58 -0.82q-0.51 -0.36 -1 -0.7h0l-0.08 0h0l-0.05 0h0l0 0h-0.33l0 0h0l-0.05 0h0l-0.06 0h0l-0.06 0h0q-0.79 -0.48 -1.6 -0.91a0.5 0.5 0 0 0 -0.23 -0.06ZM194.29 0.33a0.5 0.5 0 0 0 -0.07 1 28.93 28.93 0 0 1 3.77 0.83l0.14 0a0.5 0.5 0 0 0 0.14 -1l-0.36 -0.1h-0.22q-1.05 -0.28 -2.13 -0.49h-0.33l-0.87 -0.14Z"
            id="Path_1"
            fill={tintColor}
          />
       )
      }
      case 'status': {
        return (
          <G id="Page-2" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
           <Path
              d="M 8 0 H 13 V 80 H 8 V 0 Z"
              id="Path_1"
              fill={tintColor}
            />
            <Path
              d="M 10.5 30 C 16.0228474983 30 20.5 34.4771525017 20.5 40 C 20.5 45.5228474983 16.0228474983 50 10.5 50 C 4.97715250169 50 0.5 45.5228474983 0.5 40 C 0.5 34.4771525017 4.97715250169 30 10.5 30 Z"
              id="Path_2"
              fill={'#fff'}
              strokeWidth="1"
              stroke={tintColor}
            />
            <Path
              d="M 10.5 34 C 13.813708499 34 16.5 36.686291501 16.5 40 C 16.5 43.313708499 13.813708499 46 10.5 46 C 7.18629150102 46 4.5 43.313708499 4.5 40 C 4.5 36.686291501 7.18629150102 34 10.5 34 Z"
              id="Path_3"
              fill={tintColor}
            />
          </G>
        );
      }
      case 'arrow-right': {
        return (
          <G id="Page-2" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <Path
              d="M7.74481213,3.26811683 L3.4999999,7.2935615 L-0.744812325,3.26811683 C-1.07953036,2.91807536 -1.41424342,2.91078336 -1.74896145,3.24623801 C-2.08367952,3.58169547 -2.08367952,3.90985252 -1.74896145,4.23072316 L2.99792534,8.78122583 C3.11964136,8.927076 3.2869976,9 3.4999999,9 C3.71300221,9 3.88035845,8.927076 4.00207447,8.78122583 L8.74896126,4.23072316 C9.08367958,3.90985252 9.08367958,3.58169547 8.74896126,3.24623801 C8.41424293,2.91078336 8.07953045,2.91807536 7.74481213,3.26811683 Z"
              id="Arrow_2"
              fill={tintColor}
              transform="translate(3.500000, 6.000000) rotate(-90.000000) translate(-3.500000, -6.000000) "
            />
          </G>
        );
      }
      case 'arrow-down': {
        return (
          <G id="Page-2" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <Path
              d="M9.74481213,0.268116831 L5.4999999,4.2935615 L1.25518767,0.268116831 C0.920469643,-0.0819246366 0.585756577,-0.0892166421 0.251038546,0.246238014 C-0.0836795152,0.58169547 -0.0836795152,0.90985252 0.251038546,1.23072316 L4.99792534,5.78122583 C5.11964136,5.927076 5.2869976,6 5.4999999,6 C5.71300221,6 5.88035845,5.927076 6.00207447,5.78122583 L10.7489613,1.23072316 C11.0836796,0.90985252 11.0836796,0.58169547 10.7489613,0.246238014 C10.4142429,-0.0892166421 10.0795305,-0.0819246366 9.74481213,0.268116831 Z"
              id="Arrow_2"
              fill={tintColor}
            />
          </G>
        );
      }
      
      default:
        return null;
    }
  };

  renderContent = () => {
    const { width, height, name } = this.props;
    const { orgWidth, orgHeight } = orgSizes[name];

    let svgW = orgWidth;
    let svgH = orgHeight;

    if (width || height) {
      if (width) {
        svgH = (width * svgH) / svgW;
        svgW = width;
      } else {
        svgW = (height * svgW) / svgH;
        svgH = height;
      }
    }

    return (
      <Svg width={svgW} height={svgH} viewBox={`0 0 ${orgWidth} ${orgHeight}`} version="1.1">
        <G id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          {this.renderSvg()}
        </G>
      </Svg>
    );
  };

  render() {
    const { containerStyle, onPress } = this.props;

    if (onPress) {
      return (
        <TouchableOpacity
          activeOpacity={0.8}
          style={[styles.container, containerStyle]}
          onPress={onPress}
        >
          {this.renderContent()}
        </TouchableOpacity>
      );
    }

    return <View style={[styles.container, containerStyle]}>{this.renderContent()}</View>;
  }
}

const styles = {
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  }
};