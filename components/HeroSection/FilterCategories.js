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
import LabelOptions from "./LabelOptions";
const categories = ["Appliances", "Books", "Electronics", "Furniture", "Toys"];
const labelOptions = ["Available", "Seeking"];
const FilterCategories = () => {
  const [post, setPost] = React.useState("");
  const [isFilterApplied, setFilterApplied] = useState(false);

  // Function to handle the filter toggle
  const toggleFilter = () => {
    setFilterApplied(!isFilterApplied);
  };
  const [activeCategory, setActiveCategory] = useState("Appliances");

  return (
    <View
      style={{
        marginTop: SIZES.xSmall,
        backgroundColor: COLORS.red,
        padding: 20,
        backgroundColor: COLORS.lightWhite,
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={toggleFilter}>
          <Image
            source={isFilterApplied ? icons.filterApplied : icons.filterOutline}
            style={styles.filterSize}
          />
        </TouchableOpacity>
        <LabelOptions />
      </View>

      <Text style={styles.headerTitle}>Popular Categories</Text>
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
