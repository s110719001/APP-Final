import React, { useState } from 'react';
import { LayoutAnimation,StyleSheet, Text, View, Dimensions, Image, Picker, TouchableOpacity, AsyncStorage } from 'react-native';
import ActionButton from 'react-native-action-button';
import ModalDropdown from 'react-native-modal-dropdown';
import Header from './Header';
import Changebutton from './Changebutton';
import Weather from './Weather';

const Btn1press = ({btn1press,btn2press,btn3press}) => {
    return(
        btn1press = true,
        btn2press = false,
        btn3press = false
    );
}
const Btn2press = ({btn1press,btn2press,btn3press}) => {
    return(
        btn1press = false,
        btn2press = true,
        btn3press = false
    );
}
const Btn3press = ({btn1press,btn2press,btn3press}) => {
    return(
        btn1press = false,
        btn2press = false,
        btn3press = true
    );
}

const SCREENWIDTH = Dimensions.get('window').width;
const SCREENHEIGHT = Dimensions.get('window').height;

const TodaysOutfit = ({route,navigation}) => {
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

    const [selectedValue, setSelectedValue] = useState(route.params);
    return (
      <View style={styles.container}>
        <Text style={styles.bigtitle}>首頁</Text>
        <Header></Header>
        <Image
        source={require('../images/background.png')}
        style={styles.background}
        />
        <Weather></Weather>
        <View style={styles.index1}>
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
        <View style={styles.words}>
                <Text style={styles.word1}>我今天要</Text>
                <View style={styles.container1}>
                <View style={styles.bar}></View>
            <Picker
            mode={'dropdown'}
            itemStyle={{color:"#5674AC"}}
            selectedValue={selectedValue}
            style={{ height: 50, width: 130,top:-55}}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                <Picker.Item label="重要活動" value={1} />
                <Picker.Item label="工作" value={2} />
                <Picker.Item label="上課" value={3} />
                <Picker.Item label="休閒" value={4} />
                <Picker.Item label="運動" value={5} />
            </Picker>
            </View>
                
                <Text style={styles.word2}>運勢</Text>
                <Text style={{fontSize:18,color:'#5674AC',marginLeft:11,marginTop:-3,marginRight:50,fontWeight:'bold'}}>吉</Text>
            </View>
            <Image
            source={require('../images/clothexample/outfit1.png')}
            style={styles.outfit}
            />
        </View>
        <Changebutton></Changebutton>
      </View>
    );
  };

  export default TodaysOutfit;

  const styles = StyleSheet.create({
    container1: {
        flex: 1,
        paddingTop: 40,
        alignItems: "center",
        justifyContent:'center'
      },
    container: {
        flex: 1,
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
        zIndex:0,
        marginTop:SCREENHEIGHT*0.0575,
    },
    index1:{
        backgroundColor:"white",
        width:SCREENWIDTH*0.91467,
        height:SCREENHEIGHT*0.6573,
        position:'absolute',
        top:SCREENHEIGHT*0.2443, 
        alignSelf:'center',
        borderRadius:20,
    },
    dropdown:{
        marginLeft:20,
        marginBottom:5,
        width:62,
    },
    dropdowntext:{
        color:'#4F4F4F',
        fontSize:18,
    },
    dropdwonicon:{
        width:10,
        height:9,
        marginTop:9,
        marginLeft:16,
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
    titlebar:{
        position:'absolute',
        width:90,
        height:0,
        borderRadius:6,
        borderColor:"#5674AC",
        borderWidth:4,
        alignSelf:'center',
        top:-4,
    },
    titles:{
        flexDirection:'row',
        alignSelf:'center',
        marginTop:-28,
        marginLeft:26
    },
    title1:{
        fontSize:18,
        color:'white',
        marginRight:30,
        
        
    },
    title11:{
        fontSize:20,
        color:'white',
        marginRight:30,
        
        
    },
    title2:{
        fontSize:18,
        color:'white',
        marginTop:-2,
        
    },
    title22:{
        fontSize:20,
        color:'white',
        marginTop:-2,
        
    },
    title3:{
        fontSize:18,
        color:'white',
        marginLeft:30,
        
    },
    title33:{
        fontSize:20,
        color:'white',
        marginLeft:30,
        
    },
    words:{
        flexDirection:'row',
        alignContent:'center',
        marginTop:22,
    },
    word1:{ 
        fontSize:16,
        marginTop:1,
        marginLeft:50,
    },
    word2:{
        fontSize:16,
        marginLeft:0,
    },
    button:{
        width:80,
        height:43,
        borderRadius:10,
        backgroundColor:'#5E6B7B',
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        top:SCREENHEIGHT*0.814,
        right:SCREENWIDTH*0.072,
    },
    buttontitle:{
        fontSize:16,
        color:'white',
    },
    outfit:{
        width:240,
        height:431,
        alignSelf:'center',
        marginTop:-50,
        resizeMode:'stretch',
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
      activedot2:{
        width:6,
        height:6,
        backgroundColor:"#FCF4E9",
        borderRadius:50,
        marginRight:29,
        marginTop:2,
        opacity:1,
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
