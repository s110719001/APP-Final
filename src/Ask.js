import React, { useState }  from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';

import Header from './Header';

const SCREENWIDTH = Dimensions.get('window').width;
const SCREENHEIGHT = Dimensions.get('window').height;

const Ask = ({navigation}) => {
  const [bottn1state, setbottn1state] = useState(false);
const [bottn2state, setbottn2state] = useState(true);
const [bottn3state, setbottn3state] = useState(false);
const togglebottn1 = () => {
    setbottn1state(bottn1state === true ? true : true);
    setbottn2state(bottn2state === false ? false : false);
    setbottn3state(bottn3state === false ? false : false);
};
const togglebottn2 = () => {
  setbottn1state(bottn1state === false ? false : false);
  setbottn2state(bottn2state === true ? true : true);
  setbottn3state(bottn3state === false ? false : false);
};
const togglebottn3 = () => {
  setbottn1state(bottn1state === false ? false : false);
  setbottn2state(bottn2state === false ? false : false);
  setbottn3state(bottn3state === true ? true : true);
};
  return (
    <View style={styles.container}>
      <Text style={styles.bigtitle}>首頁</Text>
      <Header></Header>
      <Image
      source={require('../images/background.png')}
      style={styles.background}
      />
      
      <View style={styles.index}>
      <View style={styles.titles}>
                <TouchableOpacity style={{alignItems:'center'}} onPress={togglebottn1}>
                  <Text style={[styles.activebutton1word1,bottn1state === true ? null : styles.button1word1]}>昨日</Text>
                  <View style={[styles.activebar1,bottn1state === true ? null : styles.bar1]}></View>
                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:'center'}} onPress={togglebottn2}>
                  <Text style={[styles.activebutton1word2,bottn2state === true ? null : styles.button1word2]}>今日搭配</Text>
                  <View style={[styles.activebar2,bottn2state === true ? null : styles.bar2]}></View>
                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:'center'}} onPress={togglebottn3}>
                  <Text style={[styles.activebutton1word3,bottn3state === true ? null : styles.button1word3]}>明日</Text>
                  <View style={[styles.activebar3,bottn3state === true ? null : styles.bar3]}></View>
                </TouchableOpacity>
            </View>
        <Text style={styles.todayswork}>今日的活動預定</Text>
        <View>
            <TouchableOpacity style={styles.buttons} onPress={function(){console.log('重要活動'),navigation.navigate('TodaysOutfit',1)}}>
                <Text style={styles.buttontitle}>重要活動</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons} onPress={function(){console.log('工作'),navigation.navigate('TodaysOutfit',2)}}>
                <Text style={styles.buttontitle}>工作</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons} onPress={function(){console.log('上課'),navigation.navigate('TodaysOutfit',3)}}>
                <Text style={styles.buttontitle}>上課</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons} onPress={function(){console.log('休閒'),navigation.navigate('TodaysOutfit',4)}}>
                <Text style={styles.buttontitle}>休閒</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons} onPress={function(){console.log('運動'),navigation.navigate('TodaysOutfit',5)}}>
                <Text style={styles.buttontitle}>運動</Text>
            </TouchableOpacity>
        </View>
      </View>
      
    </View>
  );
}

export default Ask;

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
  bar1:{
    width:44,
    borderWidth:2.5,
    height:0,
    borderColor:'#B4CCFA',
    opacity:0,
    borderRadius:5,
    
},
bar2:{
    width:110,
    borderWidth:2.5,
    height:0,
    borderColor:'#B4CCFA',
    opacity:0,
    borderRadius:5,
    
},
bar3:{
    width:44,
    borderWidth:2.5,
    height:0,
    borderColor:'#B4CCFA',
    opacity:0,
    borderRadius:5,
    
},
activebar1:{
    width:44,
    height:9,
    backgroundColor:'#5674AC',
    opacity:0.91,
    borderRadius:50,
    marginTop:-8,
    zIndex:3,
    marginLeft:-30
},
activebar2:{
    width:86,
    height:9,
    backgroundColor:'#5674AC',
    opacity:0.91,
    borderRadius:50,
    marginTop:-8,
    zIndex:3,
    marginLeft:1.5,
},
activebar3:{
    width:44,
    height:9,
    backgroundColor:'#5674AC',
    opacity:0.91,
    borderRadius:50,
    marginTop:-8,
    zIndex:3,
},
titles:{
  flexDirection:'row',
  alignSelf:'center',
  marginTop:-28,
  marginLeft:26
},
button1word1:{
  color:'#FFFFFF',
  fontSize:18,
  marginTop:8,
  opacity:0.72,
  marginRight:29,
},
button1word2:{
  color:'#FFFFFF',
  fontSize:18,
  marginLeft:29,
  marginRight:29,
  marginTop:8,
  opacity:0.72,
},
button1word3:{
  color:'#FFFFFF',
  fontSize:18,
  marginLeft:29,
  marginRight:29,
  marginTop:8,
  opacity:0.72,
},

activebutton1word1:{
  color:'#FFFFFF',
  fontSize:20,
  marginTop:5,
  marginRight:29,
  opacity:1,
  zIndex:6,
  
},
activebutton1word2:{
  color:'#FFFFFF',
  fontSize:20,
  marginTop:5,
  marginLeft:29,
  marginRight:29,
  opacity:1,
  zIndex:6,
},
activebutton1word3:{
  color:'#FFFFFF',
  fontSize:20,
  marginTop:5,
  marginLeft:29,
  marginRight:29,
  opacity:1,
  zIndex:6,
},
});
