import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Image, Picker, TouchableOpacity, AsyncStorage } from 'react-native';
import ActionButton from 'react-native-action-button';
import ModalDropdown from 'react-native-modal-dropdown';
import Header from './Header';
import Changebutton from './Changebutton';


const SCREENWIDTH = Dimensions.get('window').width;
const SCREENHEIGHT = Dimensions.get('window').height;

const TodaysOutfit = ({route}) => {
    const [selectedValue, setSelectedValue] = useState(route.params);
    return (
      <View style={styles.container}>
        <Text style={styles.bigtitle}>首頁</Text>
        <Header></Header>
        <Image
        source={require('../images/background.png')}
        style={styles.background}
        />
        <View style={styles.index1}>
            <View style={styles.titlebar}></View>
            <View style={styles.titles}>
                <Text style={styles.title1}>昨日</Text>
                <Text style={styles.title2}>今日搭配</Text>
                <Text style={styles.title3}>明日</Text> 
            </View>
        <View style={styles.words}>
                <Text style={styles.word1}>我今天要</Text>
                <View style={styles.container1}>
                <View style={styles.bar}></View>
            <Picker
            selectedValue={selectedValue}
            style={{ height: 50, width: 130,top:-35 }}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                <Picker.Item label="重要活動" value={1} />
                <Picker.Item label="工作" value={2} />
                <Picker.Item label="上課" value={3} />
                <Picker.Item label="休閒" value={4} />
                <Picker.Item label="運動" value={5} />
            </Picker>
            </View>
                
                <Text style={styles.word2}>運勢</Text>
                <Text style={{fontSize:18,color:'#5674AC',marginLeft:11,marginTop:-3,marginRight:50,fontWeight:'bold'}}>吉</Text>
            </View>
            <Image
            source={require('../images/clothexample/outfit1.png')}
            style={styles.outfit}
            />
        </View>
        <Changebutton></Changebutton>
      </View>
    );
  };

  export default TodaysOutfit;

  const styles = StyleSheet.create({
    container1: {
        flex: 1,
        paddingTop: 40,
        alignItems: "center",
        justifyContent:'center'
      },
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
    index1:{
        backgroundColor:"white",
        width:SCREENWIDTH*0.91467,
        height:SCREENHEIGHT*0.6573,
        position:'absolute',
        top:SCREENHEIGHT*0.2443, 
        alignSelf:'center',
        borderRadius:20,
    },
    dropdown:{
        marginLeft:20,
        marginBottom:5,
        width:62,
    },
    dropdowntext:{
        color:'#4F4F4F',
        fontSize:18,
    },
    dropdwonicon:{
        width:10,
        height:9,
        marginTop:9,
        marginLeft:16,
    },
    bar:{
        width:110,
        borderWidth:2.5,
        height:0,
        borderColor:'#B4CCFA',
        opacity:0.91,
        borderRadius:5,
        marginTop:-23,
        marginLeft:-13,
    },
    titlebar:{
        position:'absolute',
        width:90,
        height:0,
        borderRadius:6,
        borderColor:"#5674AC",
        borderWidth:4,
        alignSelf:'center',
        top:-4,
    },
    titles:{
        flexDirection:'row',
        alignSelf:'center',
        marginTop:-22,
    },
    title1:{
        fontSize:18,
        color:'white',
        marginRight:30,
    },
    title2:{
        fontSize:20,
        color:'white',
        marginTop:-2
    },
    title3:{
        fontSize:18,
        color:'white',
        marginLeft:30,
    },
    words:{
        flexDirection:'row',
        alignContent:'center',
        marginTop:22,
    },
    word1:{ 
        fontSize:16,
        marginTop:1,
        marginLeft:50,
    },
    word2:{
        fontSize:16,
        marginLeft:0,
    },
    button:{
        width:80,
        height:43,
        borderRadius:10,
        backgroundColor:'#5E6B7B',
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        top:SCREENHEIGHT*0.814,
        right:SCREENWIDTH*0.072,
    },
    buttontitle:{
        fontSize:16,
        color:'white',
    },
    outfit:{
        width:240,
        height:431,
        alignSelf:'center',
        marginTop:-50,
        resizeMode:'stretch',
    },
  });
