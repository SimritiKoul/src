/**
 * ImageSection component.
 * Represents the section for adding images to a resource on the DescribeService page.
 *
 * @returns {React.ReactNode} - The ImageSection component.
 */

import React from 'react';
import SectionContainer from './SectionContainer';
import SectionTitle from './SectionTitle';
import ImageInputList from '../../../components/ImageInputList';
import { addImage as styles } from '../css';
import { useResourceContext } from '../../../context/ResourceProvider';
import updateImage from '../../../utils/updateImage';
const ImageSection = () => {
  //get the resource-related state variable from ResourceProvider context
  const {resource, dispatch} = useResourceContext()
  
  // An array of added images. The UI renders images based on this array.
  const imageUris = resource.images
  
  // Function to add an image. Appends the new image to the imageUris array.
  const addImageUri = (uri) => {
    updateImage(dispatch, [...imageUris, uri])
  }
  // Function to remove an image. Removes the clicked image from the imageUris array.
  const removeImageUri = (uri) => {
    updateImage(dispatch, imageUris.filter(imageUri => imageUri != uri))
  }
  return (
    <SectionContainer style={styles.addImageSection} >
      <SectionTitle 
                    title={'5 Add Image'} 
                    sectionTitleContainer={styles.addImageSectionTitleContainer}/>
      <ImageInputList 
                    imageUris={imageUris} 
                    onAddImage={addImageUri} 
                    onRemoveImage={removeImageUri}/>
    </SectionContainer>
  );
}
export default ImageSection;