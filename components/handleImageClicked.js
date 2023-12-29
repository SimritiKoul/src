import askForAccessPhotoPermission from "../utils/askForAccessPhotoPermission"
import pickAndLoadImage from "../utils/pickAndLoadImage"
export default handleImageClicked = async (onChangeImage, imageUri) => {
  //ask photo access permission
  const granted = await askForAccessPhotoPermission()
  //if the access is not granted, raise an alert
  if (!granted) {
    alert('You need too enable permission')
    return
  }
  //if the access is granted, go into user's device library, pick and then load image
  pickAndLoadImage(onChangeImage, imageUri)
}