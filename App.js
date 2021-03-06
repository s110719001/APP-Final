import React,{createContext, useState} from 'react';
import * as firebase from "firebase";
import { StyleSheet, Text, View, Dimensions, Image, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MyStack from './src/MyStack'
import MyStackhome from './src/MyStackhome';

import MyStackLogin from './src/MyStackLogin';


const SCREENWIDTH = Dimensions.get('window').width;
const SCREENHEIGHT = Dimensions.get('window').height;
const Tab = createBottomTabNavigator();
const firebaseConfig = {
  apiKey: "AIzaSyA7ibSfgPFFtzt7Z7dvAq6Ew9h8Fcfx1LE",
  authDomain: "clothes-23443.firebaseapp.com",
  databaseURL: "https://clothes-23443.firebaseio.com",
  projectId: "clothes-23443",
  storageBucket: "clothes-23443.appspot.com",
  messagingSenderId: "603012724012",
  appId: "1:603012724012:web:a2e8bcd358ca5ff215e889",
  measurementId: "G-NFSC117SM8"
};


export default function App() {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  
  return (
    <NavigationContainer>
      <Tab.Navigator 
       tabBarOptions={{
         style:styles.tabbar,
         tabStyle:{borderWidth:0,marginBottom:5},
         activeTintColor:'#B4CCFA',
         inactiveTintColor:'#FCF4E9',
       }}
      >
        <Tab.Screen name="首頁" component={MyStackhome} 
        options={props => {
          return{
            tabBarIcon:() => {
              if(props.navigation.isFocused() === false){
              return(
              <Image
              source={require('./images/tab/home.png')}
              style={styles.tabicon1}
              />
              )}else{
              return(
                <Image
                source={require('./images/tab/activehome.png')}
                style={styles.tabicon1}
                />)
              }
            }
          };
        }}/>
        <Tab.Screen name="衣櫃" component={MyStack} 
        options={props => {
          return{
            tabBarVisible: !props.route.state || props.route.state.index === 0,
            tabBarIcon:() => {
              if(props.navigation.isFocused() === false){
              return(
              <Image
              source={require('./images/tab/clothet.png')}
              style={styles.tabicon1}
              />
              )}else{
              return(
                <Image
                source={require('./images/tab/activeclothet.png')}
                style={styles.tabicon1}
                />)
              }
            }
          };
        }}/>
        <Tab.Screen name="社群" component={MyStackLogin} 
        options={props => {
          return{
            
            tabBarIcon:() => {
              if(props.navigation.isFocused() === false){
              return(
              <Image
              source={require('./images/tab/community.png')}
              style={styles.tabicon1}
              />
              )}else{
              return(
                <Image
                source={require('./images/tab/activecommunity.png')}
                style={styles.tabicon1}
                />)
              }
            }
        }}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  tabbar:{
    backgroundColor:'#333333',
    borderWidth:0,
    borderTopColor:'#3B3B3B',
    borderTopWidth:1,
    color:'#FCF4E9',
    height:60,
  },
  tabicon1:{
    width:20,
    height:20,
    resizeMode:'stretch',
  },
});