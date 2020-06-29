import React, { useState } from "react";
import { LayoutAnimation, Platform, StyleSheet, Text, TouchableOpacity, UIManager, View, Button } from "react-native";
import { DangerZone } from "expo";

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
    <View style={styles.container}>
        <View style={styles.buttonContainer1}>
            <TouchableOpacity style={[styles.before,FirstBoxPosition === "left" ? null : styles.after]} onPress={toggleFirstBox}><Text style={[styles.titlebefore,FirstBoxPosition === "left" ? null : styles.titleafter]}>上衣</Text></TouchableOpacity>
        </View>
        <View style={[styles.box1,FirstBoxPosition === "left" ? null : styles.moveRight1]}>
            <View style={styles.content1}>
                <TouchableOpacity onPress={toggleFirstBox}>
                    <Text style={styles.buttonword1}>短袖</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={toggleFirstBox}>
                    <Text style={styles.buttonword2}>長袖</Text>
                </TouchableOpacity>
            </View>
        </View>

    </View>
  );
};

export default TypeSelector;

const styles = StyleSheet.create({
  tile: {
    borderWidth: 0.5,
    borderColor: "#d6d7da"
  },
  before:{
    justifyContent:'center',
    width:57,
    height:45,
    borderRadius:7,
    backgroundColor:'#333333',
  },
  after:{
    justifyContent:'center',
    width:57,
    height:45,
    borderRadius:7,
    backgroundColor:'#FCF4E9',
    marginRight:0,
  },
  titlebefore:{
    color:'#FCF4E9',
    fontSize:16,
    textAlign:'center'
  },
  titleafter:{
    color:'#232E3B',
    fontSize:16,
    textAlign:'center'
  },
  container: {
    flex: 1,
    justifyContent: "center",
    left:65,
    overflow: "hidden",
    marginTop:14,
  },
  buttonword1:{
    color:'#232E3B',
    fontSize:14,
  },
  buttonword2:{
    color:'#232E3B',
    fontSize:14,
    marginLeft:24,
  },
  box1: {
    height: 45,
    width: 120,
    borderRadius: 5,
    margin: 8,
    marginTop:-45,
    backgroundColor: "#FFFDF9",
    opacity:0,
  },
  content1:{
    flexDirection:'row',
    alignSelf:'center',
    marginTop:10,
  },
  moveRight1: {
    position:'absolute',
    right:60,
    opacity:1,
  },
  buttonContainer1: {
    alignSelf: "center",
    zIndex:6,
  },
});


