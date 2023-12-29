/**
 * @file Slider.js
 * @description This file contains a component for a slider that allows users to navigate between the login and sign-up screens.
 */

import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import { slider as styles } from '../css';
import { useAuth } from '../../../context/AuthProvider';
const Slider = () => {
  //get a authetication variable and function from AuthProvider context
  const {inLoginPage, switchPage} = useAuth()
  return (
    <View style={styles.sliderBox}>
       {/* Login slider option */}
      <TouchableOpacity 
                      style={inLoginPage ? styles.clickedSlider : styles.nonClickedSlider } 
                      onPress={
                        //switch to signup page
                        switchPage
                        }> 
        <Text 
                      style={inLoginPage ? styles.clickedSliderText : styles.nonClickedSliderText}>       
                              Log in
        </Text>
      </TouchableOpacity>

      {/* Sign Up slider option */}
      <TouchableOpacity
                        onPress={
                              //switch to login page
                              switchPage
                            }
                        style={!inLoginPage ? styles.clickedSlider : styles.nonClickedSlider}
      >
        <Text 
                      style={!inLoginPage ? styles.clickedSliderText : styles.nonClickedSliderText}>      
                              Sign Up
        </Text>
      </TouchableOpacity>
  </View>)
}
export default Slider;