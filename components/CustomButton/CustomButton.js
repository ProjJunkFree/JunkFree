import React from 'react'
import { View, Text, StyleSheet, Pressable} from 'react-native'

const CustomButton = ({onPress,text,type = "PRIMARY", bgColor, fgColor}) => {
  return (
    <Pressable 
    onPress={onPress} 
    style={[styles.container,
    styles[`container_${type}`],
    bgColor ? {backgroundColor: bgColor} : {}
    ]}>

    <Text style={[styles.text, 
    styles[`text_${type}`],
    fgColor ? {color: fgColor} : {}
    ]}>{text}</Text>
    </Pressable>
    
  );
};



const styles = StyleSheet.create({
    container: {
        

        width: '100%',

        padding: 20,
        marginVertical: 5,

        alignItems: 'center',
        borderRadius: 8,
        marginTop: 20,
        
    },

    container_PRIMARY: {
        backgroundColor: '#04AF70',
        shadowColor: 'black',
        shadowOffset: {width:2, height: 4},
        shadowOpacity: 0.2, 
    },

    container_SECONDARY: {
        backgroundColor: 'white',
        borderColor: 'grey',
        borderWidth: 2,
        shadowColor: 'black',
        shadowOffset: {width:2, height: 4},
        shadowOpacity: 0.1, 
    },

    container_TERTIARY: {
        padding: -10,
    },

    text: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 15,

    },

    text_SECONDARY: {
        color: 'grey',
    },

    text_TERTIARY: {
        color: 'grey',
        fontSize: 14,
    }
})

export default CustomButton;