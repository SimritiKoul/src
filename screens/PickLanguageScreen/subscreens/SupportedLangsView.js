//this file will use the language card component to create a view of all supported languages 
import React from 'react';
import { View, Image } from 'react-native';
import afghanistanflag from '../../../images/countryflags/afghanistanflag.png'
import americanflag from '../../../images/countryflags/americanflag.png'
import brazilflag from '../../../images/countryflags/brazilflag.png'
import franceflag from '../../../images/countryflags/franceflag.png'
import germanyflag from '../../../images/countryflags/germanyflag.png'
import italianflag from '../../../images/countryflags/italianflag.png'
import japanflag from '../../../images/countryflags/japanflag.png'
import russiaflag from '../../../images/countryflags/russiaflag.png'
import spainflag from '../../../images/countryflags/spainflag.png'
import turkeyflag from '../../../images/countryflags/turkeyflag.png'
import ukraineflag from '../../../images/countryflags/ukraineflag.png'
import unitedarabflag from '../../../images/countryflags/unitedarabflag.png'
import LanguageCard from './LanguageCard';
import { supportedLangsViewStyle as styles } from '../css';
const SupportedLangsView = ({navigation}) => {
      //list of all supported languages in this app along with the image's uri
      const supportedLanguages = [
            {name: 'English', picture: Image.resolveAssetSource(americanflag).uri},
            {name: 'Italiano', picture: Image.resolveAssetSource(italianflag).uri},
            {name: 'عربي', picture: Image.resolveAssetSource(unitedarabflag).uri},
            {name: 'پښتو', picture: Image.resolveAssetSource(afghanistanflag).uri},
            {name: 'Português', picture: Image.resolveAssetSource(brazilflag).uri},
            {name: 'Deutsch', picture: Image.resolveAssetSource(germanyflag).uri},
            {name: 'Español', picture: Image.resolveAssetSource(spainflag).uri},
            {name: 'Français', picture: Image.resolveAssetSource(franceflag).uri},
            {name: 'Türkçe', picture: Image.resolveAssetSource(turkeyflag).uri},
            {name: 'українська', picture: Image.resolveAssetSource(ukraineflag).uri},
            {name: '日本語', picture: Image.resolveAssetSource(japanflag).uri},
            {name: 'русский', picture: Image.resolveAssetSource(russiaflag).uri},
      ]
      //render a view of supported langs
      return (
            <View style={styles.supportedLangsContainer}>
                  <View style={styles.innerViewOfSupportedLangs}>
                  {supportedLanguages.map((language, i) => 
                                                            <LanguageCard picture={language.picture} languageName={language.name} key={i.toString()} navigation={navigation}/>)}
                  </View>
            </View>
      );
}
export default SupportedLangsView;