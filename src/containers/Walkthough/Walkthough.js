// @flow

import React, { PureComponent } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import csstyles from '../../csstyles'
import CSButton from '../../components/Button/CSButton/CSButton'
import walkthoughTexts from '../../../assets/locales/walkthough.json'
import ViewPager from '../../components/ViewPager/ViewPager'
import { DEVICE_SCREEN_WIDTH, IS_DEVICE_SHORT_HEIGHT, switchDevice, DEVICE_TOP_SAFE } from '../../utils/deviceHelper'
import Photo from '../../components/Photo/Photo'
import { currLanguage, i18nTranslator } from '../../utils/i18n'
// import { type ScreenNavigationProps } from '../../types'
import UniversalScreenContainer from '../../components/UniversalScreenContainer/UniversalScreenContainer';

const WalkthoughPage = (page: { title: string, description: string, photoURL: string }) => (
  <View style={styles.walkthoughPage}>
    <View style={{ backgroundColor: csstyles.vars.csGreenDeep }}>
      <Photo
        url={page.photoURL}
        wrapStyle={styles.walkthoughWrap}
        photoStyle={styles.walkthoughPhoto}
      />
    </View>
    <View style={styles.contentContainer}>
      <Text style={styles.walkthoughTitle}>{page.title}</Text>
      <Text style={styles.walkthoughDesc}>{page.description}</Text>
    </View>
  </View>
)

type State = {
  currentIndex: number
}

type Props = {}
const language = 'en'
class Walkthough extends PureComponent<Props, State> {
  state: State = {
    currentIndex: 0
  }

  renderPagination = () => {
    const { currentIndex } = this.state
    const details = walkthoughTexts[language]
    return (
      <View style={styles.paginationContainer}>
        {details.map((page, index) => (
          <FontAwesome
            key={`pagination-${index}`}
            name="circle"
            size={10}
            color={index === currentIndex ? csstyles.vars.csGreen : csstyles.vars.csLight}
            style={{
              marginRight: index !== details.length - 1 ? csstyles.vars.csBoxSpacing : 0
            }}
          />
        ))}
      </View>
    )
  }

  render() {
    const { navigation } = this.props
    const pages = walkthoughTexts[language].map((page, index) => ({
      key: index,
      component: WalkthoughPage,
      props: page,
      containerStyle: {}
    }))

    return (
      <View style={styles.screen}>
        <ViewPager
          wrapperStyle={csstyles.base.full}
          pages={pages}
          width={DEVICE_SCREEN_WIDTH}
          onPageChange={currentIndex => this.setState({
            currentIndex
          })
          }
        />
        {this.renderPagination()}
        <View style={styles.btnsGroup}>
          <UniversalScreenContainer>
            <CSButton
              title={i18nTranslator('JOIN_MOMI')}
              type="primaryDark"
              onPress={() => navigation.push('PhoneRegister')}
            />
          </UniversalScreenContainer>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  screen: {
    ...csstyles.base.fullBottomSafe,
    backgroundColor: csstyles.vars.csGreenLight
  },
  btnsGroup: {
    padding: csstyles.vars.csBoxSpacing2x
  },
  walkthoughPage: {
    flex: 1,
    paddingBottom: 0
  },
  walkthoughWrap: {
    marginTop: DEVICE_TOP_SAFE,
    width: DEVICE_SCREEN_WIDTH,
    height: DEVICE_SCREEN_WIDTH,
    overflow: 'hidden'
  },
  walkthoughTitle: {
    ...csstyles.text.bold,
    color: csstyles.vars.csWhite,
    textAlign: 'center',
    marginBottom: csstyles.vars.csBoxSpacing,
    fontSize: 21
  },
  walkthoughDesc: {
    ...csstyles.text.regular,
    color: csstyles.vars.csLight,
    textAlign: 'center',
    fontSize: 18
  },
  walkthoughPhoto: {
    overflow: 'hidden'
  },
  paginationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  contentContainer: {
    ...csstyles.base.fullCenter,
    paddingHorizontal: csstyles.vars.csBoxSpacing2x,
    // backgroundColor: 'red'
  }
})

export default Walkthough
