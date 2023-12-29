/**
 * @file LoginContext.js
 * @description This file defines a custom login context for managing login-related state.
 * The context provides access to email, password, password visibility, and related functions.
 */

import React, {useState, createContext, useContext} from 'react';

/**
 * @context LoginContext
 * @description A context to manage login-related state.
 * Provides access to email, password, passwordInvisible, and showPassword function.
 * email: value of the textinput for email in the login page
 * password: value of the textinput for password in the login page
 * passwordInvisibility: a status of whether the password is hidden or not
 * showPassword: a function that toggle between show password and hide password
 */

const LoginContext = createContext()

/**
 * @customHook useLoginContext
 * @description A custom hook to access the LoginContext and retrieve login-related data and functions.
 * @returns {object} An object containing email, setEmail, password, setPassword, showPassword, and passwordInvisible.
 */
export const useLoginContext = () => useContext(LoginContext) 

/**
 * @component LoginProvider
 * @description A component that wraps the app with the LoginContext.Provider.
 * It manages login-related state and exposes relevant data and functions to the children that being wrapped inside.
 * @param {object} props - The children components to be wrapped with the LoginContext.Provider.
 * @returns {JSX.Element} The wrapper components.
 */
export const LoginProvider = ({children}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordInvisible, setPasswordInvisible] = useState(true)
  const showPassword = () => setPasswordInvisible(prev => !prev) 
  return (
    <LoginContext.Provider value={{email, setEmail, password, setPassword, showPassword, passwordInvisible}}>
        {children}
    </LoginContext.Provider>
  );
}
