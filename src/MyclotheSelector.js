import React, { useState } from "react";
import { LayoutAnimation, Platform, StyleSheet, Text, TouchableOpacity, UIManager, View, Button, Image } from "react-native";
import { DangerZone } from "expo";
import SwiperTop from './Swipetop';
import SwipeBottom from './Swipebottom';

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}
const TypeSelector = ({navigation }) => {
  const [FirstBoxPosition, setFirstBoxPosition] = useState("left");
  const toggleFirstBox = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setFirstBoxPosition(FirstBoxPosition === "left" ? "right" : "left");
};
const [bottn1state, setbottn1state] = useState(true);
const [bottn2state, setbottn2state] = useState(false);
const [bottn3state, setbottn3state] = useState(false);
const [bottn4state, setbottn4state] = useState(false);
const togglebottn1 = () => {
    setbottn1state(bottn1state === true ? true : true);
    setbottn2state(bottn2state === false ? false : false);
    setbottn3state(bottn3state === false ? false : false);
    setbottn4state(bottn4state === false ? false : false);
};
const togglebottn2 = () => {
  setbottn1state(bottn1state === false ? false : false);
  setbottn2state(bottn2state === true ? true : true);
  setbottn3state(bottn3state === false ? false : false);
  setbottn4state(bottn4state === false ? false : false);
};
const togglebottn3 = () => {
  setbottn1state(bottn1state === false ? false : false);
  setbottn2state(bottn2state === false ? false : false);
  setbottn3state(bottn3state === true ? true : true);
  setbottn4state(bottn4state === false ? false : false);
};
const togglebottn4 = () => {
  setbottn1state(bottn1state === false ? false : false);
  setbottn2state(bottn2state === false ? false : false);
  setbottn3state(bottn3state === false ? false : false);
  setbottn4state(bottn4state === true ? true : true);
};
  return (
    <View style={{flexDirection:'row'}}>
        <View style={styles.container}>
            <View style={[styles.buttonContainer1,FirstBoxPosition === "left" ? null : styles.buttonContainer11]}>
                <TouchableOpacity
                 style={[styles.before1,FirstBoxPosition === "left" ? null : styles.after1]}
                 onPress={toggleFirstBox}>
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.button1word1}>上衣</Text>
                        <Text style={styles.button1word2}>下身</Text>
                        <Text style={styles.button1word3}>外套</Text>
                        <Text style={styles.button1word4}>搭配</Text>
                        <Image
                        source={require('../images/plusbtn.png')}
                        style={styles.plusbtn}
                        />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={[styles.box1,FirstBoxPosition === "left" ? null : styles.moveRight1]}>
                <View style={styles.content1}>
                  
                      <View style={{flexDirection:'row',alignSelf:"flex-end"}}>
                        <TouchableOpacity style={{alignItems:'center'}} onPress={togglebottn1}>
                          <Text style={[styles.activebutton1word1,bottn1state === true ? null : styles.button1word1]}>上衣</Text>
                          <View style={[styles.activedot1,bottn1state === true ? null : styles.dot]}></View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{alignItems:'center'}} onPress={togglebottn2}>
                          <Text style={[styles.activebutton1word2,bottn2state === true ? null : styles.button1word2]}>下身</Text>
                          <View style={[styles.activedot,bottn2state === true ? null : styles.dot]}></View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{alignItems:'center'}} onPress={togglebottn3}>
                          <Text style={[styles.activebutton1word3,bottn3state === true ? null : styles.button1word3]}>外套</Text>
                          <View style={[styles.activedot,bottn3state === true ? null : styles.dot]}></View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{alignItems:'center'}} onPress={togglebottn4}>
                          <Text style={[styles.activebutton1word4,bottn4state === true ? null : styles.button1word4]}>搭配</Text>
                          <View style={[styles.activedot4,bottn4state === true ? null : styles.dot]}></View>
                        </TouchableOpacity>
                          <TouchableOpacity onPress={function(){navigation.navigate('Camera',navigation,toggleFirstBox())}}>
                          <Image
                          source={require('../images/plusbtn.png')}
                          style={styles.plusbtn}
                          />
                          </TouchableOpacity>
                      </View>
                      
                    <SwiperTop></SwiperTop>
                    <SwipeBottom></SwipeBottom>
                </View>
            </View>
        </View>
    </View>  
  );
};

export default TypeSelector;

const styles = StyleSheet.create({
container: {
    justifyContent: "center",
    marginTop:14,
    top:0,
    
  },
  before1:{
    alignItems:'flex-end',
    width:410,
    height:93,
    borderRadius:20,
    backgroundColor:'#333333',
    marginTop:22,
  },
  after1:{
    justifyContent:'center',
    width:57,
    height:45,
    borderRadius:7,
    backgroundColor:'#FCF4E9',
    right:120,
  },
  addcloth:{
    width:405,
  },
  titlebefore1:{
    color:'#FCF4E9',
    fontSize:16,
    textAlign:'center'
  },
  titleafter1:{
    color:'#232E3B',
    fontSize:16,
    textAlign:'center'
  },
  dot:{
    width:6,
    height:6,
    backgroundColor:"#FCF4E9",
    borderRadius:50,
    
    marginTop:2,
    opacity:0,
  },
  activedot:{
    width:6,
    height:6,
    backgroundColor:"#FCF4E9",
    borderRadius:50,
    
    marginTop:2,
    opacity:1,
  },
  activedot1:{
    width:6,
    height:6,
    backgroundColor:"#FCF4E9",
    borderRadius:50,
    marginRight:29,
    marginTop:2,
    opacity:1,
  },
  activedot4:{
    width:6,
    height:6,
    backgroundColor:"#FCF4E9",
    borderRadius:50,
    marginLeft:29,
    marginTop:2,
    opacity:1,
  },
  
  button1word1:{
    color:'#FCF4E9',
    fontSize:16,
    marginTop:8,
    opacity:0.72,
    marginRight:29,
  },
  button1word2:{
    color:'#FCF4E9',
    fontSize:16,
    marginLeft:29,
    marginRight:29,
    marginTop:8,
    opacity:0.72,
  },
  button1word3:{
    color:'#FCF4E9',
    fontSize:16,
    marginLeft:29,
    marginRight:29,
    marginTop:8,
    opacity:0.72,
  },
  button1word4:{
    color:'#FCF4E9',
    fontSize:16,
    marginLeft:29,
    marginTop:8,
    opacity:0.72,
  },

  activebutton1word1:{
    color:'#FCF4E9',
    fontSize:16,
    marginTop:8,
    opacity:1,
    marginRight:29,
  },
  activebutton1word2:{
    color:'#FCF4E9',
    fontSize:16,
    marginLeft:29,
    marginRight:29,
    marginTop:8,
    opacity:1,
  },
  activebutton1word3:{
    color:'#FCF4E9',
    fontSize:16,
    marginLeft:29,
    marginRight:29,
    marginTop:8,
    opacity:1,
  },
  activebutton1word4:{
    color:'#FCF4E9',
    fontSize:16,
    marginLeft:29,
    
    marginTop:8,
    opacity:1,
  },

  plusbtn:{
    marginLeft:32,
    width:50,
    height:38,
    resizeMode:'stretch',
  },
  box1: {
    height: 628,
    width: 415,
    borderRadius: 17,
    margin: 8,
    marginTop:-45,
    backgroundColor: "#333333",
    right:45,
    opacity:0,
  },
  content1:{
    alignSelf:'flex-end',
    marginTop:0,
    
  },
  moveRight1: {
    top:-500,
    left:-10,
    opacity:1,
    zIndex:6,
  },
  buttonContainer1: {
    alignSelf: "center",
    zIndex:6,
    left:-11
  },
  buttonContainer11: {
    alignSelf: "center",
    zIndex:6,
    right:10,
  },
});


