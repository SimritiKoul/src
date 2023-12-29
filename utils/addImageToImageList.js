//this function will add a new image to the existing image list
//listOfImages: a state variable which its value is the list of added images
//setImageHool: a function provided by useState to set the new value to the listOfImages state variable
//newImage: new image uri
export default addImageToImageList = (listOfImages, setImageHook, newImage) => setImageHook([...listOfImages, newImage])