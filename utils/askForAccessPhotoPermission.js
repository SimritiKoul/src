import * as ImagePicker from 'expo-image-picker'
export default askForAccessPhotoPermission = async () => {
  const {granted} = await ImagePicker.requestMediaLibraryPermissionsAsync()
  return granted
}
