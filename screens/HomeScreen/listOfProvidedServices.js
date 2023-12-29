/**
 * Provided services of the app
 */

import { Image } from 'react-native'
import shelterPicture from '../../images/shelterIcon.png'
import healthPicture from '../../images/healthIcon.png'
import communityPicture from '../../images/communityIcon.png'
import educationPicture from '../../images/educationIcon.png'
import employmentPicture from '../../images/employmentIcon.png'
import foodPicture from '../../images/foodIcon.png'

//image's uri of the provided services
const shelterImageUri = Image.resolveAssetSource(shelterPicture).uri
const healthImageUri = Image.resolveAssetSource(healthPicture).uri
const communityImageUri = Image.resolveAssetSource(communityPicture).uri
const foodImageUri = Image.resolveAssetSource(foodPicture).uri
const educationImageUri = Image.resolveAssetSource(educationPicture).uri
const employmentImageUri = Image.resolveAssetSource(employmentPicture).uri

export const providedServices = [
  {name: "Shelter", urlImage: shelterImageUri, title:'Shelter'},
  {name: "Education", urlImage: educationImageUri, title:'Education' },
  {name: "Community", urlImage: communityImageUri, title:'Community' },
  {name: "FoodResource", urlImage: foodImageUri, title:'Food Resources' },
  {name: "Employment", urlImage: employmentImageUri,title:'Employment'},
  {name: "Health", urlImage: healthImageUri, title:'Health' }
]


