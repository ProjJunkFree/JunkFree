import React from "react";
import { Font } from "expo";
import { useState } from "react";
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
import HeroSection from "./HeroSection/HeroSection";
import MainContent from "./MainContent/MainContent";

function HomeScreen({ navigation }) {
  const [searchCity, setSearchCity] = useState("");
  const [isFilterApplied, setFilterApplied] = useState(false);

  // Function to handle the filter toggle
  const toggleFilter = () => {
    setFilterApplied(!isFilterApplied);
  };

  const handleProfile = () => {
    // Navigate to the Profile screen
    navigation.navigate("Profile");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.backgroundColor }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.topHeaderContainer}>
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
            <TouchableOpacity onPress={toggleFilter}>
              <Image
                source={isFilterApplied ? icons.emailApplied : icons.email}
                style={styles.emailIcon}
              />
            </TouchableOpacity>
          </View>
          {/* Hero Content */}
          <HeroSection />
          {/* Main Content */}
          <MainContent />
          <MainContent />

          <View>
            <Button title="Go to Profile" onPress={handleProfile} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
