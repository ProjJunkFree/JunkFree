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

function SignupScreen({ navigation }) {
  const [Fname, setFirstName] = React.useState("");
  const [Lname, setLastName] = React.useState("");
  const [Email, setEmail] = React.useState("");
  const [Uname, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");

  const handleSignup = () => {
    if (password.length < 8) {
      setPasswordError("Must be at least 8 characters.");
    } else {
      setPasswordError(""); // Reset the error message if the password is valid
      navigation.navigate("Home");
    }
  };

  const { height } = useWindowDimensions();

  const onSignInGoogle = () => {
    console.warn("Your Google account has been Signed in");
    // Direct to the "Home" screen when signing in with Google
    navigation.navigate("Home");
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <Image source={Logo} style={[styles.logo, { height: height * 0.3 }]} />

        <Text style={styles.text2}>Sign up with one of the following.</Text>

        <Text>FirstName</Text>
        <CustomInput
          placeholder="First name"
          value={Fname}
          setValue={setFirstName}
        />

        <Text>LastName</Text>
        <CustomInput
          placeholder="Last name"
          value={Lname}
          setValue={setLastName}
        />

        <Text>Email</Text>
        <CustomInput
          placeholder="Enter your email"
          value={Email}
          setValue={setEmail}
        />

        <Text>UserName</Text>
        <CustomInput
          placeholder="Username"
          value={Uname}
          setValue={setUsername}
        />

        <Text>Password</Text>
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        {passwordError ? (
          <Text style={styles.errorText}>{passwordError}</Text>
        ) : null}

        <CustomButton text="Sign Up" onPress={handleSignup} />
        <Text style={styles.text}>OR</Text>

        <CustomButton
          text="Sign In with Google"
          onPress={onSignInGoogle}
          bgColor="white"
          fgColor="black"
        />
        {/* <Button title="Signup" onPress={handleSignup} /> */}
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
