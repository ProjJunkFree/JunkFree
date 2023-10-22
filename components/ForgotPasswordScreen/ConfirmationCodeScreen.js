import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../CustomInput';
import CustomButton from '../CustomButton';
import {useForm} from 'react-hook-form'


const ConfirmationCodeScreen = ({navigation}) => {
    const{control} = useForm();

    const onSendPressed = () => {
        navigation.navigate("Reset Password");
        console.warn('onConfirmPressed');      
    };

    const onLoginPressed = () => {
        navigation.navigate("Login");
        console.warn('onLoginPressed');
    };

    const onResendPressed = () => {
        console.warn('onResendPressed');
    };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.title}>Reset your password</Text>

            <Text style={styles.text2}>Confirmation Code*</Text>
            <CustomInput
                name="code"
                control={control}
                placeholder="Enter code"
                rules={{required: 'Password is required'}}
            />

            <CustomButton text="Send" onPress={onSendPressed} />
 
            <CustomButton
                text="Resend code"
                onPress={onResendPressed}
                type="SECONDARY"
            />

            <CustomButton
                text="Back to Login"
                onPress={onLoginPressed}
                type="TERTIARY"
            />
        </View>  
    </ScrollView>
    
  );
};

const styles = StyleSheet.create({
    root: {
        padding: 50,
    },

    title: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C68',
        marginBottom: 50,
    },

    text: {
        color: 'grey',
        marginVertical: 10,
    },

    text2: {
        color: 'grey',
        marginTop: 10,
    },

    link: {
        color: 'black',
    },
});

export default ConfirmationCodeScreen;