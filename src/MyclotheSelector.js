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
const TypeSelector = () => {
  const [FirstBoxPosition, setFirstBoxPosition] = useState("left");
  const toggleFirstBox = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    setFirstBoxPosition(FirstBoxPosition === "left" ? "right" : "left");
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
                    <TouchableOpacity onPress={toggleFirstBox}>
                      <View style={{flexDirection:'row',alignSelf:"flex-end"}}>
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
  
  button1word1:{
    color:'#FCF4E9',
    fontSize:16,
    marginTop:8,
  },
  button1word2:{
    color:'#FCF4E9',
    fontSize:16,
    marginLeft:55,
    marginTop:8,
  },
  button1word3:{
    color:'#FCF4E9',
    fontSize:16,
    marginLeft:55,
    marginTop:8,
  },
  button1word4:{
    color:'#FCF4E9',
    fontSize:16,
    marginLeft:55,
    marginTop:8,
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


