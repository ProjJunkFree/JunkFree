import React, { useState } from "react";
import { View, Text, Button, Image, StyleSheet, TextInput } from "react-native";

const ProfileScreen = ({ navigation }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    name: "Bossing Terec",
    email: "Metchryl@gmail.com",
    bio: "Kong di ka namo di sad kos imo",
    location: "diha ra unahan",
  });

  const handleLogout = () => {
    // Implement logout logic here
    // Navigate back to the Welcome screen or the authentication flow
    navigation.navigate("Welcome");
  };

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Save the edited data
    // You can update the user object here
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/junkfree_circle.png")}
          style={styles.profileImage}
        />
      </View>
      <Text style={styles.profileName}>Junk Free</Text>

      <View style={styles.detailsContainer}>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Name</Text>
          {isEditing ? (
            <TextInput
              style={styles.editableText}
              value={user.name}
              placeholder="Enter your name"
              onChangeText={(text) => setUser({ ...user, name: text })}
              placeholderTextColor="#aaa"
            />
          ) : (
            <Text style={styles.detailValue}>{user.name}</Text>
          )}
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Email</Text>
          {isEditing ? (
            <TextInput
              style={styles.editableText}
              value={user.email}
              placeholder="Enter your email"
              onChangeText={(text) => setUser({ ...user, email: text })}
              placeholderTextColor="#aaa"
            />
          ) : (
            <Text style={styles.detailValue}>{user.email}</Text>
          )}
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Bio</Text>
          {isEditing ? (
            <TextInput
              style={styles.editableText}
              value={user.bio}
              placeholder="Enter your bio"
              onChangeText={(text) => setUser({ ...user, bio: text })}
              placeholderTextColor="#aaa"
            />
          ) : (
            <Text style={styles.detailValue}>{user.bio}</Text>
          )}
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Location</Text>
          {isEditing ? (
            <TextInput
              style={styles.editableText}
              value={user.location}
              placeholder="Enter your location"
              onChangeText={(text) => setUser({ ...user, location: text })}
              placeholderTextColor="#aaa"
            />
          ) : (
            <Text style={styles.detailValue}>{user.location}</Text>
          )}
        </View>
      </View>

      {isEditing && (
        <View style={styles.saveContainer}>
          <Button title="Save" onPress={handleSave} />
        </View>
      )}
      {!isEditing && (
        <View style={styles.logoutContainer}>
          <Button title="Logout" onPress={handleLogout} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
    backgroundColor: "#f2f2f2",
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: "#009688",
  },
  profileName: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 10,
    color: "#009688",
  },
  detailsContainer: {
    width: "100%",
    marginTop: 20,
  },
  detailItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  detailLabel: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#009688",
  },
  detailValue: {
    fontSize: 18,
    width: "60%",
  },
  editableText: {
    fontSize: 18,
    width: "60%",
    borderColor: "#009688",
    borderBottomWidth: 1,
    marginBottom: 10,
    paddingBottom: 2,
    color: "#333",
  },
  saveContainer: {
    marginBottom: 20,
  },
  logoutContainer: {
    marginTop: "auto",
  },
});

export default ProfileScreen;
