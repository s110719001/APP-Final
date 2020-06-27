import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';

import Header from './Header';

const SCREENWIDTH = Dimensions.get('window').width;
const SCREENHEIGHT = Dimensions.get('window').height;

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.bigtitle}>首頁</Text>
      <Header></Header>
      <Image
      source={require('../images/background.png')}
      style={styles.background}
      />
      <View>
      </View>
      <View style={styles.index}>
        <Text style={styles.todayswork}>今日的活動預定</Text>
        <View>
            <TouchableOpacity style={styles.buttons} onPress={function(){console.log('重要活動'),navigation.navigate('TodaysOutfit')}}>
                <Text style={styles.buttontitle}>重要活動</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons} onPress={function(){console.log('工作'),navigation.navigate('TodaysOutfit')}}>
                <Text style={styles.buttontitle}>工作</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons} onPress={function(){console.log('上課'),navigation.navigate('TodaysOutfit')}}>
                <Text style={styles.buttontitle}>上課</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons} onPress={function(){console.log('休閒'),navigation.navigate('TodaysOutfit')}}>
                <Text style={styles.buttontitle}>休閒</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons} onPress={function(){console.log('運動'),navigation.navigate('TodaysOutfit')}}>
                <Text style={styles.buttontitle}>運動</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
  },
  bigtitle:{
    fontSize:18,
    color:'white',
    fontWeight:'bold',
    position:'absolute',
    top:40,
    alignSelf:'center',
    zIndex:5,
},
  background: {
    width:SCREENWIDTH,
    height:SCREENHEIGHT,
    marginTop:SCREENHEIGHT*0.0575,
  },
  index:{
    backgroundColor:"white",
    width:SCREENWIDTH*0.91467,
    height:SCREENHEIGHT*0.6573,
    position:'absolute',
    top:SCREENHEIGHT*0.2443,
    alignSelf:'center',
    borderRadius:20,
  },
  todayswork:{
    alignSelf:'center',
    fontSize:22,
    marginTop:SCREENHEIGHT*0.06884
  },
  buttons:{
    alignSelf:'center',
    backgroundColor:'#5E6B7B',
    width:SCREENWIDTH*0.3253,
    height:SCREENHEIGHT*0.0530,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
    marginTop:32,
  },
  buttontitle:{
    fontSize:17,
    color:'white',
  },
});
