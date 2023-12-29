//Props for making User Profile picture and edit btn
import img from '../../images/Reslogo.png'
import { Image } from 'react-native'
import { colors } from '../../base'
const profileUrl = Image.resolveAssetSource(img).uri
export const avatarSettings = {
  source : profileUrl, 
  size: 150
}

export const editBtnSettings = {
  icon: 'pencil',
  size: 30,
  color: colors.white,  
  style: {
    backgroundColor:colors.gold,
  }
}