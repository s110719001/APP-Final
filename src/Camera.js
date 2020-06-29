import React, { useState, useEffect, useRef } from 'react';
import { Image, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { Camera } from 'expo-camera';
import { Slider } from 'react-native-elements';


import TypeSelector1 from './Typeselector1';

 
export default function App({ photouri = 0,navigation}) {
  var photodata;
  enableScroll = () => this.setState({ scrollEnabled: true });
 disableScroll = () => this.setState({ scrollEnabled: false });
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null)
  const [type, setType] = useState(Camera.Constants.Type.back);
useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);
if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={type} ref={ref => {
        setCameraRef(ref) ;
  }}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            justifyContent: 'flex-end'
          }}>
          
          <TouchableOpacity style={{alignSelf: 'center',marginBottom:15}} onPress={async() => {
            if(cameraRef){
              let photo = await cameraRef.takePictureAsync();
              console.log('photo', photo);
              photodata = photo;
              console.log('photodata',photodata.uri);
              photouri = photodata.uri;
            } navigation.navigate('AddCloth',photouri )
          }}>
            <View style={{ 
               borderWidth: 5,
               borderRadius:50,
               borderColor: '#757575',
               height: 74,
               width:74,
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center'}}
            >
              <View style={{
                 borderWidth: 2,
                 borderRadius:50,
                 borderColor: '#232E3B',
                 height: 45,
                 width:45,
                 backgroundColor: '#232E3B'}} >
              </View>
            </View>
          </TouchableOpacity> 
        </View>
        <Image
        source={require('../images/clothline.png')}
        style={{zIndex:6,width:320,height:276,position:'absolute',alignSelf:'center',top:186}}
        />
        <View style={{width:415,height:30,backgroundColor:'#333333',position:'absolute',top:0,left:0,}}></View>
        <View style={{backgroundColor:"#333333",width:420,height:158,borderTopStartRadius:17,borderTopEndRadius:17}}>
          <View style={{flexDirection:'row',justifyContent:'center'}}>
            <Text style={{fontSize:16,color:'white',marginTop:25}}>休閒</Text>
            <View style={{alignSelf:'center',alignItems:'center',justifyContent:'center',flexDirection:"row",position:'absolute',top:22,backgroundColor:'#656565',width:238,height:30,borderRadius:13}}>
              <Text style={{fontSize:16,color:'#FCF4E9'}}>1</Text>
              <Text style={{fontSize:16,color:'#FCF4E9',marginLeft:40}}>2</Text>
              <Text style={{fontSize:16,color:'#FCF4E9',marginLeft:40}}>3</Text>
              <Text style={{fontSize:16,color:'#FCF4E9',marginLeft:40}}>4</Text>
              <Text style={{fontSize:16,color:'#FCF4E9',marginLeft:40}}>5</Text>
            </View>
            <Slider
            minimumValue={1}
            maximumValue={5}
            value={1}
            step={1}
            style={{backgroundColor:'transparent',width:238,height:30,borderRadius:13,marginTop:22,marginLeft:25}}
            trackStyle={{backgroundColor:'#656565',width:120,height:0,borderRadius:13}}
            thumbTintColor='#333333'
            thumbStyle={{width:40,height:40,borderWidth:5,borderColor:'white',marginTop:-5,borderRadius:20}}
            />
            <Text style={{fontSize:16,color:'white',marginTop:25,marginLeft:25}}>正式</Text>
          </View>
          <Text style={{fontSize:16,color:'white',position:'absolute',top:80,left:35}}>類別</Text>
          
            <TypeSelector1></TypeSelector1>
          
        </View>
      </Camera>
    </View>
  );
}