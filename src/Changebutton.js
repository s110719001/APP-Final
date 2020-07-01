import React, { useState } from "react";
import { LayoutAnimation, Platform, StyleSheet, Text, TouchableOpacity, UIManager, View, Button, Image } from "react-native";
import { DangerZone } from "expo";
import SwiperTop from './Swipetop';
import SwipeBottom from './Swipebottom';

const TypeSelector = ({navigation}) => {
  const [FirstBoxPosition, setFirstBoxPosition] = useState("left");
  const toggleFirstBox = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setFirstBoxPosition(FirstBoxPosition === "left" ? "right" : "left");};

    const [Button1Position, setButton1Position] = useState("left");
  const toggleButton1 = () => {
    setButton1Position(Button1Position === "right" ? "right" : "right");
    setButton2Position(Button2Position === "left" ? "left" : "left");
    setButton3Position(Button3Position === "left" ? "left" : "left");
    setButton4Position(Button4Position === "left" ? "left" : "left");
    setButton5Position(Button5Position === "left" ? "left" : "left");
  };
  const [Button2Position, setButton2Position] = useState("left");
  const toggleButton2 = () => {
    setButton1Position(Button1Position === "left" ? "left" : "left");
    setButton2Position(Button2Position === "right" ? "right" : "right");
    setButton3Position(Button3Position === "left" ? "left" : "left");
    setButton4Position(Button4Position === "left" ? "left" : "left");
    setButton5Position(Button5Position === "left" ? "left" : "left");
  };
  const [Button3Position, setButton3Position] = useState("left");
  const toggleButton3 = () => {
    setButton1Position(Button1Position === "left" ? "left" : "left");
    setButton2Position(Button2Position === "left" ? "left" : "left");
    setButton3Position(Button3Position === "right" ? "right" : "right");
    setButton4Position(Button4Position === "left" ? "left" : "left");
    setButton5Position(Button5Position === "left" ? "left" : "left");
  };
  const [Button4Position, setButton4Position] = useState("left");
  const toggleButton4 = () => {
    setButton1Position(Button1Position === "left" ? "left" : "left");
    setButton2Position(Button2Position === "left" ? "left" : "left");
    setButton3Position(Button3Position === "left" ? "left" : "left");
    setButton4Position(Button4Position === "right" ? "right" : "right");
    setButton5Position(Button5Position === "left" ? "left" : "left");
  };
  const [Button5Position, setButton5Position] = useState("left");
  const toggleButton5 = () => {
    setButton1Position(Button1Position === "left" ? "left" : "left");
    setButton2Position(Button2Position === "left" ? "left" : "left");
    setButton3Position(Button3Position === "left" ? "left" : "left");
    setButton4Position(Button4Position === "left" ? "left" : "left");
    setButton5Position(Button5Position === "right" ? "right" : "right");
  };
  return (
        <View style={styles.container}>
            <View style={[styles.buttonContainer1]}>
                <TouchableOpacity
                 onPress={toggleFirstBox}>
                        <Text style={styles.button1word1}>自己搭</Text>
                </TouchableOpacity>
            </View>
            <View style={[styles.box1,FirstBoxPosition === "left" ? null : styles.moveRight1]}>
                <View style={styles.content1}>
                    <Text style={styles.word}>這件衣服更適合</Text>
                    <TouchableOpacity style={styles.button1} onPress={toggleButton1}>
                        <Text style={[styles.word1,Button1Position === "left" ? null : styles.word22]}>重要活動</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button2} onPress={toggleButton2}>
                        <Text style={[styles.word2,Button2Position === "left" ? null : styles.word22]}>工作</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button3} onPress={toggleButton3}>
                        <Text style={[styles.word3,Button3Position === "left" ? null : styles.word22]}>上課</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button4} onPress={toggleButton4}>
                        <Text style={[styles.word4,Button4Position === "left" ? null : styles.word22]}>休閒</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button5} onPress={toggleButton5}>
                        <Text style={[styles.word5,Button5Position === "left" ? null : styles.word22]}>運動</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button6} onPress={() => navigation.navigate("MyClothet")}>
                        <Text style={styles.word6}>確定</Text>
                    </TouchableOpacity>
                    
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
    top:-214,
    left:73,
    alignSelf:"center",
    
  },
  before1:{
    alignItems:'center',
    width:80,
    height:43,
    borderRadius:10,
    backgroundColor:'#5E6B7B',
    marginTop:22,
    justifyContent:"center",
  },
  after1:{
    justifyContent:'center',
    width:76,
    height:40,
    borderRadius:10,
    backgroundColor:'#FCF4E9',
    
  },
  
  button1word1:{
    width:80,
    height:43,
    backgroundColor:"#5E6B7B",
    color:'#FCF4E9',
    fontSize:16,
    borderRadius:10,
    textAlign:"center",
    textAlignVertical:"center",
  },
  box1: {
    height: 465,
    width: 180,
    borderRadius: 10,
    margin: 8,
    marginTop:10,
    backgroundColor: "white",
    opacity:0,
    left:35,
  },
  content1:{
    alignSelf:'center',
    marginTop:30,
  },
  word:{
    color:"#616161",
    fontSize:16,
    marginTop:-15,
  },
  botton1:{
    
  },
  botton2:{

  },
  botton3:{

  },
  botton4:{

  },
  botton5:{

  },
  botton6:{
    alignSelf:"flex-end",
  },
  word1:{
    color:"#FCF4E9",
    backgroundColor:"#5E6B7B",
    width:122,
    height:40,
    textAlign:"center",
    textAlignVertical:"center",
    borderRadius:10,
    marginTop:16,
  },
  word2:{
    color:"#FCF4E9",
    backgroundColor:"#5E6B7B",
    width:122,
    height:40,
    textAlign:"center",
    textAlignVertical:"center",
    borderRadius:10,
    marginTop:16,
  },
  word22:{
    backgroundColor:"#5674AC",
  },
  word3:{
    color:"#FCF4E9",
    backgroundColor:"#5E6B7B",
    width:122,
    height:40,
    textAlign:"center",
    textAlignVertical:"center",
    borderRadius:10,
    marginTop:16,
  },
  word4:{
    color:"#FCF4E9",
    backgroundColor:"#5E6B7B",
    width:122,
    height:40,
    textAlign:"center",
    textAlignVertical:"center",
    borderRadius:10,
    marginTop:16,
  },
  word5:{
    color:"#FCF4E9",
    backgroundColor:"#5E6B7B",
    width:122,
    height:40,
    textAlign:"center",
    textAlignVertical:"center",
    borderRadius:10,
    marginTop:16,
  },
  word6:{
    color:"#FCF4E9",
    backgroundColor:"#5674AC",
    width:76,
    height:40,
    textAlign:"center",
    textAlignVertical:"center",
    borderRadius:10,
    marginTop:20,
    alignSelf:"flex-end",
  },
  moveRight1: {
    top:-371,
    opacity:1,
    zIndex:6,
    left:37
  },
  buttonContainer1: {
    alignSelf: "flex-end",
    top:20,
  },
  moveRight2:{
    alignSelf:"flex-end",
  },
});


