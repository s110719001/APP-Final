import React, { useState } from "react";
import { View, Picker, StyleSheet,ScrollView,Text } from "react-native";

export default function App() {
  const [selectedValue, setSelectedValue] = useState("java");
  return (
    <View style={styles.container}>
      <View style={{height:100}}>
      <ScrollView>
        <View style={{flexDirection:'row'}}>
        <Text>456</Text>
        <Text>456</Text>
        <Text>456</Text>
        <Text>456</Text>
        <Text>456</Text>
        <Text>456</Text>
        <Text>456</Text>
        <Text>456</Text>
        <Text>456</Text>
        </View>
        <Text>456</Text>
        <Text>456</Text>
        <Text>456</Text>
        <Text>456</Text>
        <Text>456</Text>
        <Text>456</Text>
        <Text>456</Text>
        <Text>456</Text>
        <Text>456</Text>
        <Text>456</Text>
        <Text>456</Text>
        <Text>456</Text>
        <Text>456</Text>
        <Text>456</Text>
        <Text>222</Text>
        <Text>426</Text>
        <Text>42</Text>
        <Text>456</Text>
        <Text>2</Text>
        <Text>4526</Text>
        <Text>4226</Text>
        
      </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center",
    justifyContent:'center',
    
  }
});
