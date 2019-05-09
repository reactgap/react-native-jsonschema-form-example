import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
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

const ProductPolicy = (descriptions: String) => {
  return (
    <View style={styles.screen}>
      <ScrollView style={csstyles.base.full}>
        <View style={styles.markdown}>
            <Markdown>
              {copy}
            </Markdown>
        </View>
      </ScrollView>
    </View>
  )
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

})
export default ProductPolicy