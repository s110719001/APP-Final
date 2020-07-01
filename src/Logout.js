import React, { createContext,useState, useContext } from "react";
import * as firebase from "firebase";
import { View, StyleSheet,Dimensions,TouchableOpacity,Text,Image } from "react-native";
import { Button } from "react-native-elements";
import Input from "../components/Input";
import Header from './Header';
import { StoreContext} from '../src/stores';
const SCREENWIDTH = Dimensions.get('window').width;
const SCREENHEIGHT = Dimensions.get('window').height;



const LoginScreen = ({navigation}) => {
  const { isLoginState } = useContext(StoreContext);
  const [isLogin, setIsLogin] = isLoginState;
  return (
    <View>
        
        <Text style={styles.bigtitle}>個人</Text>
        <Header></Header>
        <Image
        source={require('../images/background.png')}
        style={styles.background}
        /> 
        
        <View style={styles.login}>
            <Image
            source={require('../images/pericon.png')}
            style={styles.pericon}
            />
            <Text style={styles.title}>asdfghj</Text>
            <TouchableOpacity style={styles.buttontest} onPress={() => {navigation.navigate('Login'),setIsLogin(false)}} >
                <Text style={styles.buttonword}>登出</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.formStyle}>
            <Text style={styles.word1}>我分享的搭配</Text>
            <Text style={styles.word2}>還沒分享過喔</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    formStyle: {
        marginTop: 210,
        zIndex:3,
        display:'flex',
        
        
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
        position:'absolute',
        zIndex:-1,
        marginTop:SCREENHEIGHT*0.0575,
    },
    inputmargin:{
    },
    button:{
        backgroundColor:'#5E6B7B',
        width:95,
        height:43,
        borderRadius:5,
        position:'absolute',
        top:250,
        left:232,
        flexDirection:'row',
        alignItems:'center',
        zIndex:3,
    },
     buttontest:{
         backgroundColor:'#5E6B7B',
         width:70,
         height:43,
         borderRadius:5,
         justifyContent:"center",
         zIndex:3,
         marginTop:50,
         marginLeft:100
     },
    buttonword:{
         textAlign:'center',
         color:'white',
         fontSize:16,
         textAlignVertical:"center",
    },
    login:{
         flexDirection:'row',
         position:'absolute',
         top:40,
         alignSelf:'center',
         marginTop:30,
    },
    loginarrow:{
         width:24,
         height:24, 
    },
    title:{
         fontSize:25,
         color:'white',
         alignSelf:"center",
         marginTop:38,
         marginLeft:15
    },
    logo:{
        alignSelf:'flex-end',
         width:65,
         height:65,
         marginLeft:80,
    },
    pericon:{
        width:50,
        height:50,
        alignSelf:'center',
        marginTop:47,
        
    },
    word1:{
        fontSize:25,
        color:'#fff',
        top:10,
        left:50
    },
    word2:{
        fontSize:16,
        color:'#fff',
        alignSelf:"center",
        top:200,
    },
});

export default LoginScreen;