// @flow

import React, { Component } from 'react'
import { View,
  Modal,
  Animated,
  Easing,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  type ListRenderItem,
  type LayoutChangeEvent } from 'react-native'
import csstyles from '../../../csstyles'
import { DEVICE_BOTTOM_SAFE,
  IS_DEVICE_VERY_LONG_WIDTH,
  DEVICE_SCREEN_WIDTH,
  DEVICE_SCREEN_HEIGHT } from '../../../utils/deviceHelper'
import CSButton from '../../Button/CSButton/CSButton'
// import { currLanguage } from '../../../utils/i18n'
import dialCodes from '../../../../assets/locales/dialCodes.json'
import UniversalScreenContainer from '../../UniversalScreenContainer/UniversalScreenContainer'
import ListGroupSelectableItem from '../../ListGroup/Item/ListGroupSelectableItem'

type Props = {
  isOpen: boolean,
  countryName: string,
  dialCode: string,
  onChange: (countryName: string, dialCode: string) => void,
  center?: boolean
}

class DialCodePicker extends Component<Props> {
  animateValue: Animated.Value = new Animated.Value(-999)

  contentHeight: number = (DEVICE_SCREEN_HEIGHT * 2) / 3 + 44

  selectedIndex: number = -1

  data: {
    code: string,
    dialCode: string,
    name: string
  }[] = []

  constructor(props: Props, context: any) {
    super(props, context)

    this.data = dialCodes["en"]
  }

  shouldComponentUpdate(nextProps: Props) {
    const { isOpen, center, dialCode } = this.props

    if (!center) {
      if (!isOpen && nextProps.isOpen) {
        this.toggleUp()
      } else if (isOpen && !nextProps.isOpen) {
        this.toggleDown()

        return false
      }
    }

    return isOpen !== nextProps.isOpen || dialCode !== nextProps.dialCode
  }

  toggleUp = () => {
    const { dialCode } = this.props

    this.selectedIndex = this.data.findIndex(x => x.dialCode === dialCode)

    Animated.timing(this.animateValue, {
      duration: 250,
      toValue: 0,
      easing: Easing.inOut(Easing.ease)
    }).start(() => {})
  }

  toggleDown = () => {
    Animated.timing(this.animateValue, {
      duration: 250,
      toValue: -this.contentHeight,
      easing: Easing.inOut(Easing.ease)
    }).start(() => {
      this.forceUpdate()
    })
  }

  onClose = () => {
    const { onChange, countryName, dialCode } = this.props

    onChange(countryName, dialCode)
  }

  onDone = () => {
    const { onChange } = this.props
    const selected = this.data[this.selectedIndex]

    onChange(selected.name, selected.dialCode)
  }

  onDialCodeSelected = (dialCode: string) => {
    this.selectedIndex = this.data.findIndex(x => x.dialCode === dialCode)

    this.forceUpdate()
  }

  renderItem: ListRenderItem<{
    code: string,
    dialCode: string,
    name: string
  }> = ({ item, index }) => (
    <ListGroupSelectableItem
      id={item.dialCode}
      leftTitle={item.name}
      rightTitle={item.dialCode}
      selected={index === this.selectedIndex}
      onPress={this.onDialCodeSelected}
    />
  )

  renderContent = () => {
    const { center } = this.props

    return (
      <View style={[styles.contentContainer, center && styles.contentContainerCenter]}>
        <View style={[styles.actionBtnContainer, center && styles.actionBtnContainerCenter]}>
          <CSButton type="secondary" leftIcon="times" iconOnly onPress={this.onClose} />
          <CSButton type="primary" leftIcon="check" iconOnly onPress={this.onDone} />
        </View>
        <View
          style={{
            height: (DEVICE_SCREEN_HEIGHT * 2) / 3
          }}
        >
          <FlatList
            style={csstyles.base.full}
            data={this.data}
            extraData={this.selectedIndex}
            keyExtractor={item => `${item.code}`}
            renderItem={this.renderItem}
            windowSize={30}
          />
        </View>
      </View>
    )
  }

  renderBgTouchable = () => {
    const { center } = this.props
    const horizontalPosition = -(DEVICE_SCREEN_WIDTH - csstyles.vars.widthForContainerOnLargeScreen) / 2

    return (
      <TouchableOpacity
        style={[
          csstyles.base.absoluteFull,
          center && {
            left: horizontalPosition,
            right: horizontalPosition
          }
        ]}
        activeOpacity={1}
        onPress={this.onClose}
      >
        <View />
      </TouchableOpacity>
    )
  }

  renderAnimationContent = () => {
    const { center } = this.props

    if (center) {
      return (
        <UniversalScreenContainer isFull>
          <View style={[csstyles.base.fullCenter, csstyles.base.row, csstyles.base.relative]}>
            {this.renderBgTouchable()}
            {this.renderContent()}
          </View>
        </UniversalScreenContainer>
      )
    }

    return (
      <>
        {this.renderBgTouchable()}
        <Animated.View
          style={[
            styles.animationView,
            {
              bottom: this.animateValue
            }
          ]}
        >
          {this.renderContent()}
        </Animated.View>
      </>
    )
  }

  render() {
    const { isOpen, center } = this.props

    return (
      <Modal
        visible={isOpen}
        animationType={center ? 'fade' : 'none'}
        onRequestClose={this.onClose}
        transparent
      >
        <View style={styles.modalWrapper}>{this.renderAnimationContent()}</View>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  modalWrapper: {
    flex: 1,
    position: 'relative',
    backgroundColor: csstyles.mixin.csBlackOpacity(0.8)
  },
  actionBtnContainer: {
    ...csstyles.base.rowCenterLineBetween,
    paddingTop: csstyles.vars.csBoxSpacing,
    paddingBottom: csstyles.vars.csBoxSpacingHalf,
    paddingHorizontal: csstyles.vars.csBoxSpacing2x
  },
  contentContainer: {
    width: '100%',
    overflow: 'hidden',
    backgroundColor: csstyles.vars.csWhite,
    borderColor: csstyles.vars.csGreen,
    borderWidth: csstyles.vars.csBoxBorderWidth,
    borderBottomColor: csstyles.vars.csWhite,
    borderTopLeftRadius: csstyles.vars.csBoxBorderRadius,
    borderTopRightRadius: csstyles.vars.csBoxBorderRadius,
    paddingBottom: DEVICE_BOTTOM_SAFE
  },
  contentContainerCenter: {
    borderBottomColor: csstyles.vars.csGreen,
    borderBottomLeftRadius: csstyles.vars.csBoxBorderRadius,
    borderBottomRightRadius: csstyles.vars.csBoxBorderRadius,
    paddingTop: csstyles.vars.csBoxSpacing
  },
  actionBtnContainerCenter: {
    paddingTop: 0,
    paddingBottom: 0
  },
  animationView: {
    position: 'absolute',
    left: 0,
    right: 0
  }
})

export default DialCodePicker
