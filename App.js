import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import WelcomeScreen from "./components/WelcomeScreen";
import SignupScreen from "./components/SignupScreen";
import HomeScreen from "./components/HomeScreen";
import ProfileScreen from "./components/ProfileScreen";
import { StyleSheet, View, Text } from "react-native";
import LoginScreen from "./components/LoginScreen";
import ForgotPasswordScreen from "./components/ForgotPasswordScreen/ForgotPasswordScreen";
import ResetPasswordScreen from "./components/ForgotPasswordScreen/ResetPasswordScreen";
import ConfirmationCodeScreenScreen from "./components/ForgotPasswordScreen/ConfirmationCodeScreen";

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Forgot Password" component={ForgotPasswordScreen} />
        <Stack.Screen
          name="Confirmation Code"
          component={ConfirmationCodeScreenScreen}
        />
        <Stack.Screen name="Reset Password" component={ResetPasswordScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
