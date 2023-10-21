import { StyleSheet } from "react-native";
import { Font } from "expo";

import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  availableLabel: {
    color: COLORS.lightWhite,
    backgroundColor: COLORS.junkFree,
    borderRadius: SIZES.xSmall,
    paddingHorizontal: 8,
    fontSize: 12,
  },

  tab: (activeJobType, item) => ({
    paddingHorizontal: 10,
    paddingTop: 2,
    paddingBottom: 2,
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
