import React from "react";
import { Font } from "expo";

import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

import { COLORS, icons, images, SIZES } from "../constants";
import styles from "./HomeStyle/homescreen.style";

function HomeScreen({ navigation }) {
  const [searchCity, setSearchCity] = React.useState("");

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
          <View style={styles.searchContainer}>
            <Image source={images.junkFreeLogo} style={styles.mainLogoSize} />
            <View style={styles.searchWrapper}>
              <TextInput
                style={styles.searchInput}
                value={searchCity}
                placeholder="Specify City"
                onChange={(text) => setSearchCity(text)}
              />
              <Image source={icons.locationGreen} style={styles.absoluteImg} />
            </View>
            <TouchableOpacity>
              <Image source={icons.email} style={styles.emailIcon} />
            </TouchableOpacity>
          </View>
          {/* Post component */}

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
