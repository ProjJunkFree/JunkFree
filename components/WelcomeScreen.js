import React from "react";
import { View, Text, Button, TouchableOpacity, Image } from "react-native";
import styles from "./WelcomeStyle/welcomescreen.style";
import { COLORS, FONT, SIZES, images } from "../constants";

function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.welcomeContainer}>
      <View style={styles.introMsg}>
        <Text style={styles.test}>Welcome to</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.junkFree}>JunkFree</Text>
          <Text style={styles.comma}>,</Text>
        </View>
      </View>

      {/* welcomejk background */}
      <Image source={images.welcomejf} style={styles.welcomejfBg} />

      {/* JunkFree middle image */}
      <Image source={images.profile} style={styles.jfMiddle} />

      {/* curve Text */}
      <Image source={images.curveText} style={styles.curvedText} />
      <View style={styles.belowDesContainer}>
        <Text style={styles.belowDes}>and every connection</Text>
        <Text style={styles.belowDes}>creates a better</Text>
        <Text style={styles.belowDes}>world</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          title="Login"
          onPress={() => navigation.navigate("Login")}
          style={styles.loginDesign}
        >
          <Text style={styles.textLogin}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          title="Signup"
          onPress={() => navigation.navigate("Signup")}
          style={styles.signupDesign}
        >
          <Text style={styles.textSignup}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default WelcomeScreen;
