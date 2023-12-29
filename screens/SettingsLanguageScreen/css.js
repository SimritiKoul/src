import { StyleSheet } from "react-native";
import {fontScale, colors} from '../../base'
export const settingsLanguage = StyleSheet.create({
  rowContainer: {
    borderBottomWidth: 1,
    borderBottomColor: colors.mediumgray,
    height: 92 ,
    backgroundColor:colors.white
  },
  languageText: {
    marginLeft: '4%',
    fontSize: 18 / fontScale,
  },
})