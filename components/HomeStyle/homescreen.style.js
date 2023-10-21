import { StyleSheet } from "react-native";
import { Font } from "expo";

import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  userName: {
    fontSize: SIZES.large,
    color: COLORS.secondary,
  },
  mainLogoSize: {
    width: 80,
    height: 80,
  },

  emailIcon: {
    width: 40,
    height: 40,
  },
  welcomeMessage: {
    fontSize: SIZES.xLarge,
    color: COLORS.primary,
    marginTop: 2,
  },
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 70,
    backgroundColor: COLORS.lightWhite,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 15,
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginRight: SIZES.small,
    borderRadius: SIZES.medium,
    height: "70%",
    position: "relative",
  },
  absoluteImg: {
    position: "absolute",
    top: 8,
    width: 20,
    height: 20,
    left: 10,
  },
  searchInput: {
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.medium,
    paddingLeft: 35,
  },
  searchBtn: {
    width: 50,
    height: "100%",
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  searchBtnImage: {
    width: "50%",
    height: "50%",
    tintColor: COLORS.white,
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
    borderColor: activeJobType === item ? COLORS.secondary : COLORS.gray2,
  }),
  tabText: (activeJobType, item) => ({
    color: activeJobType === item ? COLORS.secondary : COLORS.gray2,
  }),
  topHeaderContainer: {
    backgroundColor: COLORS.backgroundColor,
    position: "relative",
  },
});

export default styles;
