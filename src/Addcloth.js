import React, { useState }  from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';

const SCREENWIDTH = Dimensions.get('window').width;
const SCREENHEIGHT = Dimensions.get('window').height;

const Addcloth = () => {
    return (
      <View style={styles.container}>
        <View style={{height:500,}}>

        </View>
        
        <TouchableOpacity
          style={styles.button}
          onPress={function(){console.log('按到了!')}}
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
