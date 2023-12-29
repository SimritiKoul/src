//SettingsLanguage screen. This is the screen that the user will see when they run the application
import React from 'react';
import { languageOptions } from './listOfLanguagesOpt';
import SettingLanguageContainer from './subscreens/SettingLanguageContainer';
import SettingLanguageOpt from './subscreens/SettingLanguageOpt';
const SettingsLanguage = () => (
  <SettingLanguageContainer firstVal={languageOptions[0].value}>
    {languageOptions.map((language, i) => <SettingLanguageOpt language={language} key={i.toString()}/>)}
  </SettingLanguageContainer>
)
export default SettingsLanguage;