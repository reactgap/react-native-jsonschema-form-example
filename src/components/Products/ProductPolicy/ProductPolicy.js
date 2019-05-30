import React, { PureComponent } from 'react'
import { View, StyleSheet, ScrollView, WebView, ActivityIndicator } from 'react-native'
import Markdown from 'react-native-markdown-renderer';
import csstyles from '../../../csstyles';

const copy = `# h1 Heading 8-)
| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |
# h1 Heading 8-)
`;

type Props = {

}

type State = {

}

class ProductReport extends PureComponent<Props, State> {

  activityIndicatorLoadingView = () => {
    //making a view to show to while loading the webpage
    return (
      <ActivityIndicator
        color={csstyles.vars.csGreen}
        size="small"
        style={styles.activityIndicatorStyle}
      />
    )
  }

  render() {
    const { url } = this.props
    return (
      <View style={styles.screen}>
        <View style={csstyles.border.shadowView}/>
        <WebView
          source={{uri: url}}
          style={{marginTop: 0, justifyContent: 'center', alignItems: 'center', flex:1}}
          renderLoading={this.activityIndicatorLoadingView}
          startInLoadingState={true}  
        />
        {/* <ScrollView style={csstyles.base.full}>
          <View style={styles.markdown}>
              <Markdown>
                {copy}
              </Markdown>
          </View>
        </ScrollView> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  screen: {
    position: 'absolute',
    top: 0,
    ...csstyles.base.full,
    backgroundColor: csstyles.vars.csWhite
  },
  markdown: {
    ...csstyles.base.full,
    ...csstyles.base.markdown
  },
  activityIndicatorStyle: {
    justifyContent: 'center', 
    alignItems: 'center',
    flex: 1
  },
})
export default ProductReport