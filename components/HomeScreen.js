import React from "react";
import { View, Text, Button } from "react-native";

function HomeScreen({ navigation }) {
  const handleProfile = () => {
    // Navigate to the Profile screen
    navigation.navigate("Profile");
  };

  return (
    <View>
      <Text>Home Screen</Text>
      <Button title="Go to Profile" onPress={handleProfile} />
    </View>
  );
}

export default HomeScreen;
