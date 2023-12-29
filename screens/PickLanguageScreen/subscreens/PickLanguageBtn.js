//this file will create a button for navigating to the login/sign up screen on the pick language screen
import React from 'react';
import {Text} from 'react-native-paper';
import { pickLanguageBtnStyle as styles} from '../css';
import {View, Pressable} from 'react-native';

const PickLanguageBtn = ({navigation}) => (
  <View style={styles.buttonContainer}>
    <Pressable mode='elevated' style={styles.button}  onPress={() => navigation.navigate('LoginSignup')}>
        <Text style={styles.buttonLabel}>
          Next
        </Text>
    </Pressable>
  </View>
 
)

export default PickLanguageBtn;