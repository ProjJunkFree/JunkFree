import React from "react";
import { View, Text, Button } from "react-native";

function WelcomeScreen({ navigation }) {
  return (
    <View>
      <Text>Welcome Screen</Text>
      <Button title="Login" onPress={() => navigation.navigate("Login")} />
      <Button title="Signup" onPress={() => navigation.navigate("Signup")} />
    </View>
  );
}

export default WelcomeScreen;
