/**
 * @file SignupInputBox.js
 * @description This file represents the input box section for user signup.
 */

import React from "react";
import ContinueAsGuestText from "../subscreens/ContinueAsGuestText";
import InputField from "../subscreens/InputField";
import InputBox from "../subscreens/InputBox";
import SignupBtn from './SignupBtn'
import OrText from "../subscreens/OrText";
import Slider from "../subscreens/Slider";
import SocialBox from "../subscreens/SocialBox";
import { colors } from "../../../base";
import { inputBox as styles } from "../css";
import { useSignupContext } from "../../../context/SignupProvider";
import KeyboardAvoidingWrapper from "../../../components/KeyboardAvoidingWrapper";

/**
 * @component SignupInputBox
 * @description Represents the input box section for user signup.
 */

const SignupInputBox = () => {
  //get the signup-related state variables from SignupProvider context
  const {name, setName, email, setEmail, password, setPassword, confirmPassword, setConfirmPassword} = useSignupContext()
  return (
    ////wrap all the content inside the KeyboardAvoidingWrapper component so that all the textinputs in this signup input box will not be overlayed on when the virtual keyboard is opened 
    <KeyboardAvoidingWrapper keyboardVerticalOffset={-100} >
      <InputBox style={styles.inputBoxForSignUp}>
          <Slider/>
          <InputField //input field for name
                      placeholder={"Enter Full Name"}
                      placeholderTextColor= {colors.darkgrey}
                      value={name}
                      onChangeText={setName}
                      autoCapitalize="none"
                      clearButtonMode='always'         
                      />
          <InputField //input field for email
                      placeholder={"Enter Email"}
                      placeholderTextColor= {colors.darkgrey}
                      value={email}
                      onChangeText={setEmail}
                      keyboardType="email-address"
                      autoCapitalize="none"
                      clearButtonMode='always'
                      />
          <InputField //input field for     password
                      placeholder="Password"
                      placeholderTextColor= {colors.darkgrey}
                      value={password}
                      onChangeText={setPassword}
                      secureTextEntry
                      clearButtonMode='always'
                      />
          <InputField //input field for confirmpassword
                      placeholder="Confirm Password"
                      placeholderTextColor= {colors.darkgrey}
                      value={confirmPassword}
                      onChangeText={setConfirmPassword}
                      secureTextEntry
                      clearButtonMode='always'
                      />
          {/* signup button */}
          <SignupBtn/>
          {/* 'or' text */}
          {/* <OrText/> */}
          {/* the box that renders goolgle, facebook, twitter icons */}
          {/* <SocialBox/> */}
          {/* 'continue as guess' clickable text*/}
          <ContinueAsGuestText/>
        </InputBox>
    </KeyboardAvoidingWrapper>
  );
};
export default SignupInputBox;
