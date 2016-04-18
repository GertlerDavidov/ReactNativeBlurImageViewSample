/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import BlurImageView from 'react-native-blur-image-view';

class BlurImageViewTest extends Component {

  render() {
    let imageData = 'http://img1.gtimg.com/tech/pics/hv1/44/22/2054/133567004.jpg';

    return (
      <View style={styles.container}>
        <BlurImageView style={styles.image}
                           imageUrl={imageData}
                       radius={1}
                       sampling={50}
          />
        <Text style={styles.welcome}>
          Herbert, Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image:{
    width:400,
    height:200,
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('BlurImageViewTest', () => BlurImageViewTest);
