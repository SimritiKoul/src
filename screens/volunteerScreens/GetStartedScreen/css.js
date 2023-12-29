import { StyleSheet } from "react-native";
import { colors, fontScale } from "../../../base";
export const instructionCard = StyleSheet.create({
  container: {
    padding:'2%', 
    height:'20%', 
    width:'100%', 
    marginBottom:'2%',
  },
  title: {
    fontSize: 18 / fontScale,
    fontWeight:'700',
  },
  subTitle: {
    fontWeight:'300', 
    fontSize: 12 / fontScale, 
    paddingVertical:'2%',
    left:'7%'
  },
  image: {
    height: '80%', 
    width: 130
  },
  leftText: {
    fontSize: 20 / fontScale, 
    fontWeight:'700',
 

  }
})

export const screenTitle = StyleSheet.create({
  title: {
    fontWeight: '600',
    marginLeft:'4%'
  }
})

export const getStartedContainer = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'space-around',
    backgroundColor:colors.white
  }
})