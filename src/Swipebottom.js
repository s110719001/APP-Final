import React, {useRef, useState, useEffect} from 'react';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Image,
} from 'react-native';

const ENTRIES1 = [
  {
    illustration: 'https://upload.cc/i1/2020/06/30/ACoGJ9.png',
  },
  {
    illustration: 'https://upload.cc/i1/2020/06/30/eXMFRw.png',
  },
];
const {width: screenWidth} = Dimensions.get('window');

const MyCarousel = props => {
  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);

  const goForward = () => {
    carouselRef.current.snapToNext();
  };

  useEffect(() => {
    setEntries(ENTRIES1);
  }, []);

  const renderItem = ({item, index}, parallaxProps) => {
     
    return (
      <View style={styles.item}>
        <Image
        source={require('../images/hanger1.png')}
        style={styles.hanger}
        />
        <ParallaxImage
          source={{uri: item.illustration}}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0} 
          {...parallaxProps}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>長袖</Text>
      <View style={styles.bar}></View>
      <Carousel
        ref={carouselRef}
        sliderWidth={340.76}
        sliderHeight={screenWidth}
        itemWidth={180}
        data={entries}
        renderItem={renderItem}
        hasParallaxImages={true}
      />
    </View>
  );
};

export default MyCarousel;

const styles = StyleSheet.create({
  container: {
    marginTop:32,
    height:225,
  },
  item: {
    width: 180,
    height: 219,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  hanger:{
    width:74.71,
    height:42.21,
    alignSelf:"center",
    marginBottom:-2,
    zIndex:6,
  },
  text:{
    color:"#FCF4E9",
    alignSelf:"flex-start",
    fontSize:16,
    marginLeft:5,
  },
  bar:{
    width:340.76,
    height:0,
    borderColor:"#FCF4E9",
    borderWidth:1.2,
    marginBottom:-6,
    borderRadius:10,
    marginTop:5,
    marginLeft:5,
  },
});