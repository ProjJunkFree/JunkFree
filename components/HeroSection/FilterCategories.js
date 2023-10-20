import React from "react";
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
  FlatList,
} from "react-native";
import { COLORS, SIZES, icons, images } from "../../constants";
import styles from "./herosection.style";
const categories = ["Appliances", "Books", "Electronics", "Furniture", "Toys"];
const FilterCategories = () => {
  const [post, setPost] = React.useState("");

  const [activeCategory, setActiveCategory] = useState("Appliances");

  return (
    <View style={{ marginTop: SIZES.medium }}>
      <Image source={icons.filterOutline} style={styles.filterSize} />
      <Text>Popular Categories</Text>
      <FlatList
        style={{ marginTop: SIZES.small }}
        data={categories}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.tab(activeCategory, item)}
            onPress={() => {
              setActiveCategory(item);
            }}
          >
            <Text style={styles.tabText(activeCategory, item)}>{item}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={{ columnGap: SIZES.small }}
        horizontal
      />
    </View>
  );
};

export default FilterCategories;
