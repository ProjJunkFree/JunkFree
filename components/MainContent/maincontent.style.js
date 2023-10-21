import { StyleSheet } from "react-native";
import { Font } from "expo";

import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  profileSize: {
    width: 60,
    height: 60,
  },
  profileContainer: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    gap: 10,
  },
  dateCreated: {
    color: COLORS.subTitle,
  },
  profileInfoContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  postContainer: {
    borderRadius: SIZES.medium,
  },
  postInfo: {
    // padding: SIZES.large,
    paddingTop: 0,
  },
  postImgSize: {
    width: "100%",
    height: 200,
    borderRadius: SIZES.xSmall,
    marginTop: SIZES.xSmall,
  },
  availableLabel: {
    color: COLORS.lightWhite,
    backgroundColor: COLORS.junkFree,
    borderRadius: SIZES.xSmall,
    paddingHorizontal: 8,
    fontSize: 12,
  },
  profileName: {
    fontWeight: "bold",
  },
  heart: {
    width: 30,
    height: 30,
  },
  reactionContainer: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
});

export default styles;
