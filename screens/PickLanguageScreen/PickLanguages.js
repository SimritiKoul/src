import React from 'react';
import PickLanguageBtn from './subscreens/PickLanguageBtn';
import PickLanguageContainer from './subscreens/PickLanguageContainer';
import SupportedLangsView from './subscreens/SupportedLangsView';
import Title from './subscreens/Title';
const PickLanguages = ({navigation}) => {
  return (
    <PickLanguageContainer>
      {/* Title */}
      <Title/>
      {/* Supported Languages View */}
      <SupportedLangsView navigation={navigation}/>
      {/* Button */}
      <PickLanguageBtn navigation={navigation}/>
    </PickLanguageContainer>
   
  );
}
export default PickLanguages;