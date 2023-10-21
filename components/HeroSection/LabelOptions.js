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
import styles from "./labeloptions.style";
const labelOptions = ["Available", "Seeking"];
const LabelOptions = () => {
  const [activeCategory, setActiveCategory] = useState("Appliances");

  return (
    <View>
      <FlatList
        data={labelOptions}
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

export default LabelOptions;
