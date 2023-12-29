//this file will make a view component which displays a list of supported languages of this app and allows user to click and pick their preffered language
import React from 'react';
import { RadioButton } from 'react-native-paper';
import { settingsLanguage as styles } from '../css';
const SettingLanguageOpt = ({language, i}) => (
  // RadioButton is the component from 'react-native-paper', which helps to create the setting language screen without needing to write a lot of codes.
  <RadioButton.Item label={language.label} value={language.value} style={styles.rowContainer} labelStyle={styles.languageText}/>
)
export default SettingLanguageOpt;