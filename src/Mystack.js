import React, { useState }  from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import MyClothet from './MyClothet';
import Hint from './Hint';
import Leaderboard from './Leaderboard';
import Camera from './Camera';
import AddCloth from './Addcloth';

const SCREENWIDTH = Dimensions.get('window').width;
const SCREENHEIGHT = Dimensions.get('window').height;

const Stack = createStackNavigator();

const MyStack = () => {
    return (
      <Stack.Navigator initialRouteName='MyClothet'>
        <Stack.Screen name="MyClothet" component={MyClothet} 
        options={{
            headerShown:false
        }}
        />
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
        <Stack.Screen name="Hint" component={Hint} 
        options={{
            headerShown:false
        }}
        />
        <Stack.Screen name="Leaderboard" component={Leaderboard} 
        options={{
            headerShown:false
        }}
        />
      </Stack.Navigator>
    );
  };
  export default MyStack;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
    },
  });
