import React, { createContext,useState, useContext } from "react";
import * as firebase from "firebase";
import { View, StyleSheet,Dimensions,TouchableOpacity,Text,Image } from "react-native";
import { Button } from "react-native-elements";
import Input from "../components/Input";



const SCREENWIDTH = Dimensions.get('window').width;
const SCREENHEIGHT = Dimensions.get('window').height;



const LoginScreen = () => {
  
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
//   const [username, setUsername] = useState(null);
  const [error, setError] = useState("");
  console.log(`email=${email}`);
  console.log(`password=${password}`);
//   console.log(`username=${username}`);
  const onSignIn = async () => {
    setError(" ");
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      
    } catch (err1) {
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        setEmail("");
        setPassword("");
        // setUsername("");
        setError("");
        
      } catch (err2) {
        alert(err2.message);
      }
    }
  };
  const onPressButton=() =>{
    alert(err2)
  }

  return (
    <View>
        <Image
        source={require('../images/background.png')}
        style={styles.background}
        /> 
        
        <View style={styles.login}>
            <Text style={styles.title}>登入</Text>
            <Image
                source={require('../images/logo.png')}
                style={styles.logo}
            />
        </View>
        <View style={styles.formStyle}>
            <Input
                style={styles.inputdistance}
                label="Email"
                placeholder="Email"
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                value={email}
                onChangeText={(email) => setEmail(email)}
            />
            <View style={{marginTop: 29}}>
            <Input
                label="Password"
                placeholder="Password"
                secureTextEntry
                autoCorrect={false}
                autoCapitalize="none"
                value={password}
                onChangeText={(password) => setPassword(password)}
            />
            </View>
            {/* <View style={{marginTop: 29}}>
                <Input
                    label="username"
                    placeholder="Username"
                    autoCorrect={false}
                    autoCapitalize="none"
                    value={username}
                    onChangeText={(username) => setUsername(username)}
                />
            </View> */}
            {/* <TouchableOpacity style={styles.button} onPress={onSignIn}>
                <Text style={styles.buttonword}>登入</Text>
                <Image
                    source={require('../images/loginarrow.png')}
                    style={styles.loginarrow}
                />
                
            </TouchableOpacity> */}
            <TouchableOpacity style={styles.buttontest} onPress={onSignIn}>
                <Text style={styles.buttonword}>登入</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    formStyle: {
        marginTop: 190,
        zIndex:3,
        display:'flex',
        alignItems:'center',
        
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
    // buttontest:{
    //     backgroundColor:'#5E6B7B',
    //     width:95,
    //     height:43,
    //     borderRadius:5,
    //     position:'absolute',
    //     top:250,
    //     left:232,
    //     flexDirection:'row',
    //     alignItems:'center',
    //     zIndex:3,
    // },
    buttonword:{
         textAlign:'center',
         color:'white',
         fontSize:16,
         marginLeft:25,
    },
    login:{
         flexDirection:'row',
         position:'absolute',
         top:70,
         alignSelf:'center'
    },
    loginarrow:{
         width:24,
         height:24, 
    },
    title:{
         fontSize:48,
         color:'white',
         left:120,
         display:'flex',
         alignItems:'center',
    },
    logo:{
         width:65,
         height:65,
         marginLeft:170,
    },
});

export default LoginScreen;