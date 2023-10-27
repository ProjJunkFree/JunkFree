import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import icons from "../constants/icons";
import { COLORS, images, SIZES } from "../constants";

function ProfileScreen({ navigation }) {
  const handleLogout = () => {
    navigation.navigate("Welcome");
  };

  return (
    <View style={styles.container}>
      <Touc style={styles.imageContainer}>
        <Image
          source={require("../assets/images/junkfree_circle.png")}
          style={styles.profileImage}
        />
      </Touc>
      <Text style={styles.profileName}>Junk Free</Text>
      <Text style={styles.memberSince}>Member since 2023</Text>

      <View style={styles.detailsContainer}>
        <View style={styles.detailItem}>
          <Image source={icons.lockedIcon} style={styles.lockicon} />
          <Text style={styles.detailLabel}>Privacy & Settings</Text>
        </View>
        <View style={styles.detailItem}>
          <Image source={icons.setNotif} style={styles.notificon} />
          <Text style={styles.detailLabel}>Notification</Text>
        </View>
      </View>

      <View style={styles.logoutContainer}>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Image source={icons.logOut} style={styles.logOutIcon} />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
  },
  imageContainer: {
    alignItems: "center",
    backgroundColor: COLORS.junkFree,
    borderRadius: 100,
    padding: 3,
  },
  profileImage: {
    width: 130,
    height: 130,
  },
  profileName: {
    fontSize: 25,
    marginTop: 5,
  },
  memberSince: {
    color: "green",
    marginTop: 5,
    fontSize: 15,
  },
  detailsContainer: {
    width: "100%",
    marginTop: 30,
  },
  detailItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 50,
  },
  detailLabel: {
    fontWeight: "bold",
    fontSize: 25,
    alignItems: "center",
    textAlign: "left",
  },
  lockicon: {
    width: 50,
    height: 50,
    marginStart: -90,
    marginRight: 30,
  },
  notificon: {
    width: 50,
    height: 50,
    marginStart: -160,
    marginRight: 30,
  },
  detailValue: {
    fontSize: 25,
  },
  logoutContainer: {
    marginLeft: -250,
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "blue",
    borderRadius: 9,
  },
  logOutIcon: {
    width: 25,
    height: 25,
    marginRight: 5,
    tintColor: "white",
  },
  logoutText: {
    color: "white",
    fontSize: 18,
  },
});

export default ProfileScreen;
