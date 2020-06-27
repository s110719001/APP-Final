import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, AsyncStorage } from 'react-native';
import ActionButton from 'react-native-action-button';
import ModalDropdown from 'react-native-modal-dropdown';
import Header from './Header';
import Changebutton from './Changebutton';

const SCREENWIDTH = Dimensions.get('window').width;
const SCREENHEIGHT = Dimensions.get('window').height;

const TodaysOutfit = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.bigtitle}>首頁</Text>
        <Header></Header>
        <Image
        source={require('../images/background.png')}
        style={styles.background}
        />
        <View style={styles.index1}>
            <View style={styles.titles}>
                <Text style={styles.title1}>昨日</Text>
                <Text style={styles.title2}>今日搭配</Text>
                <Text style={styles.title3}>明日</Text> 
            </View>
            <View style={styles.words}>
                <Text style={styles.word1}>我今天要</Text>
                <ModalDropdown style={styles.dropdown} textStyle={styles.dropdowntext} options={['重要','工作','上課','休閒','運動']}>
                    <View style={styles.bar}></View>
                    <View style={{flexDirection:'row',marginTop:-23}}>
                    <Text style={{fontSize:18}}>上課</Text>
                    <Image
                        source={require('../images/dropdown.png')}
                        style={styles.dropdwonicon}
                    /></View>
                </ModalDropdown>
                
                <Text style={styles.word2}>運勢</Text>
                <Text style={{fontSize:18,color:'#5674AC',marginLeft:11,marginTop:-3,fontWeight:'bold'}}>吉</Text>
            </View>
        </View>
        <Changebutton></Changebutton>
      </View>
    );
  };

  export default TodaysOutfit;

  const styles = StyleSheet.create({
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
    bar:{
        width:70,
        borderWidth:2.5,
        height:0,
        borderColor:'#B4CCFA',
        opacity:0.91,
        borderRadius:5,
        marginTop:15,
        marginLeft:-5,
    },
    titles:{
        flexDirection:'row',
    },
    title1:{
        
    },
    title2:{

    },
    title3:{

    },
    words:{
        flexDirection:'row',
        alignSelf:'center',
        marginTop:22,
    },
    word1:{ 
        fontSize:16,
    },
    word2:{
        fontSize:16,
        marginLeft:27,
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
  });
