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
const [SecondBoxPosition, setSecondBoxPosition] = useState("left");
const toggleSecondBox = () => {
  LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
  setSecondBoxPosition(SecondBoxPosition === "left" ? "right" : "left");
};
const [ThirdBoxPosition, setThirdBoxPosition] = useState("left");
  const toggleThirdBox = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    setThirdBoxPosition(ThirdBoxPosition === "left" ? "right" : "left");
};

  return (
      <View>
    <View style={{flexDirection:'row'}}>
        <View style={styles.container}>
            <View style={[styles.buttonContainer1,SecondBoxPosition === "left" ? null : styles.buttonContainer11]}>
                <TouchableOpacity style={[styles.before1,FirstBoxPosition === "left" ? null : styles.after1]} onPress={toggleFirstBox}><Text style={[styles.titlebefore1,FirstBoxPosition === "left" ? null : styles.titleafter1]}>上衣</Text></TouchableOpacity>
            </View>
            <View style={[styles.box1,FirstBoxPosition === "left" ? null : styles.moveRight1]}>
                <View style={styles.content1}>
                    <TouchableOpacity onPress={toggleFirstBox}>
                        <Text style={styles.button1word1}>短袖</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={toggleFirstBox}>
                        <Text style={styles.button1word2}>長袖</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>



            <View style={[styles.buttonContainer2,FirstBoxPosition === "left" ? null : styles.buttonContainer22,SecondBoxPosition !== "right" ? null : styles.buttonContainer222,ThirdBoxPosition !== "right" ? null : styles.buttonContainer2222]}>
                <TouchableOpacity style={[styles.before2,SecondBoxPosition === "left" ? null : styles.after2]} onPress={toggleSecondBox}><Text style={[styles.titlebefore2,SecondBoxPosition === "left" ? null : styles.titleafter2]}>下身</Text></TouchableOpacity>
            </View>
            <View style={[styles.box2,SecondBoxPosition === "left" ? null : styles.moveRight2]}>
                <View style={styles.content2}>
                    <TouchableOpacity onPress={toggleSecondBox}>
                        <Text style={styles.button2word1}>短褲</Text>
                        <Text style={styles.button2word11}>短裙</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={toggleSecondBox}>
                        <Text style={styles.button2word2}>長褲</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={toggleSecondBox}>
                        <Text style={styles.button2word3}>長裙</Text>
                        <Text style={styles.button2word33}>寬褲</Text>
                    </TouchableOpacity>
                </View>
            </View>



            <View style={[styles.buttonContainer3,SecondBoxPosition === "right" ? null : styles.buttonContainer33,,ThirdBoxPosition !== "right" ? null : styles.buttonContainer333]}>
                <TouchableOpacity style={[styles.before3,ThirdBoxPosition === "left" ? null : styles.after3]} onPress={toggleThirdBox}><Text style={[styles.titlebefore3,ThirdBoxPosition === "left" ? null : styles.titleafter3]}>外套</Text></TouchableOpacity>
            </View>
            <View style={[styles.box3,ThirdBoxPosition === "left" ? null : styles.moveRight3]}>
                <View style={styles.content3}>
                    <TouchableOpacity onPress={toggleThirdBox}>
                        <Text style={styles.button3word1}>厚</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={toggleThirdBox}>
                        <Text style={styles.button3word2}>薄</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={toggleThirdBox}>
                        <Text style={styles.button3word3}>毛衣</Text>
                    </TouchableOpacity>
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
    left:100,
    marginTop:14,
  },
  before1:{
    justifyContent:'center',
    width:57,
    height:45,
    borderRadius:7,
    backgroundColor:'#333333',
    marginRight:100
  },
  after1:{
    justifyContent:'center',
    width:57,
    height:45,
    borderRadius:7,
    backgroundColor:'#FCF4E9',
    
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
    color:'#232E3B',
    fontSize:12,
  },
  button1word2:{
    color:'#232E3B',
    fontSize:12,
    marginLeft:24,
  },
  box1: {
    height: 45,
    width: 120,
    borderRadius: 5,
    margin: 8,
    marginTop:-45,
    backgroundColor: "#FFFDF9",
    right:45,
    opacity:0,
  },
  content1:{
    flexDirection:'row',
    alignSelf:'center',
    marginTop:10,
  },
  moveRight1: {
    left:39,
    opacity:1,
  },
  buttonContainer1: {
    alignSelf: "center",
    zIndex:6,
    
  },
  buttonContainer11: {
    alignSelf: "center",
    zIndex:6,
    right:10,
  },




  

  before2:{
    justifyContent:'center',
    width:57,
    height:45,
    borderRadius:7,
    backgroundColor:'#333333',
    marginRight:100,
    
  },
  after2:{
    justifyContent:'center',
    width:57,
    height:45,
    borderRadius:7,
    backgroundColor:'#FCF4E9',
    left:0,
  },
  titlebefore2:{
    color:'#FCF4E9',
    fontSize:16,
    textAlign:'center'
  },
  titleafter2:{
    color:'#232E3B',
    fontSize:16,
    textAlign:'center'
  },
  
  button2word1:{
    color:'#232E3B',
    fontSize:12,
    marginTop:-6,
  },
  button2word11:{
    color:'#232E3B',
    fontSize:12,
  },
  button2word2:{
    color:'#232E3B',
    fontSize:12,
    marginLeft:24,
  },
  button2word3:{
    color:'#232E3B',
    fontSize:12,
    marginLeft:24,
    marginTop:-6,
  },
  button2word33:{
    color:'#232E3B',
    fontSize:12,
    marginLeft:24,
  },
  box2: {
    height: 45,
    width: 167,
    borderRadius: 5,
    margin: 8,
    marginTop:14,
    right:150,
    backgroundColor: "#FFFDF9",
    opacity:0,
    zIndex:5,
  },
  content2:{
    flexDirection:'row',
    alignSelf:'center',
    marginTop:10,
  },
  moveRight2: {
    top:0,
    right:107,
    opacity:1,
  },
  buttonContainer2: {
    alignSelf: "center",
    zIndex:6,
    top:3,
    left:50,
  },
  buttonContainer22: {
    alignSelf: "center",
    zIndex:6,
    top:3,
    left:110,
  },
  buttonContainer222: {
    alignSelf: "center",
    zIndex:6,
    top:3,
    left:10,
  },
  buttonContainer2222: {
    alignSelf: "center",
    zIndex:6,
    top:3,
    left:-10,
  },






  before3:{
    justifyContent:'center',
    width:57,
    height:45,
    borderRadius:7,
    backgroundColor:'#333333',
    marginRight:100
  },
  after3:{
    justifyContent:'center',
    width:57,
    height:45,
    borderRadius:7,
    backgroundColor:'#FCF4E9',
    
  },
  titlebefore3:{
    color:'#FCF4E9',
    fontSize:16,
    textAlign:'center'
  },
  titleafter3:{
    color:'#232E3B',
    fontSize:16,
    textAlign:'center'
  },
  
  button3word1:{
    color:'#232E3B',
    fontSize:14,
  },
  button3word2:{
    color:'#232E3B',
    fontSize:14,
    marginLeft:24,
  },
  button3word3:{
    color:'#232E3B',
    fontSize:14,
    marginLeft:24,
  },
  box3: {
    height: 45,
    width: 148,
    borderRadius: 5,
    margin: 8,
    marginTop:-45,
    backgroundColor: "#FFFDF9",
    opacity:0,
    top:59,
    left:-364,
  },
  content3:{
    flexDirection:'row',
    alignSelf:'center',
    marginTop:10,
  },
  moveRight3: {
    
    left:-455,
    opacity:1,
  },
  buttonContainer3: {
    alignSelf: "center",
    zIndex:6,
    top:3,
    left:-74,
  },
  buttonContainer33: {
    alignSelf: "center",
    zIndex:6,
    left:-184,
  },
  buttonContainer333: {
    alignSelf: "center",
    zIndex:6,
    left:-154,
  },
});


