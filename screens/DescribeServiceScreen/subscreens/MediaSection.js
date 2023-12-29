/**
 * MediaSection component.
 * Renders the media section for the describeService page.
 *
 * @component
 * @returns {JSX.Element} MediaSection component
 */

import React from 'react';
import MediaContentContainer from './mediaSubscreens/MediaContentContainer';
import SectionContainer from './SectionContainer';
import SectionTitle from './SectionTitle';
import InputFieldForMedia from './mediaSubscreens/InputFieldForMedia';
import { media as styles } from '../css';
import { useResourceContext } from '../../../context/ResourceProvider';
import updateResource from '../../../utils/updateResource';
const MediaSection = () => {
  //get the resource-state variable and function to update new value to state variable from ResourceProvider context
  const {resource, dispatch} = useResourceContext()

  return (
    <SectionContainer style={styles.mediaSection}>
      <SectionTitle 
                    title={'3 Media'}/>
      <MediaContentContainer>
        {/* input field for website */}
        <InputFieldForMedia 
                    mediaicon={'globe-sharp'} 
                    placeholder={'www.https://myweb'} 
                    value={resource.website} 
                    onChangeText={(newText) => {
                        updateResource(dispatch, {field: 'website', value: newText})
                    }}/>
        {/* input field for phone number */}
        <InputFieldForMedia 
                    mediaicon={'phone'} 
                    placeholder={'777-777-7777'} 
                    value={resource.phoneNumber} 
                    onChangeText={(newText) => {
                        updateResource(dispatch, {field: 'phoneNumber', value: newText})
                    }}/>
      </MediaContentContainer>
    </SectionContainer>
  );
}
export default MediaSection;