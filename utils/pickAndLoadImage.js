import * as ImagePicker from 'expo-image-picker'
//return the uri of the selected image
export default pickAndLoadImage = (onChangeImage, imageUri) => {
  if (!imageUri) selectImage(onChangeImage)
  // if the placeholder already had image, then remove image
  else onChangeImage(null)
}

const selectImage = async (onChangeImage) => {
  try {
    //launch to user's library
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.5
    })
    //if you have picked a photo
    if (!result.canceled){
        //get the uri of that photo
        const imagePath = result.assets[0].uri
        //place that image to the placeholder
        onChangeImage(imagePath)
        return imagePath
    }
    
  } catch (error) {
    console.log('Error reading an image', error)
  }
}