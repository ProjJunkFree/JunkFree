import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../CustomInput';
import CustomButton from '../CustomButton';
import {useForm} from 'react-hook-form'

const ResetPasswordScreen = ({navigation}) => {
    const{control} = useForm();
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const onConfirmPressed = () => {
        navigation.navigate("Login");
        console.warn('Password Reset Succefully');      
    };

    const onLoginPressed = () => {
        navigation.navigate("Login");
        console.warn('onLoginPressed');
    };


  return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.title}>Reset your password</Text>

            <Text style={styles.text2}>New password*</Text>
            <CustomInput
                name="password"
                control={control}
                placeholder="Enter new password"
                secureTextEntry
            />

            <Text style={styles.text2}>Confirm new password*</Text>
            <CustomInput
                name="newpassword"
                control={control}
                placeholder="Repeat password"
                secureTextEntry
                rules={{required: 'Password is required'}}
            />


            <CustomButton text="Confirm" onPress={onConfirmPressed} />
 

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

export default ResetPasswordScreen;