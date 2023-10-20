import React from "react";

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
import { COLORS, SIZES, icons, images } from "../../constants";
import styles from "./herosection.style";
import FilterCategories from "./FilterCategories";
const HeroSection = () => {
  const [post, setPost] = React.useState("");
  return (
    <View
      style={{
        flex: 1,
        padding: SIZES.medium,
        marginTop: SIZES.medium,
      }}
    >
      <View style={styles.heroSectionContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={post}
            placeholder="post to cycle"
            onChange={(text) => setPost(text)}
          />
        </View>
        <TouchableOpacity style={styles.postBtn}>
          <Text style={styles.postText}>Post</Text>
        </TouchableOpacity>
      </View>
      <FilterCategories />
    </View>
  );
};

export default HeroSection;
