import React, { useState }  from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';

const SCREENWIDTH = Dimensions.get('window').width;
const SCREENHEIGHT = Dimensions.get('window').height;
export var uri = 'https://upload.cc/i1/2020/06/30/iLOYWr.png';

const Addcloth = ({route,navigation}) => {
  
    var photouri = route.params;
    global.uri = route.params;
    
    return (
      <View style={styles.container}>
        
        <Image
          source={{uri:route.params}}
          style={{width:200,height:200,zIndex:5}}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('MyClothet',photouri)}
        >
          <Text style={styles.buttonword}>確認儲存</Text>
        </TouchableOpacity>
        
      </View>
    );
  };
  export default Addcloth;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems:"center",
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
        color:'white',
        
      },
  });
