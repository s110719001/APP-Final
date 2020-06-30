import React from 'react';
import { TextInput, View, Text, Platform } from 'react-native';
import { Input } from 'react-native-elements';

const NewInput = (props) => {

   if (Platform.OS === 'ios') {
      return (
         <Input
            {...props}
            autoCorrect={false}
            style={props.style}
         />
      );
   }

   return (
     <View style={styles.containerStyle}>
       <TextInput
         {...props}
         autoCorrect={false}
         style={props.style}
         autoCorrect={false}
       />
     </View>
   );
};

const styles = {
   containerStyle: {
      zIndex:2,
      paddingLeft: 20,
      justifyContent: 'flex-start',
      flexDirection: 'row',
      borderColor: '#FCF4E9',
      backgroundColor:'#Fff',
      width:244,
      height:48,
      borderRadius: 5
   }
};

export default NewInput;