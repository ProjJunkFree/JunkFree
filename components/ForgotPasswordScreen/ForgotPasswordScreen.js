import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../CustomInput';
import CustomButton from '../CustomButton';
import {useForm} from 'react-hook-form'


const ForgotPasswordScreen = ({navigation}) => {
    const{control, handleSubmit} = useForm();
    

    const onSendPressed = () => {
        navigation.navigate("Confirmation Code");
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

            <Text style={styles.text2}>Email*</Text>
            <CustomInput 
                name="email"
                control={control}
                placeholder="Enter your Email"
                rules={{required: 'Password is required'}}
            />

            <CustomButton text="Send" onPress={handleSubmit(onSendPressed)} />
 
            {/* <CustomButton
                text="Resend code"
                onPress={onResendPressed}
                type="SECONDARY"
            /> */}

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

export default ForgotPasswordScreen;