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
      <TouchableOpacity style={styles.imageContainer}>
        <Image
          source={require("../assets/images/junkfree_circle.png")}
          style={styles.profileImage}
        />
      </TouchableOpacity>
      <Text style={styles.profileName}>Junk Free</Text>
      <View>
        <Text style={styles.memberSince}>Member since 2023</Text>
      </View>

      <View style={styles.detailsContainer}>
        <TouchableOpacity style={styles.detailItem}>
          <View style={styles.iconImageContainer}>
            <Image source={icons.lockedIcon} style={styles.lockicon} />
          </View>
          <View style={styles.wrapTextContainer}>
            <Text style={styles.detailLabel}>Privacy & Settings</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.detailItem}>
          <View style={styles.iconImageContainer}>
            <Image source={icons.setNotif} style={styles.notificon} />
          </View>

          <View style={styles.wrapTextContainer}>
            <Text style={styles.detailLabel}>Notification</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.logoutMainContainer}>
        <TouchableOpacity style={styles.logoutContainer}>
          <View style={styles.logoutButton} onPress={handleLogout}>
            <Image source={icons.logOut} style={styles.logOutIcon} />
          </View>
          <View>
            <Text style={styles.logoutText}>Logout</Text>
          </View>
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

  wrapTextContainer: {
    paddingRight: 60,
    textAlign: "center",
    width: "80%",
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
    color: COLORS.junkFree,
    marginTop: 5,
    fontSize: 15,
  },

  logoutMainContainer: {
    marginRight: 200,
  },
  detailsContainer: {
    width: "100%",
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  iconImageContainer: {
    backgroundColor: COLORS.opacityGreen,
    borderRadius: SIZES.xxLarge,
    padding: 5,
  },
  detailItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 30,
    gap: 15,
    paddingHorizontal: 10,
    width: "80%",
  },
  detailLabel: {
    fontWeight: "bold",
    fontSize: 15,
  },
  lockicon: {
    width: 35,
    height: 35,
  },
  notificon: {
    width: 35,
    height: 35,
  },
  detailValue: {
    fontSize: 25,
  },
  logoutContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.opacityGreen,
    borderRadius: SIZES.medium,
    paddingVertical: 8,
    paddingHorizontal: SIZES.small,
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",

    gap: 10,
  },
  logOutIcon: {
    width: 25,
    height: 25,
    marginRight: 5,
  },
  logoutText: {
    color: COLORS.textColor,
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default ProfileScreen;