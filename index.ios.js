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

// 这个在class外层就行，在class内就不行，为什么？？？
var MOCKED_MOVIES_DATA = [
  {title: '标题', year: '2015', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}},
];

/*

*/

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
// 这是一个上下布局
movieView(){
  var movie = MOCKED_MOVIES_DATA[0];
  return(
    <View>
    <Text>{movie.title}</Text>
    <Text>{movie.year}</Text>
    <Image
    style={styles.thumbnail}
    source={{uri:movie.posters.thumbnail}}
    />
    </View>
  )
}

movieViewRow(){
    var movie = MOCKED_MOVIES_DATA[0];
    return(
      <View>
      <Image
      style={styles.thumbnail}
      source={{uri:movie.posters.thumbnail}}
      />

      <View style={styles.rightContainer}>
      <Text style={styles.title}>{movie.title}</Text>
      <Text style={styles.year}>{movie.year}</Text>
      </View>

      </View>
    )
}

/*
如果整个项目完全采用React，那么界面上就只有一个组件根节点；如果局部使用React，那么每个局部使用的部分都有一个根节点。在render时，
根节点由React.render函数去触发，而所有子节点都是铜鼓父节点的render方法去构造的。

每个组件都会有一个render方法，这个方法，返回组件的实例，最终整个界面得到一个虚拟DOM树，再由React以高效的方式展现在界面上。


*/
  render() {

    // return内不能写注释
    return (
      <View style={styles.container}>
      {this.movieViewRow()}
      </View>
    );
  }
}

/*
JSX中使用样式和真实的样式也很类似，通过 style属性 来定义，但和真实DOM不同的是，属性值不能是字符串而必须是对象

<div style={{color: '#ff0000', fontSize: '14px'}}>Hello World.</div>

里面的大括号是js对象表达式，外面的大括号是JSX的语法。
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: '#F5FCFF',
    justifyContent: 'center',
    alignItems:'center',
  },
  rightContainer:{
    // flex:1,
    backgroundColor:'red',
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
  thumbnail:{
    width:53,
    height:81,
    backgroundColor:'gray',
  },
  title:{
    fontSize:20,
    marginBottom:8,
    textAlign:'center',
  },
  year:{
    textAlign:'center',
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
