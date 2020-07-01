import React from 'react';
import { StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native';

const person = ()=>{
    const onSignOut = ()=>{
        alert("阿")
    }


    return(
        <View style={styles.containerStyle}>
            <View style={styles.top}>
                <Image
                // source={require('../images/could.png')}
                source={require('../images/pericon.png')}
                style={styles.imgper}
                />
                <Text style={styles.perid}>asdfghj</Text>
                <TouchableOpacity style={styles.buttontest} onPress={onSignOut}>
                    <Text style={styles.buttonword}>登出</Text>
                </TouchableOpacity>
            </View>
            
                
            <Text style={styles.downtital}>我分享的搭配</Text>
            <Text style={styles.downword}>還沒有分享過喔</Text>
        
        </View>
    
        );
}
export default person;
const styles = {
    containerStyle: {
        
    },
    top:{
        flexDirection: 'row',
        top:90,
        width:244,
        height:48,
        color:'#fff',
        left:40,
    },
    imgper:{
        width:50,
        height:50,
        
    },
    perid:{
        color:'#fff',
        fontSize:25,
        left:20,
        top:5,
    },
    buttontest:{
        backgroundColor:'#5E6B7B',
        width:70,
        height:43,
        borderRadius:5,
        justifyContent:"center",
        zIndex:3,
        marginTop:0,
        marginLeft:130,
        top:5,
        

    },
    buttonword:{
        textAlign:'center',
        color:'white',
        fontSize:16,
        textAlignVertical:"center",
    },
    downtital:{
        fontSize:25,
        color:'#fff',
        top:125,
        left:40
    },
    downword:{
        fontSize:16,
        color:'#fff',
        top:300,
        left:150
    }

 };