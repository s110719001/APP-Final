import * as React from 'react';
import {
  Text, 
  View,
  SafeAreaView ,
Image,} from 'react-native';

import Carousel from 'react-native-snap-carousel';



export default class App extends React.Component {




    constructor(props){
        super(props);
        this.state = {
          activeIndex:0,
          carouselItems: [
          {
            path:"https://upload.cc/i1/2020/06/30/lr0zuY.png"
          },
          {
            path:"https://upload.cc/i1/2020/06/30/IudzUY.png"
          },
          {
            path:"https://upload.cc/i1/2020/06/30/JvsIGD.png"
          },
          {
            path:"https://upload.cc/i1/2020/06/30/c9j1o3.png"
          },
          {
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
                </View>
      
              )
        }else{
            return (
                <View>
                  <Image
                  source={{uri:item.path}}
                  style={{alignSelf:'center',width:240,resizeMode:'stretch',height:374,borderRadius:20,marginTop:53.64}}
                  />
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

