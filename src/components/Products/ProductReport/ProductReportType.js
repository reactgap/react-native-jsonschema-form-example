// // @format
// // @flow

// import React, { PureComponent } from 'react';
// import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
// import { Product } from '../../../types';
// import EvilIcons from 'react-native-vector-icons/EvilIcons';
// import csstyles from '../../../csstyles';

// type Props = {
//     data: Object,
// };
// export default class ProductReportType extends PureComponent<Props> {

//     render() {
//         const { data, width, odd, margin } = this.props;

//         return (
//             <TouchableOpacity
//                 activeOpacity={0.8}
//                 style={{
//                     overflow: 'hidden',
//                     shadowColor: 'black',
//                     shadowOpacity: 0.5,
//                     shadowRadius: 1,
//                     shadowOffset: {
//                         height: 3,
//                         width: 1,
//                     },
//                     backgroundColor: '#3e3d42',
//                     marginLeft: csstyles.vars.csBoxMargin,
//                     marginTop: csstyles.vars.csBoxMargin,
//                 }}

//                 // onPress={this.onPress}
//             >
//                  <View style={{ flex: 1, alignItems: 'center' }}>
//                         {this.renderImage(data)}
//                     </View>
//                     <View style={{ marginBottom: 5, position: 'absolute', bottom: 0, left: 0, right: 0 }}>
//                         <Text
//                             style={{
//                                 textAlign: 'center',
//                                 fontSize: 13,
//                                 fontWeight: '700',
//                                 color: '#FFFFFF',
//                                 lineHeight: 17,
//                                 paddingBottom: 4
//                             }}
//                             numberOfLines={1}
//                         >
//                             {data.name.toUpperCase()}
//                         </Text>
//                         <Text
//                             style={{
//                                 textAlign: 'center',
//                                 fontSize: 14,
//                                 fontWeight: '700',
//                                 color: csstyles.vars.csGreen,
//                                 lineHeight: 17,
//                                 paddingBottom: 4
//                             }}
//                             numberOfLines={1}
//                         >
//                             {data.orgainization.toUpperCase()}
//                         </Text>
//                     </View>
//             </TouchableOpacity>
//         );
//     }
// }

// const styles = StyleSheet.create({

// })
