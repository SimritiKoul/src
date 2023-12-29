//this file will make a container component which wraps around all the content of the SettingLanguage screen
import React, {useState} from 'react';
import { RadioButton } from 'react-native-paper';
const SettingLanguageContainer = ({children, firstVal}) => {
  //this variable will store the selected laguage
  const [selectedLanguage, setSelectedLanguage] = useState(firstVal);
  //when we select a new language, the selectedLanguage variable will be set to the new language
  const handleLanguageSelection = (language) => {
    setSelectedLanguage(language);
  };
  return (
    // RadioButton is the component from 'react-native-paper', which helps to create the setting language screen without needing to write a lot of codes.
    <RadioButton.Group onValueChange={newLang => handleLanguageSelection(newLang)} value={selectedLanguage}>
        {children}
    </RadioButton.Group>
  )
}
export default SettingLanguageContainer;