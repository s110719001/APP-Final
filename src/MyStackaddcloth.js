import React, { useState }  from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import AddCloth from './Addcloth';
import Camera from './Camera'

const SCREENWIDTH = Dimensions.get('window').width;
const SCREENHEIGHT = Dimensions.get('window').height;

const Stack = createStackNavigator();

const MyStackaddcloth = () => {
    return (
      <Stack.Navigator initialRouteName='Camera'>
        <Stack.Screen name="Camera" component={Camera} 
        options={{
            headerShown:false
        }}
        />
        <Stack.Screen name="AddCloth" component={AddCloth} 
        options={{
            headerShown:false
        }}
        />
      </Stack.Navigator>
    );
  };
  export default MyStackaddcloth;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
    },
  });
