import React, { useState }  from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import TodaysOutfit from './Todaysoutfit';
import Ask from './Ask'
import Logout from './Logout';
import Login from './Login';
import MyClothet from './MyClothet';

const SCREENWIDTH = Dimensions.get('window').width;
const SCREENHEIGHT = Dimensions.get('window').height;

const Stack = createStackNavigator();

const MyStackhome = () => {
    return (
      <Stack.Navigator initialRouteName='Ask'>
        <Stack.Screen name="TodaysOutfit" component={TodaysOutfit} 
        options={{
            headerShown:false
        }}
        />
        <Stack.Screen name="Ask" component={Ask} 
        options={{
            headerShown:false
        }}
        />
        <Stack.Screen name="MyClothet" component={MyClothet} 
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
    );
  };
  export default MyStackhome;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
    },
  });
