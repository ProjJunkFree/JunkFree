import React from "react";
import { View, Text, Button } from "react-native";

function ProfileScreen({ navigation }) {
  const handleLogout = () => {
    // Implement logout logic here
    // Navigate back to the Welcome screen or the authentication flow
    navigation.navigate("Welcome");
  };

  return (
    <View>
      <Text>Profile Screen</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}

export default ProfileScreen;
