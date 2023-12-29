import { StyleSheet } from "react-native"
import { fontScale, colors } from "../../base"
export const helpScreenContainer = StyleSheet.create({
  helpPageContainer: {
    flex: 1,
    backgroundColor: colors.white,
  }
})

export const title = StyleSheet.create({
  title: {
    fontSize: 26 / fontScale,
    fontWeight: "bold",
    marginLeft: 20,
  },
})

export const helpPageOpt = StyleSheet.create({
  helpPageOptContainer: {
    borderBottomWidth: 0.25,
    borderColor: colors.lightdark,
    paddingHorizontal: "4%",
  },
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 90,

    
  },
  question: {
    fontSize: 21 / fontScale,
    color: colors.darkgrey,
  },
  settingButton: {
    paddingRight: "4%",
  },
})

export const helpOptDetail = StyleSheet.create({
  detailContainer: {
    paddingBottom: 10,
    paddingRight: 5
  },
  detailText: {
    fontSize: 16 / fontScale,
    color: "black",
    marginBottom:'5%'
  }
})