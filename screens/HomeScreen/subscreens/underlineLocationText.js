//this file contains all the functions that are used to render the decoration line under the location text whenever we hover on it
import { locationText as styles } from "../css"
//when the user's finger does a long press on the location text
export const handleLocationTextFocused = (setIsFocusHook) => (
  setIsFocusHook(true)
)
//when the user's finger moves away from the location text
export const handleLocationTextBlurred = (setIsFocusHook) => (
  setIsFocusHook(false)
)
//render the specific style for location text when it is hovered and when it is not
export const getSpecificStyleForlocationText = (isFocus) => {
  if (isFocus) return [styles.locationText, { textDecorationLine: 'underline' }]
  else return styles.locationText
}