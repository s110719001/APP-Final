import React, { useState }  from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';

import Header from './Header';

const SCREENWIDTH = Dimensions.get('window').width;
const SCREENHEIGHT = Dimensions.get('window').height;

const Leaderboard = ({navigation}) => {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
        <TouchableOpacity style={styles.headerbtn} onPress={() => navigation.pop(1)}>
          <Image
          source={require('../images/backarrow.png')}
          style={styles.backarrow}
          />
          <Text style={styles.backword}>我的衣櫃</Text>
        </TouchableOpacity>
        <Text style={styles.bigtitle}>排行</Text>
        </View>
        <Header></Header>
        <Image
        source={require('../images/background.png')}
        style={styles.background}
        />
          <View style={styles.selectword}>
            <TouchableOpacity>
                <Text style={styles.word1}>上衣</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.word4}>下身</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.word4}>外套</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.word4}>搭配</Text>
            </TouchableOpacity>
          </View>
          <Image
          source={require('../images/crown.png')}
          style={styles.crown}
          />
          <View style={{backgroundColor:'white',borderRadius:19,width:240,height:374,alignSelf:'center',position:'absolute',top:214}}>
          </View>
          <Text style={styles.rateword}>穿搭頻率</Text>
          <Image
          source={require('../images/rate.png')}
          style={{width:223,height:116,position:'absolute',bottom:29,alignSelf:'center'}}
          />
      </View>
    );
  };

  export default Leaderboard;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
    },
    header:{
      flexDirection:'row',
      position:'absolute',
      top:40,
      zIndex:5,
    },
    headerbtn:{
      flexDirection:'row',
      marginTop:1.5,
    },
    backarrow:{
      width:26,
      height:26,
    },
    backword:{
      fontSize:17,
      color:'white',
      marginRight:SCREENWIDTH*0.2293,
    },
    bigtitle:{
      fontSize:18,
      color:'white',
      fontWeight:'bold',
  },
    background:{
      width:SCREENWIDTH, 
      height:SCREENHEIGHT,
      marginTop:SCREENHEIGHT*0.12,
    },
    selectword:{
      flexDirection:'row',
      position:'absolute',
      alignSelf:'center',
      top:106,
    },
      word1:{
        fontSize:16,
        color:'#FCF4E9',
      }, 
      word2:{
        fontSize:16,
      },
      word3:{
        fontSize:16,
      },
      word4:{
        fontSize:16,
        color:'#FCF4E9',
        marginLeft:47,
      },
      crown:{
        position:'absolute',
        top:SCREENHEIGHT*0.206,
        alignSelf:'center',
        width:SCREENWIDTH*0.1493,
        height:SCREENHEIGHT*0.04375,
      },
      rateword:{
        fontSize:16,
        alignSelf:'center',
        color:'white',
        position:'absolute',
        top:SCREENHEIGHT*0.7798,
      },
  });
