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
import PostDescription from "./PostDescription";

const MainContent = () => {
  return (
    <View
      style={{
        flex: 1,
        padding: SIZES.medium,
        marginTop: SIZES.xSmall,
        backgroundColor: COLORS.lightWhite,
      }}
    >
      <View style={styles.postContainer}>
        <View style={styles.profileContainer}>
          <TouchableOpacity>
            <Image source={images.profile} style={styles.profileSize} />
          </TouchableOpacity>
          <View>
            <Text style={styles.profileName}>JunkFree</Text>
            <View style={styles.profileInfoContainer}>
              <Text style={styles.dateCreated}>1 hr ago</Text>
              {/* Label ( Available (Offer) | Seeking (Wanter)) */}
              <Text style={styles.availableLabel}>Available</Text>
            </View>
          </View>
        </View>
        {/* Post Description and Image */}
        <PostDescription />
        {/* Reaction, Comment, Share */}
        <View style={styles.reactionContainer}>
          <TouchableOpacity>
            <Image source={icons.heart} style={styles.heart} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={icons.commentOutline} style={styles.heart} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={icons.shareOutline} style={styles.heart} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MainContent;
