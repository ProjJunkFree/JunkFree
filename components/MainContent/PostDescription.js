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
import styles from "./maincontent.style";

const PostDescription = () => {
  return (
    <View style={styles.postInfo}>
      <Text>
        I purchased this sled two years ago and it is lightly used. I have
        reconfigured my apartment and I no longer have room for it,
        unfortunately.
      </Text>
      {/*  Image */}
      <View>
        <TouchableOpacity>
          <Image
            source={images.postedItem}
            resizeMode="cover"
            style={styles.postImgSize}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PostDescription;
