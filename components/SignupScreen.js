import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import Logo from "../assets/images/junk.png";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { useForm } from "react-hook-form";

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+(?:\.[A-Za-z]+)*$/;

function SignupScreen({ navigation }) {
  const { control, handleSubmit } = useForm();
  // const {Fname, setFirstName} = useForm();
  // const {Lname, setLastName} = useForm();
  // const {Email, setEmail} = useForm();
  // const {Uname, setUsername} = useForm();
  // const {password, setPassword} = useForm();
  // const {passwordError, setPasswordError} = useForm();

  const handleSignup = () => {
    // if (password.length < 8) {
    //   setPasswordError("Must be at least 8 characters.");
    // } else {
    //   setPasswordError(""); // Reset the error message if the password is valid
    navigation.navigate("Home");
    // }
  };

  const { height } = useWindowDimensions();

  const onSignInGoogle = () => {
    navigation.navigate("Home");
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <Image source={Logo} style={[styles.logo, { height: height * 0.3 }]} />

        <Text style={styles.text2}>Sign up with one of the following.</Text>

        <Text>FirstName</Text>
        <CustomInput
          name="firstname"
          control={control}
          rules={{ required: "First name is required" }}
        />

        <Text>LastName</Text>
        <CustomInput
          name="lastname"
          control={control}
          placeholder="Last name"
          rules={{ required: "Last name is required" }}
        />

        <Text>Email</Text>
        <CustomInput
          name="email"
          control={control}
          placeholder="Email"
          rules={{
            pattern: { value: EMAIL_REGEX, message: "Email is invalid" },
            required: "Email is required",
          }}
        />

        <Text>UserName</Text>
        <CustomInput
          name="username"
          control={control}
          placeholder="Username"
          rules={{
            required: "Username is required",
            minLength: {
              value: 3,
              message: "Username should be at least 6 characters long",
            },

            maxLength: {
              value: 24,
              message: "Username should be max 24 characters only",
            },
          }}
        />

        <Text>Password</Text>
        <CustomInput
          name="password"
          control={control}
          placeholder="Password"
          secureTextEntry
          rules={{
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password should be at least 6 characters long",
            },
            maxLength: {
              value: 16,
              message: "Password should be max of 18 characters only",
            },
          }}
        />
        {/* {passwordError ? (
          <Text style={styles.errorText}>{passwordError}</Text>
        ) : null} */}

        <CustomButton text="Sign Up" onPress={handleSubmit(handleSignup)} />
        <Text style={styles.text}>OR</Text>

        <CustomButton
          text="Sign In with Google"
          onPress={onSignInGoogle}
          bgColor="white"
          fgColor="black"
        />
      </View>
    </ScrollView>
  );
}

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

export default SignupScreen;
