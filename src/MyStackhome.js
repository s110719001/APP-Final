import React, { useState }  from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import TodaysOutfit from './Todaysoutfit';
import Home from './Home'

const SCREENWIDTH = Dimensions.get('window').width;
const SCREENHEIGHT = Dimensions.get('window').height;

const Stack = createStackNavigator();

const MyStackhome = () => {
    return (
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="TodaysOutfit" component={TodaysOutfit} 
        options={{
            headerShown:false
        }}
        />
        <Stack.Screen name="Home" component={Home} 
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
