//This file will contain all color references as well as several libraries that will be used repeatedly throughout the app.
import { PixelRatio } from "react-native"
/////////////////////////////////////////////////////////////
//fontScale
//this function will return the font scale of the user's device
//the returned property of this function will make the text resizes automatically based on the device's fontSize preference
export const fontScale = PixelRatio.getFontScale()
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
//Colors
//an object of color references
export const colors = {
  lightorange: '#F78154',
  white: '#FFFFFF',
  darkorange: '#F24E1E',
  lightgray: '#C3C2C2',
  lightdark: '#4E4E4E',
  green: '#337155',
  orange: '#E87F10',
  transparent: "transparent",
  lightpink: '#ffe4df',
  switchOff: '#AD2525',
  switchOn: '#0F993E',
  mediumgray:'#D9D9D9',
  black: '#000000',
  green: '#337155',
  appBtn: '#94CF49',
  darkgrey: '#2A3036',
  gold: '#FCD804',
  almostwhite: '#FCFCEF'
}
/////////////////////////////////////////////////////////////


