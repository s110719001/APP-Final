import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/Home'
import MyClothet from './src/MyClothet'
import AddCloth from './src/Addcloth'
import Hint from './src/Hint'
import Leaderboard from './src/Leaderboard';
import MyStack from './src/MyStack'
import MyStackhome from './src/MyStackhome';
import Header from './src/Header';
import Changebutton from './src/Changebutton';
import Login from './src/Login';
import Camera from './src/Camera';

const SCREENWIDTH = Dimensions.get('window').width;
const SCREENHEIGHT = Dimensions.get('window').height;
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Camera></Camera>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },

});
