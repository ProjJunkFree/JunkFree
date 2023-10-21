import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import Logo from "../assets/images/junk.png";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import {useForm, Controller} from "react-hook-form";

function LoginScreen({ navigation }) {
  // const [email, setEmail] = React.useState('');
  // const [password, setPassword] = React.useState('');

  const{control, handleSubmit, formState: {errors},} = useForm();


  const onSignInPressed = data => {
    console.log(data);
      navigation.navigate("Home");  
  };

  // Implement your login logic here
  // Check the credentials, and if they are correct, navigate to the Home screen
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  const { height } = useWindowDimensions();

  // const onSignInPressed = () => {
  //     console.warn("Logged in");
  // }

  const onForgotPasswordPressed = () => {
    navigation.navigate("Forgot Password");
  };


  const onSignInGoogle = () => {
    console.warn("Your Google account has been logged in");
    navigation.navigate("Home");
  };


  const onSignUpPressed = () => {
    navigation.navigate("Signup");
    console.warn("onSignUp");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image source={Logo} style={[styles.logo, { height: height * 0.3 }]} />

        <Text style={styles.text2}>Log in with one of the following.</Text>

        <Text>Email</Text>
        <CustomInput 
          name="Email"
          placeholder="Email" 
          control={control}
          rules={{required: 'Email is required'}}
        />

        <Text>Password</Text>
        <CustomInput
          name="Password"
          placeholder="Password"
          secureTextEntry
          control={control}
          rules={{required: 'Password is required'}}
        />


        <CustomButton
          text="Forgot password?"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />

        <CustomButton text="Login" onPress={handleSubmit(onSignInPressed)} />
        <Text style={styles.text}>OR</Text>

        <CustomButton
          text="Sign In with Google"
          onPress={onSignInGoogle}
          bgColor="white"
          fgColor="black"
        />

        <CustomButton
          text="Don't have an account? Create one"
          title="Signup"
          onPress={onSignUpPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
}
import { Form } from "react-hook-form";
import { TextInput } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  root: {
    padding: 50,
  },

  logo: {
    width: "100%",
    maxWidth: 70,
    maxHeight: 100,
    marginBottom: 20,
  },

  text: {
    marginTop: 15,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 13,
  },

  text2: {
    color: "grey",
    fontSize: 20,
    marginBottom: 30,
  },
});

export default LoginScreen;
