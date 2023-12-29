//provided services
import shelterPicture from '../../../images/shelterIcon.png'
import healthPicture from '../../../images/healthIcon.png'
import communityPicture from '../../../images/communityIcon.png'
import educationPicture from '../../../images/educationIcon.png'
import employmentPicture from '../../../images/employmentIcon.png'
import foodPicture from '../../../images/foodIcon.png'
import { Image } from 'react-native'
const shelterImageUri = Image.resolveAssetSource(shelterPicture).uri
const healthImageUri = Image.resolveAssetSource(healthPicture).uri
const communityImageUri = Image.resolveAssetSource(communityPicture).uri
const foodImageUri = Image.resolveAssetSource(foodPicture).uri
const educationImageUri = Image.resolveAssetSource(educationPicture).uri
const employmentImageUri = Image.resolveAssetSource(employmentPicture).uri
export const listOfServiceTypes = [
      {name: "Shelter", urlImage: shelterImageUri},
      {name: "Education", urlImage: educationImageUri},
      {name: "Community", urlImage: communityImageUri},
      {name: "FoodResource", urlImage: foodImageUri},
      {name: "Employment", urlImage: employmentImageUri},
      {name: "Health", urlImage: healthImageUri}
]