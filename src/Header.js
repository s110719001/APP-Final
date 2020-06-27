import React, { useState }  from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';

const SCREENWIDTH = Dimensions.get('window').width;
const SCREENHEIGHT = Dimensions.get('window').height;

const Header = () => {
    return (
      <View style={styles.container}>
        <View style={{flexDirection:'row'}}>
            <TouchableOpacity
            style={styles.button}
            onPress={function(){console.log('按到了!')}}
            >
                <Image
                source={require('../images/person.png')}
                style={styles.icon}
                />
            </TouchableOpacity>
       </View>
      </View>
    );
  };
  export default Header;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#333333',
      width:SCREENWIDTH,
      height:SCREENHEIGHT*0.1083,
      position:'absolute',
      top:0,
      zIndex:4,
    },
    button:{
        position:'absolute',
        right:15,
        top:38,
    },
    icon:{
        width:30,
        height:30,
    },
    title:{
        fontSize:17,
        color:'white',
        fontWeight:'bold',
        alignSelf:'center',
    },
  });
