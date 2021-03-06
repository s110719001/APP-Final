import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native';
import Hint from './Hint';
import Header from './Header';
import Expand from './Expandedcontent';
import MyclothetSelector from './MyclotheSelector';
import uri from './Addcloth';

const SCREENWIDTH = Dimensions.get('window').width;
const SCREENHEIGHT = Dimensions.get('window').height;

function MyClothet({route,navigation}){
  global.uri,global.sta === true ? null : global.uri='https://upload.cc/i1/2020/06/30/iLOYWr.png'
  var photouri = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.bigtitle}>我的衣櫃</Text>
      <Header></Header>
      <Image
      source={require('../images/background.png')}
      style={styles.background}
      />
      <TouchableOpacity style={styles.leaderbutton} onPress={() => navigation.navigate('Leaderboard',navigation)}>
        <Text style={styles.leaderword}>排行</Text>
        <Image
        source={require('../images/leaderboard.png')}
        style={styles.leaderboard}
        />
      </TouchableOpacity>
      <Expand></Expand>
      <View style={styles.index1}>
        <Image
        source={require('../images/whiteback.png')}
        style={styles.whiteback}
        />
        <View style={styles.titlebox}>
          <View style={styles.titlebar}></View>
          <Text style={styles.title}>搭配衣物</Text>
        </View>
        <View style={styles.clothbox}>
            <Image
            source={require('../images/hanger.png')}
            style={styles.hanger}
            />
            <Image
            source={{uri:global.uri}}
            style={{width:218,height:218,alignSelf:'center',marginBottom:-210,borderRadius:10}}
            />
          <Image
          source={require('../images/blueline.png')}
          style={styles.blueline}
          />
          <Image
          source={require('../images/clothexample/short1.png')}
          style={{width:217.81,height:194.02,resizeMode:'stretch',alignSelf:'center'}}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.hintbutton} onPress={() => navigation.navigate('Hint',navigation)}>
        <Image
        source={require('../images/hint.png')}
        style={styles.hint}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={function(){console.log('set todays outfit')}}>
        <Text style={styles.buttonword}>設定為今日搭配</Text>
      </TouchableOpacity>
      <MyclothetSelector navigation={navigation}></MyclothetSelector>
    </View>
  );
}

export default MyClothet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bigtitle:{
    fontSize:18,
    color:'white',
    fontWeight:'bold',
    position:'absolute',
    top:40,
    alignSelf:'center',
    zIndex:5,
},
  background: {
    width:SCREENWIDTH,
    height:SCREENHEIGHT,
    zIndex:0,
    marginTop:SCREENHEIGHT*0.0575,
  },
  leaderbutton:{
    width:SCREENWIDTH*0.16267,
    height:SCREENHEIGHT*0.035,
    zIndex:3,
    position:'absolute',
    right:SCREENWIDTH*0.0587,
    top:SCREENHEIGHT*0.13215,
    flexDirection:'row',
  },
  leaderword:{
    fontSize:17,
    color:'#FCF4E9',
    justifyContent:'center',
  },
  leaderboard:{
    width:SCREENWIDTH*0.06125,
    height:SCREENHEIGHT*0.035,
    marginLeft:6,
  },
  index1:{
    width:SCREENWIDTH*0.9146,
    height:SCREENHEIGHT*0.6832,
    zIndex:2,
    alignSelf:'center',
    position:'absolute',
    top:SCREENHEIGHT-8,
  },
  whiteback:{
    width:SCREENWIDTH*0.9146,
    height:SCREENHEIGHT*0.6832,
    resizeMode:'stretch',
    marginTop:-SCREENHEIGHT*0.815,
  },
  titlebox:{
    marginTop:-SCREENHEIGHT*0.674,
    marginLeft:SCREENWIDTH*0.0173,
  },
  title:{
    fontSize:20,
    color:'white',
    marginTop:-28.5,
  },
  titlebar:{
    borderColor:'#5674AC',
    height:0,
    width:SCREENWIDTH*0.2053,
    borderWidth:4,
    borderRadius:5,
    opacity:0.95,
    marginLeft:18,
  },
  clothbox:{

  },
  hanger:{
    width:SCREENWIDTH*0.1992,
    height:SCREENHEIGHT*0.0507,
    alignSelf:'center',
    marginTop:3,
  },
  blueline:{
    width:SCREENWIDTH*0.4533,
    height:SCREENHEIGHT*0.0163,
    alignSelf:'center',
    marginTop:SCREENHEIGHT*0.2617,
    
  },
  hint:{
    width:40,
    height:40,
  },
  hintbutton:{
    marginTop:-665,
    marginLeft:342,
    zIndex:3,
  },
  button:{
    zIndex:2,
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center',
    width:SCREENWIDTH*0.336,
    height:SCREENHEIGHT*0.053,
    borderRadius:10,
    backgroundColor:"#5E6B7B",
    marginTop:395,
  },
  buttonword:{
    fontSize:16,

    color:'white',
    zIndex:2,
  },
  selectlist:{
    width:SCREENWIDTH,
    height:SCREENHEIGHT,
    backgroundColor:"#333333",
    borderRadius:17,
    marginTop:SCREENHEIGHT*0.06463,
    zIndex:5,
  },
  list:{
    flexDirection:'row',
    alignItems:'center',
  },
  word1:{
    color:'white',
    fontSize:16,
    marginLeft:35
  },
  word:{
    color:'white',
    fontSize:16,
    marginLeft:53
  },
  plusbtn:{
    marginLeft:44
  },
});
