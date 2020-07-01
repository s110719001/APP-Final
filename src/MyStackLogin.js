import React, { useState, useContext }  from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import Community from './Community';
import Logout from './Logout';
import { StoreContext,StoreProvider } from './stores';
const SCREENWIDTH = Dimensions.get('window').width;
const SCREENHEIGHT = Dimensions.get('window').height;

const Stack = createStackNavigator();

const MyStackLogin = () => {
  const { isLoginState } = useContext(StoreContext);
  const [ isLogin, setIsLogin] = isLoginState;
    return isLogin ? (
      
      <Stack.Navigator>
        <Stack.Screen name="Community" component={Community} 
        options={{
            headerShown:false
        }}
        />
        <Stack.Screen name="Logout" component={Logout} 
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
    
    ) : (
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} 
        options={{
            headerShown:false
        }}
        />
        <Stack.Screen name="Logout" component={Logout} 
        options={{
            headerShown:false
        }}
        />
      </Stack.Navigator>
      
      );
  };
  export default () => {
    return(
      <StoreProvider>
        <MyStackLogin></MyStackLogin>
      </StoreProvider>
    );
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
    },
  });
