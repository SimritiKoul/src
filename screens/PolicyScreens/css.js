import { StyleSheet } from "react-native";
import {colors, fontScale} from '../../base'
export const policyScreen = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 29,
    paddingRight: 33,
    backgroundColor: colors.white,
},
  subHeader: {
    fontSize: 18 / fontScale,
    fontWeight: 'bold',
    paddingBottom: 16,
},
  content: {
    fontSize: 16 / fontScale
  }
})