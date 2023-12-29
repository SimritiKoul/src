import { StyleSheet } from "react-native";
import {colors, fontScale} from '../../base'
export const settingConnectedContainer = StyleSheet.create({
  settingConnectedcontainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
})
export const settingConnectedOpt = StyleSheet.create({
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 21,
    borderBottomWidth: 1,
    borderBottomColor: colors.mediumgray,
    paddingHorizontal:12
  },
  text: {
    fontSize: 18 / fontScale,
    fontWeight:'400'
  },
})