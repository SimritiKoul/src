import { StyleSheet } from "react-native";
import { fontScale, colors } from "../../base";
export const writeReviewPageContainer = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: "3.58%",
    backgroundColor: colors.white,
  },
})
export const sectionTitle = StyleSheet.create({
  title: {
    fontSize: 20 / fontScale,
    fontWeight: "bold",
    
  },
})

export const starRating = StyleSheet.create({
  starContainer: {
    display: "flex",
    flexDirection: "row",
    
  },
  starButton: {
    marginRight: "1%",
  },
})

export const sectionContainer = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    justifyContent:'center'
  }
})

export const reviewTextInput = StyleSheet.create({
  Txtinput: {
    width: '100%',
    height: '80%',
    borderRadius: 5,
    backgroundColor: "#F4F4F4",
    marginTop: "3%",
    padding: "3%",
  },
  remainingChars: {
    position: "absolute",
    bottom:'4%',
    alignSelf:'flex-end',
    color: colors.lightdark,
    fontSize: 12,
  },
})

export const submitBtn = StyleSheet.create({
  submitButton: {
    alignSelf: "center",
    width: "85%",
    height: "30%",
    backgroundColor: colors.appBtn
  },
  submitText: {
    color: colors.white,
    fontSize: 24 / fontScale,
    fontWeight: "bold",
    paddingTop:'4%'
  },
  contentBtn: {
    width:'100%'
  }
})

export const imageInput = StyleSheet.create({
  imageInput: {
    marginTop:'3%'
  }
})