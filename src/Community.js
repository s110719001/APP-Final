import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Image, Picker, TouchableOpacity, AsyncStorage, ScrollView } from 'react-native';
import ActionButton from 'react-native-action-button';
import ModalDropdown from 'react-native-modal-dropdown';
import Header from './Header';
import Changebutton from './Changebutton';


const SCREENWIDTH = Dimensions.get('window').width;
const SCREENHEIGHT = Dimensions.get('window').height;

const Community = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.bigtitle}>社群</Text>
        <Header></Header>
        <Image
        source={require('../images/background.png')}
        style={styles.background}
        />
        
        <ScrollView style={{position:'absolute',top:103,alignSelf:'center',flex:1}}>
        <View style={{}}>
            
            <View style={{flexDirection:'row'}}>
                <View style={{flexDirection:'column',marginRight:25}}>
                    <Image
                    source={require('../images/community/outfit2.png')}
                    style={styles.outfit2}
                    />
                    <Image
                    source={require('../images/community/outfit3.png')}
                    style={styles.outfit3}
                    />
                </View>
                <Image
                source={require('../images/community/outfit1.png')}
                style={styles.outfit1}
                />
            </View>
            <View style={{flexDirection:'row'}}>
            <Image
            source={require('../images/community/outfit11.png')}
            style={styles.outfit111}
            />
            <Image
            source={require('../images/community/outfit11.png')}
            style={styles.outfit11}
            />
            <Image
            source={require('../images/community/outfit11.png')}
            style={styles.outfit11}
            />
            </View>
            
        </View>
        </ScrollView>
        <TouchableOpacity>
            <Image
            source={require('../images/community/plusbtn.png')}
            style={styles.plusbtn}
            />
        </TouchableOpacity>
      </View>
    );
  };

  export default Community;

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
    outfit1:{
        width:230,
        height:550,
        resizeMode:'stretch',
    },
    outfit2:{
        width:112,
        height:274,
        resizeMode:'stretch',
    },
    outfit3:{
        width:112,
        height:274,
        resizeMode:'stretch', 
        marginTop:10,
    },
    outfit11:{
        width:130,
        height:294,
        resizeMode:'stretch', 
        marginTop:10, 
        marginLeft:-4,
    },
    outfit111:{
        width:130,
        height:294,
        resizeMode:'stretch', 
        marginTop:10, 
        marginLeft:-13,
    },
    plusbtn:{
        width:55,
        height:55,
        position:'absolute',
        top:-163,
        alignSelf:'flex-end',
        right:20,
        resizeMode:"stretch",
    },
  });
