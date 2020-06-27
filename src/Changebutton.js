import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';


export default class Changebutton extends Component {
  render() {
    return (
      <View style={{ flex:1,marginTop:-505,marginLeft:235,marginBottom:7}}>
        {/* Rest of the app comes ABOVE the action button component !*/}
        <ActionButton  position="center" bgColor='white' renderIcon={active => active ? (<Icon name="agree" style={styles.sure}>確定</Icon> ) : (<Icon name="do it yourself" style={styles.change}>自己來</Icon>)} hideShadow={true} active={false} buttonColor="#5E6B7B" size={40} spacing={15} outRangeScale='1' degrees='0' >
          <ActionButton.Item size={40} buttonColor={null} onPress={() => console.log("notes tapped!")}>
            <Icon style={styles.title}>這套衣服更適合</Icon>
          </ActionButton.Item>
          <ActionButton.Item size={40} buttonColor='#5E6B7B' onPress={() => console.log("notes tapped!")}>
            <Icon style={styles.textcontainer}>重要活動</Icon>
          </ActionButton.Item>
          <ActionButton.Item size={40} buttonColor='#5E6B7B' onPress={() => {}}>
            <Icon style={styles.textcontainer}>工作</Icon>
          </ActionButton.Item>
          <ActionButton.Item size={40} buttonColor='#5E6B7B' onPress={() => {console.log('上課!')}}>
            <Icon style={styles.textcontainer}>上課</Icon>
          </ActionButton.Item>
          <ActionButton.Item size={40} buttonColor='#5E6B7B' onPress={() => {}}>
            <Icon style={styles.textcontainer}>休閒</Icon>
          </ActionButton.Item>
          <ActionButton.Item size={40} buttonColor='#5E6B7B' onPress={() => {}}>
            <Icon style={styles.textcontainer}>運動</Icon>
          </ActionButton.Item>
        </ActionButton>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  button:{
    fontSize:16,
  },
  change:{
    width:80,
    height:43,
    borderRadius:10,
    backgroundColor:'#5E6B7B',
    fontSize:16,
    color:'white',
    textAlign:'center',
    paddingTop:13,
    alignSelf:'flex-start',
  },
  sure:{
    width:76,
    height:40,
    borderRadius:10,
    backgroundColor:'#5674AC',
    fontSize:16,
    color:'white',
    textAlign:'center',
    paddingTop:11.5,
    alignSelf:'flex-start'
  },
  title:{
    width:122,
    height:40,
    borderRadius:10,
    backgroundColor:null,
    fontSize:16,
    color:'#616161',
    textAlign:'center',
    paddingTop:11.5,
  },
  textcontainer:{
    width:122,
    height:40,
    borderRadius:10,
    backgroundColor:'#5E6B7B',
    fontSize:16,
    color:'white',
    textAlign:'center',
    paddingTop:11.5,
  },
});