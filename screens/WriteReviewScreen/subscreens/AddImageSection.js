//this file will make an image section on the Write Review screen 
import React, {useState} from 'react';
import SectionContainer from './SectionContainer';
import SectionTitle from './SectionTitle';
import ImageInputList from '../../../components/ImageInputList';
import { imageInput as styles } from '../css';
import addImageToImageList from '../../../utils/addImageToImageList';
import removeImageFromImageList from '../../../utils/removeImageFromImageList';
const AddImageSection = () => {
  const [imageUris, setImageUris] = useState([]) //list of picked images
  const addImageUri = (uri) => addImageToImageList(imageUris, setImageUris, uri)
  const removeImageUri = (uri) => removeImageFromImageList(imageUris, setImageUris, uri)
  return (
    <SectionContainer>
      {/* section title */}
      <SectionTitle title={'Add Image'}/>
       {/* add image field */}
      <ImageInputList imageUris={imageUris} onAddImage={addImageUri} onRemoveImage={removeImageUri} style={styles.imageInput}/>
    </SectionContainer>
  );
}
export default AddImageSection;