// @format
// @flow

import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Product } from '../../types';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import csstyles from '../../csstyles';
import LinearGradient from 'react-native-linear-gradient';
import Photo from '../../components/Photo/Photo'

type Props = {
    data: Product,
    width: number,
    onPress: (data: Product) => void
};
export default class MenuItem extends PureComponent<Props> {
    onPress = () => {
        const { data, onPress } = this.props;
        if (onPress) {
            onPress(data);
        }
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
                wrapStyle={styles.photoWrap}
                photoStyle={styles.productPhoto}
            />
        )
    }

    render() {
        const { data, width, margin } = this.props;

        return (
            <View style={styles.container}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={this.onPress}
                >
                    <View style={styles.productTopView}>
                        {this.renderImage(data)}
                    </View>
                    <View style={styles.info}>
                        <Text
                            style={styles.providerName}
                            numberOfLines={1}
                        >
                            {data.orgainization.toUpperCase()}
                        </Text>
                        <Text
                            style={styles.serviceName}
                            numberOfLines={1}
                        >
                            {data.name}
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        overflow: 'hidden',
        ...csstyles.base.column,
        justifyContent: 'space-between',
        marginTop: csstyles.vars.csBoxMargin * 1.5,
        height: 95,
        flex: 1/3
    },
    info: { 
        marginTop: csstyles.vars.csBoxSpacing,
        paddingHorizontal: 5
    },
    productTopView: { 
        alignItems: 'center', 
        position: 'relative',
        backgroundColor: csstyles.vars.csWhite,
        paddingTop: 2
    },
    photoWrap: {
         width: 50,
         height: 50,
         backgroundColor: csstyles.vars.csWhite,
         borderRadius: 16,
         ...csstyles.base.shadow,
         overflow: 'visible' //important to show
    },
    productPhoto: {
      width: 48,
      height: 48
    },
    providerName: {
        ...csstyles.text.textMain,
        textAlign: 'center',
        fontSize: 12,
        fontWeight: '500',
        lineHeight: 17,
        marginBottom: 0
    },
    serviceName: {
        textAlign: 'center',
        fontSize: 11,
        color: '#FFFFFF',
        lineHeight: 17,
        color: csstyles.vars.textMain,
        paddingBottom: 4
    }
})
