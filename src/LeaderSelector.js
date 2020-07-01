import * as React from 'react';
import {
  Text, 
  View,
  SafeAreaView ,
Image,StyleSheet} from 'react-native';

import Carousel from 'react-native-snap-carousel';
import RateJson from '../json/clothrate.json';
export default class App extends React.Component {



    constructor(props){
        super(props);
        this.state = {
          activeIndex:0,
          carouselItems: [
          {
            outfitnum : "1",
            rate : "55",
            path:"https://upload.cc/i1/2020/06/30/lr0zuY.png"
          },
          {
            outfitnum : "2",
            rate : "20",
            path:"https://upload.cc/i1/2020/06/30/IudzUY.png"
          },
          {
            outfitnum : "3",
            rate : "15",
            path:"https://upload.cc/i1/2020/06/30/JvsIGD.png"
          },
          {
            outfitnum : "4",
            rate : "6",
            path:"https://upload.cc/i1/2020/06/30/c9j1o3.png"
          },
          {
            outfitnum : "5",
            rate : "4",
            path:"https://upload.cc/i1/2020/06/30/hCsFgy.png"
          },
        ]
      }
    }

    _renderItem({item,index}){
      
        if(item.path === "https://upload.cc/i1/2020/06/30/lr0zuY.png"){
            return (
                <View>
                  <Image
                  source={require('../images/crown.png')}
                  style={{width:56,height:33.64,alignSelf:"center"}}
                  />
                  <Image
                  source={{uri:item.path}}
                  style={{alignSelf:'center',width:240,resizeMode:'stretch',height:374,borderRadius:20,marginTop:20}}
                  />
                  <View style={styles.container}>
                    <View style={{alignItems:"center"}}>
                      <View style={styles.box}></View>
                        <View style={{flexDirection:"row"}}>
                        <Text style={styles.rate}>{item.rate}</Text>
                        <Text style={styles.percentage}>%</Text>
                        <Text style={{width:35,height:item.rate*1.5,backgroundColor:'#FACFC9',position:"absolute",bottom:32,left:-15}}></Text>
                      </View>
                    </View>
                  </View>
                </View>

              )
        }else{
         
            return (
                <View>
                  <Image
                  source={{uri:item.path}}
                  style={{alignSelf:'center',width:240,resizeMode:'stretch',height:374,borderRadius:20,marginTop:53.64}}
                  />
                  <View style={styles.container}>
                    <View style={{alignItems:"center"}}>
                      <View style={styles.box}></View>
                        <View style={{flexDirection:"row"}}>
                        <Text style={styles.rate}>{item.rate}</Text>
                        <Text style={styles.percentage}>%</Text>
                        <Text style={{width:35,height:item.rate*1.5,backgroundColor:'#FCF0E2',position:"absolute",bottom:32,left:-15}}></Text>
                      </View>
                    </View>
                  </View>
                </View>
              )

        }
    }

    render() {
        return (
          <SafeAreaView style={{flex:1,marginTop:-662,right:42}}>
            <View style={{ flexDirection:'row', justifyContent: 'center' }}>
                <Carousel
                  layout={"stack"}
                  ref={ref => this.carousel = ref}
                  data={this.state.carouselItems}
                  sliderWidth={500}
                  itemWidth={300}
                  renderItem={this._renderItem}
                  onSnapToItem = { index => this.setState({activeIndex:index}) } />
            </View>
          </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
  container: {
    zIndex:4,
  },
  box:{
      width:40,
      height:global.now,
      backgroundColor:"#FACFC9",

      position:'absolute',
      bottom:40,
  },
  rate:{
      color:"#FCF4E9",
      fontSize:26,
      marginTop:130,
      position:"absolute",
      right:-2
  },
  percentage:{
      color:"#FCF4E9",
      fontSize:16,
      marginTop:139,
      left:15,
  },
});
