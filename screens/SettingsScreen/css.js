import { StyleSheet } from "react-native"
import {colors, fontScale} from '../../base'
export const settingContainer = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  settingContainer: {
    height: '90%',
    width: '100%'
  }
})
export const settingOpt = StyleSheet.create({
  settingOptContainer: {
    flex: 1,
    borderBottomWidth: 0.25,
    borderColor: colors.lightdark,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: '7%',
    justifyContent: 'space-between',
    paddingRight: '4%'
  },
  settingOptText: {
    fontSize: 24 / fontScale
  },
  settingButton: {
    paddingRight: '4%'
  },
})