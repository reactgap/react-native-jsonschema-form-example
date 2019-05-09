// @format
// @flow

import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Product } from '../../types';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
// import { getPlatformElevation } from '../../common/elevation';
import csstyles from '../../csstyles';
import LinearGradient from 'react-native-linear-gradient';
import Photo from '../../components/Photo/Photo'

type Props = {
    data: Product,
    width: number,
    odd: boolean,
    onPress: (data: Product) => void
};
export default class MenuItem extends PureComponent<Props> {
    onPress = () => {
        const { data, onPress } = this.props;
        console.log('onPress product', data)
        onPress(data);
    };

    renderIcon = (data: Product) => {
        return (
            <EvilIcons
                name={data.logoName}
                style={{ color: 'white', marginTop: 20 }}
                size={40}
                suppressHighlighting
            />
        )
    }

    renderImage = (data: Product) => {
        return (
            <Photo
                url={data.imageUrl}
                wrapStyle={styles.walkthoughWrap}
                photoStyle={styles.walkthoughPhoto}
            />
        )
    }

    render() {
        const { data, width, odd, margin } = this.props;

        return (
            <TouchableOpacity
                activeOpacity={0.8}
                style={{
                    overflow: 'hidden',
                    shadowColor: 'black',
                    shadowOpacity: 0.5,
                    shadowRadius: 1,
                    shadowOffset: {
                        height: 3,
                        width: 1,
                    },
                    backgroundColor: '#3e3d42',
                    marginLeft: csstyles.vars.csBoxMargin,
                    marginTop: csstyles.vars.csBoxMargin,
                }}

                onPress={this.onPress}
            >
                <LinearGradient style={{
                    flex: 1,
                    backgroundColor: 'transparent',
                    position: 'relative',
                    width,
                    height: width
                }} colors={['#363A44', '#3e3d42', '#37343d']} >

                    <View style={{ flex: 1, alignItems: 'center' }}>
                        {this.renderImage(data)}
                    </View>
                    <View style={{ marginBottom: 5, position: 'absolute', bottom: 0, left: 0, right: 0 }}>
                        <Text
                            style={{
                                textAlign: 'center',
                                fontSize: 13,
                                fontWeight: '700',
                                color: '#FFFFFF',
                                lineHeight: 17,
                                paddingBottom: 4
                            }}
                            numberOfLines={1}
                        >
                            {data.name.toUpperCase()}
                        </Text>
                        <Text
                            style={{
                                textAlign: 'center',
                                fontSize: 14,
                                fontWeight: '700',
                                color: csstyles.vars.csGreen,
                                lineHeight: 17,
                                paddingBottom: 4
                            }}
                            numberOfLines={1}
                        >
                            {data.orgainization.toUpperCase()}
                        </Text>
                    </View>
                </LinearGradient>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    walkthoughWrap: {
      width: csstyles.vars.widthProduct - 40,
      height: csstyles.vars.widthProduct - 60,
      borderRadius: csstyles.vars.csBoxBorderRadius2x,
      overflow: 'hidden'
    },
    walkthoughPhoto: {
      overflow: 'hidden'
    }
})
