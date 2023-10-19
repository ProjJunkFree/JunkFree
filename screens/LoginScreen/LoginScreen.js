import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView} from 'react-native';
import Logo from '../../assets/images/junk.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';




function LoginScreen({ navigation }) {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const onSignInPressed = () => {
        if (email === "user@example.com" && password === "password") {
            console.warn("HI nako");
            navigation.navigate("Home");
          }
        };

        // Implement your login logic here
        // Check the credentials, and if they are correct, navigate to the Home screen
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');


    const {height} = useWindowDimensions();

    // const onSignInPressed = () => {
    //     console.warn("Logged in");
    // }

    const onForgotPasswordPressed = () => {
        console.warn("onForgotPasswoord");
    }

    const onSignInFacebook = () => {
        console.warn("Your Facebook account has been logged in");
    }

    const onSignInGoogle = () => {
        console.warn("Your Google account has been logged in");
    }

    const onSignInApple = () => {
        console.warn("Your Apple account has beenLogged in");
    }

    const onSignUpPressed = () => {
        console.warn("onSignUp");
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Image 
            source={Logo} 
            style={[styles.logo, {height: height * 0.3}]} />

            <Text style={styles.text2}>Log in with one of the following.</Text>

            <Text>Email</Text>
            <CustomInput 
            placeholder = "Email" 
            value={email} 
            setValue={setEmail} 
            />

            <Text>Password</Text>
            <CustomInput 
            placeholder ="Password" 
            value={password} 
            setValue={setPassword} 
            secureTextEntry={true}
            />

            <CustomButton 
            text="Forgot password?" onPress={onForgotPasswordPressed} type="TERTIARY"
            />

            
            <CustomButton 
            text="Login" 
            onPress={onSignInPressed} 
            />
            <Text style={styles.text}>OR</Text>

            <CustomButton 
            text="Sign In with Facebook" 
            onPress={onSignInFacebook} 
            bgColor="#0084FF" 
            fgColor="white"
            />

            <CustomButton 
            text="Sign In with Google" 
            onPress={onSignInGoogle}
            bgColor="white" 
            fgColor="black"
            />
            <CustomButton 
            text="Sign In with Apple" 
            onPress={onSignInApple} 
            bgColor="black" 
            fgColor="white"
            />

            <CustomButton 
            text="Don't have an account? Create one" onPress={onSignUpPressed} type="TERTIARY"
            />
        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    root: {

        padding: 50,

    },

    logo: {
        width: '100%',
        maxWidth: 70,
        maxHeight: 100,
        marginBottom: 20,

    },

    text: {
        marginTop: 15,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 13,

    },

    text2: {
            color: 'grey',
            fontSize: 20,
            marginBottom: 30,

    },
});

export default LoginScreen;