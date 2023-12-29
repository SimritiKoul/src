//This file will create a language card component. User can click on this card component to set their preferred language in this app 
import React from 'react';
import { TouchableOpacity } from 'react-native';
import {Text,Card } from 'react-native-paper';
import {languageCardStyle as styles} from '../css'   
import renderCountryImage from './renderCountryImage';
const LanguageCard = ({picture, languageName, navigation}) => {
  return (
          <TouchableOpacity style={styles.languageCardContainer} onPress={() => navigation.navigate('LoginSignup')}>
            <Card.Title 
            title={<Text
                         style={styles.languageName}>
                            {languageName}
                    </Text>}
            left={() => renderCountryImage(picture)}
            titleStyle={styles.languageNameContainer}

            />
          </TouchableOpacity>)
}
export default LanguageCard;