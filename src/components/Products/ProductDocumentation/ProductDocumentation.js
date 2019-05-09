// @flow

import React, { PureComponent } from 'react'
import { View,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
  ScrollView,
  Text } from 'react-native'
import ListGroupItem from '../../ListGroup/Item/ListGroupItem'
import csstyles from '../../../csstyles'
import Markdown from 'react-native-markdown-renderer';

type Props = {

}
const copy = `# h1 Heading 8-)

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |
# h1 Heading 8-)

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |
# h1 Heading 8-)

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |`

class ProductDocumentation extends PureComponent<Props> {
  render() {
    return (
      <View style={styles.screen}>
       <ScrollView style={csstyles.base.full}>
          <View style={styles.markdown}>
            <Markdown>
              {copy}
            </Markdown>
          </View>
        </ScrollView>
        <ListGroupItem title={'Detail Product Documentation'} type="download" onPress={() => {}} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  screen: {
    ...csstyles.base.full,
    backgroundColor: csstyles.vars.csWhite
  },
  markdown: {
    ...csstyles.base.full,
    ...csstyles.base.markdown
  }
})

export default ProductDocumentation
