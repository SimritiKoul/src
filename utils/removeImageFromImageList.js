//this function will remove the existing image from the image list
//listOfImages: a state variable which its value is the list of added images
//setImageHool: a function provided by useState to set the new value to the listOfImages state variable
//removedImage: the image uri u want to remove
export default removeImageFromImageList = (listOfImages, setImageHook, removedImage) => setImageHook(listOfImages.filter(imageUri => imageUri !== removedImage))