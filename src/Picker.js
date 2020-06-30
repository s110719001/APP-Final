import React, { useState } from "react";
import { View, Picker, StyleSheet } from "react-native";

export default function App() {
  const [selectedValue, setSelectedValue] = useState("java");
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 130,  }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="重要活動" value={1} />
        <Picker.Item label="工作" value={2} />
        <Picker.Item label="上課" value={3} />
        <Picker.Item label="休閒" value={4} />
        <Picker.Item label="運動" value={5} />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center",
    justifyContent:'center'
  }
});
