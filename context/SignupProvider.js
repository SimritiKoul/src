/**
 * @file SignupProvider.js
 * @description This file defines a context provider and custom hook for managing state variables used for user signup.
 */
import React, {useState, createContext, useContext, useRef} from 'react';

/**
 * @constant SignupContext
 * @description The context to store state variables related to user signup.
 * name: the value of the textinput for name in the signup page
 * email: the value of the textinput for email in the signup page
 * password: the value of the textinput for password in the signup page
 * confirmPassword: the value of the textinput for the confirmPassword in the signup page
 */
const SignupContext = createContext()

/**
 * @function useSignupContext
 * @description A custom hook to access the context value from SignupContext.
 * @returns {object} The context value containing state variables for user signup.
 */
export const useSignupContext = () => useContext(SignupContext)

/**
 * @component SignupProvider
 * @description A component that wraps the app with the SignupContext.Provider.
 * It manages signup-related state and exposes relevant data and function to the the children that being wrapped inside.
 * @param {ReactNode} children - The child components to be wrapped by the provider.
 * @returns the wrapper component
 */
export const SignupProvider = ({children}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <SignupContext.Provider value={{email, setEmail, password, setPassword, name, setName, confirmPassword, setConfirmPassword}}>
        {children}
    </SignupContext.Provider>
  );
}
