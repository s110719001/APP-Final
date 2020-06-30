import React, { useState, useContext }  from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Login,{ StoreContext, StoreProvider } from './Login';
import Community from './Community';

const SCREENWIDTH = Dimensions.get('window').width;
const SCREENHEIGHT = Dimensions.get('window').height;

const Stack = createStackNavigator();

const MyStackleader = () => {
    
    return (
    
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Community" component={Community} 
        options={{
            headerShown:false
        }}
        />
        <Stack.Screen name="Login" component={Login} 
        options={{
            headerShown:false
        }}
        />
      </Stack.Navigator>
    
    );
  };
  export default MyStackleader;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
    },
  });
