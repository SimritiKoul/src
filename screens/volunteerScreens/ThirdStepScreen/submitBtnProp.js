//whenever using button component from react-native-paper, it requires some props, and the below object contains all the necessary props to make the button (published btn) in the Third Step screen and (get started btn) in the Get Started screen
import { colors } from "../../../base"
import { submitBtn as styles } from "./css"
export const btnSettings = {
  mode: "outlined",
  buttonColor: colors.appBtn,
  textColor: colors.white,
  style: styles.publishBtn,
  labelStyle: styles.publishBtnText
}