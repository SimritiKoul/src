import { StyleSheet } from "react-native";
import { fontScale, colors } from "../../../base";
export const previewServiceContainer = StyleSheet.create({
  previewServiceContainer: {
    flex: 1, 
    backgroundColor: colors.white
  }
})

export const title = StyleSheet.create({
  title: {
    marginLeft: '2%',
  }
})

export const submitBtn = StyleSheet.create({
  publishBtn: {
    // width:'60%',
    height: '6%',
    alignSelf:'center',
    justifyContent:'center',
    bottom:'5%',
    borderWidth: 0,
    alignItems: 'center',
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,

  },
  publishBtnText: {
    color: colors.white, 
    fontSize: 22 / fontScale,
    fontWeight:'700',
    paddingHorizontal:'4%',
    paddingVertical:'1%',
    textAlign: 'center',
  }

})