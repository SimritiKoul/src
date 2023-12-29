import { StyleSheet } from "react-native";
import {colors, fontScale} from "../../base";
export const reviewContainer = StyleSheet.create({
  container: {
    flex: 1, 
     backgroundColor:colors.white
  }
})
export const resourceAverageRating = StyleSheet.create({
  container: {
    flex:1, 
    justifyContent:'center', 
    alignItems:'center'
  },
  starRating: {
    size: 24
  },
  text: {
    fontWeight:'300'
  }
})
export const listOfReviewsContainer = StyleSheet.create({
  container: {
    flex: 3
  }
})

export const writeReviewBtn = StyleSheet.create({
  container: {
    flex: .5, 
    alignItems:'center',
    justifyContent:'center'
  },
  btnView: {
    height:'60%', 
    width:'70%', 
    
  },
  btnText: {
    color: colors.white, 
    fontSize: 20 / fontScale , 
    fontWeight:'700',
    paddingHorizontal: '40%',
    paddingVertical:'10%'
  }

})