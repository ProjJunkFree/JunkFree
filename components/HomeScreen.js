import React from "react";
import { View, SafeAreaView, ScrollView, Text, Button } from "react-native";

import { COLORS, icons, images, SIZES } from "../constants";

// component

function HomeScreen({ navigation }) {
  const handleProfile = () => {
    // Navigate to the Profile screen
    navigation.navigate("Profile");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            backgroundColor: COLORS.red,
            padding: SIZES.medium,
          }}
        >
          <Text>Home Screen</Text>
          <Button title="Go to Profile" onPress={handleProfile} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

HomeScreen.navigationOptions = {
  headerShown: false,
};

export default HomeScreen;
