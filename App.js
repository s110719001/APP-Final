import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ask from './src/Ask'
import MyClothet from './src/MyClothet'
import AddCloth from './src/Addcloth'
import Hint from './src/Hint'
import Leaderboard from './src/Leaderboard';
import MyStack from './src/MyStack'
import MyStackhome from './src/MyStackhome';
import Header from './src/Header';
import Changebutton from './src/Changebutton';
import Login from './src/Login';
import MyStackaddcloth from './src/MyStackaddcloth';
import MyclothSelector from './src/MyclotheSelector';
import SwiperTop from './src/Swipetop'
import Camera from './src/Camera';
import Expand from './src/Expandedcontent';

const SCREENWIDTH = Dimensions.get('window').width;
const SCREENHEIGHT = Dimensions.get('window').height;
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="首頁" component={MyStackhome} />
        <Tab.Screen name="衣櫃" component={MyStack} 
        options={props => {
          return{
            tabBarVisible: !props.route.state || props.route.state.index === 0,
          };
        }}/>
        <Tab.Screen name="社群" component={AddCloth} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },

});