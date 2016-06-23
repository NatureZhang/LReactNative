/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

var MOCKED_MOVIES_DATA = [
  {title: '标题', year: '2015', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}},
];

class AwesomeProject extends Component {

// 展现了一个图片
imageView(){

  return (
    <Image
    style={[{height: 360, width: 200, backgroundColor: 'red'}]}
    source={{uri: 'file:///Users/zhangdong/Desktop/苏州行/留园/IMG_1354.jpg'}} />
  )
}

// 展现了一个电影 如果有多个控件需要给定一个父视图 如这里的<View></View>标签
// ???? 是什么让这些控件换行的
movieView(){
  var movie = MOCKED_MOVIES_DATA[0];
  return(
    <View>
    <Text>{movie.title}</Text>
    <Text>{movie.year}</Text>
    <Image
    style={[{height:53, width:81, backgroundColor:'yellow'}]}
    source={{uri:movie.posters.thumbnail}}
    />
    </View>
  )
}

  render() {
    return (
      <View style={styles.container}>
      {this.movieView()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    justifyContent: 'center',
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

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
