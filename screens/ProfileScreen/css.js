import { StyleSheet } from "react-native"
import {colors, fontScale} from '../../base'
export const profileContainer = StyleSheet.create({
  profileContainer: {
    flex: 1,
    backgroundColor:colors.white
  },
})
export const imageContainer = StyleSheet.create({
  imgContainer: {
    flex: 1,
    backgroundColor: colors.almostwhite,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
})

export const profileOptionsContainer = StyleSheet.create({
  profileOptContainer: {
    flex: 1.2,
    paddingHorizontal: 20,
  }
})

export const editBtn = StyleSheet.create({
  editButton: {
    backgroundColor: colors.gold,
    borderRadius: 8,
    marginTop: '3%',
  },
  editButtonTxt: {
    color: colors.white,
    fontSize: 15 / fontScale,
  }
})

export const profileOption = StyleSheet.create({
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: '7%',
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingHorizontal:'2%',
    width:'100%',
    height:'20%'
  },
  optionText: {
    fontSize: 16 / fontScale,
    fontWeight:'400',
    color: colors.black
   // right:'100%'
  },
  optionTextContainer: {
    width:'70%', 
    height: '100%',
    justifyContent:'center'
  }
  
})