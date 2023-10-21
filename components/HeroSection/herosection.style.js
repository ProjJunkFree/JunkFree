import { StyleSheet } from "react-native";
import { Font } from "expo";

import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginRight: SIZES.small,
    borderRadius: SIZES.xSmall,
    height: "120%",
    width: "50%",
  },
  availableLabel: {
    color: COLORS.lightWhite,
    backgroundColor: COLORS.junkFree,
    borderRadius: SIZES.xSmall,
    paddingHorizontal: 8,
    fontSize: 12,
  },

  headerTitle: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.primary,
    marginTop: SIZES.xSmall,
  },

  filterSize: {
    width: 25,
    height: 25,
  },
  postBtn: {
    width: 60,
    height: 35,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.junkFree,
  },

  postText: {
    color: COLORS.lightWhite,
  },

  heroSectionContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: COLORS.lightWhite,
    padding: 20,
  },

  searchInput: {
    fontFamily: FONT.regular,
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.medium,
    paddingLeft: 15,
  },

  tabsContainer: {
    width: "100%",
    marginTop: SIZES.medium,
  },
  tab: (activeJobType, item) => ({
    paddingVertical: SIZES.small / 2,
    paddingHorizontal: SIZES.small,
    borderRadius: SIZES.medium,
    borderWidth: 1,
    borderColor: activeJobType === item ? COLORS.lightWhite : COLORS.gray2,
    backgroundColor:
      activeJobType === item ? COLORS.junkFree : COLORS.lightWhite,
  }),
  tabText: (activeJobType, item) => ({
    fontFamily: FONT.medium,
    color: activeJobType === item ? COLORS.lightWhite : COLORS.gray2,
  }),
});

export default styles;
