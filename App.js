import React from 'react';
import { 
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet, 
  Text, 
  View 
} from 'react-native';

import uuidv1 from 'uuid/v1';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  _add = () => {
    const state = this.state;

    const id = uuidv1();

    this.setState({
      ...state,
      data: [
        { id: id, text: id  },
        ...state.data
      ]
    });
  }

  _renderItem({item}) {
    console.log(`Render: ${item.text}`);

    return (
      <View>
        <Text>{item.text}</Text>
      </View>
    );
  }

  _keyExtractor = (item, index) => item.id;

  render() {
    return (
      <SafeAreaView style={styles.container}>

         <FlatList 
          data={this.state.data}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          />

        <Button
          onPress={this._add}
          title="Add more" />
        
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});