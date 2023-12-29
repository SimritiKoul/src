/**
 * @file LoginInputBox.js
 * @description This file represents the input box section for user login.
 */

import React from "react";
import ContinueAsGuestText from "../subscreens/ContinueAsGuestText";
import ForgotPasswordText from "./ForgotPasswordText";
import InputField from "../subscreens/InputField";
import InputBox from "../subscreens/InputBox";
import LoginBtn from "./LoginBtn";
import OrText from "../subscreens/OrText";
import Slider from "../subscreens/Slider";
import SocialBox from "../subscreens/SocialBox";
import { colors } from "../../../base";
import { useLoginContext } from "../../../context/LoginProvider";
import KeyboardAvoidingWrapper from "../../../components/KeyboardAvoidingWrapper";


/**
 * @component LoginInputBox
 * @description Represents the input box section for user login.
 */

const LoginInputBox = () => {
  //get the login-related state variables from LoginProvider context
  const {email, setEmail, password, setPassword, passwordInvisible, showPassword} = useLoginContext()
  const placeHolderText = "Enter Email/Phone Number/Username";
  return (
    //wrap all the content inside the KeyboardAvoidingWrapper component so that all the textinputs in this login input box will not be overlayed on when the virtual keyboard is opened 
    <KeyboardAvoidingWrapper keyboardVerticalOffset={-200}>
      <InputBox>
          {/* the slider that used to toggle between the signup page and login page */}
          <Slider/> 
          <InputField  //input field for email
                       placeholder={placeHolderText}
                       placeholderTextColor= {colors.darkgrey}
                       value={email}
                       onChangeText={setEmail}
                       keyboardType="email-address"
                       autoCapitalize="none"
                       clearButtonMode='always'/>
          <InputField  //input field for password
                       placeholder="Password"
                       placeholderTextColor= {colors.darkgrey}
                       value={password}
                       onChangeText={setPassword}
                       secureTextEntry={passwordInvisible}
                       clearButtonMode='always'
                       passwordInvisible={passwordInvisible}
                       showPassword={showPassword}/>
          {/* 'forgot password' clickable text */}
          <ForgotPasswordText/>
          {/* login button */}
          <LoginBtn/>
          {/* 'or' text */}
          {/* <OrText/> */}
          {/*  */}
          {/* the box that renders goolgle, facebook, twitter icons */}
          {/* <SocialBox/> */}
          {/* 'continue as guess' clickable text*/}
          {/*<ContinueAsGuestText/>*/}
      </InputBox> 
    </KeyboardAvoidingWrapper>
  );
};
export default LoginInputBox;
