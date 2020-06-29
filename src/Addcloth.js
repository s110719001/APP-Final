import React, { useState }  from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';

const SCREENWIDTH = Dimensions.get('window').width;
const SCREENHEIGHT = Dimensions.get('window').height;

const Addcloth = ({route,navigation}) => {
    return (
      <View style={styles.container}>
        <View style={{height:500,}}>

        </View>
        <Image
          source={{uri:route.params}}
          style={{width:200,height:200,position:'absolute',top:200,left:60,zIndex:5}}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.pop(1)}
        >
          <Text style={styles.buttonword}>Press Here</Text>
        </TouchableOpacity>
        
      </View>
    );
  };
  export default Addcloth;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      
    },
    button:{
        
        
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center',
        width:SCREENWIDTH*0.336,
        height:SCREENHEIGHT*0.053,
        borderRadius:10,
        backgroundColor:"#5E6B7B",
      },
      buttonword:{
        fontSize:16,
        color:'black',
        
      },
  });
