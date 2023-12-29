/**
 * @file LoginSignupScreen.js
 * @description This file represents the main screen that toggles between user login and sign up.
 */

import React from 'react';
import Container from './subscreens/Container';
import UpperPart from './subscreens/UpperPart';
import BottomPart from './subscreens/BottomPart';
import { useAuth } from '../../context/AuthProvider';
import { LoginProvider } from '../../context/LoginProvider';
import { SignupProvider } from '../../context/SignupProvider';
import SignupInputBox from './signupsubscreens/SignupInputBox';
import LoginInputBox from './loginsubscreens/LoginInputBox';

/**
 * @component LoginSignupScreen
 * @description Represents the main screen for user login and sign up.
 */
const LoginSignupScreen = () => {
  //get the state variable from AuthProvider context to determine the user's position
  const {inLoginPage} = useAuth()
  return (
  <Container>
    {/* upper part */}
    <UpperPart/>
    {/* bottom part */}
    <BottomPart/>
    {/* inputbox */}
    {inLoginPage ?
                  //if user is in the login page, render input box for login 
                  //wrap the LoginProvider around the login input box so that the login input box can access to all login-related state variables from LoginProvider
                  <LoginProvider>
                    <LoginInputBox/>
                  </LoginProvider>
                 : 
                 ////if user is in the signup page, render input box for sign up 
                 //wrap the SignupProvider around the signup input box so that the signup input box can access to all signup-related state variables from SignupProvider
                 <SignupProvider>
                    <SignupInputBox/>
                 </SignupProvider>
    }
  </Container>
  );
}
export default LoginSignupScreen;