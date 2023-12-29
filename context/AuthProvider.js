/**
 * @file AuthContext.js
 * @description This file defines a custom authentication context for managing user authentication state.
 * The context provides access to authentication-related data and functions throughout the app.
 */
import React, {useState, createContext, useContext, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
/**
 * @context AuthContext
 * @description A context to manage user authentication state.
 * Provides access to isLoggedIn, inLoginPage variables,
 *  and loggingIn, switchPage functions.
 * isLogggedIn: a state variable that checks if the user is in the login screen 
 * userInfo: a state variable that stores userInfo after they logged in
 * userToken: a state variable that stores userToken after their credentials are verified and given the token 
 * isLoading: show the loading process
 * loggingIn: a function that direct user to homepage after their credential is verified
 * switchPage: a function that toggle between the login page and sign up page 
 * loggedIn: a function that will be run when the user first opens the app and helps figure out if the user has already logged in. If they have logged in before but haven't signed out, send them straight to the homepage. If they have logged out and haven't logged in for a long time, make them log in again.
 * saveUserAuth: a function that save user's token and info to asynstorage. These two infos will be utilized throughout the app to populate pages or autheticate with backend
 */
const AuthContext = createContext()

/**
 * @customHook useAuth
 * @description A custom hook to access the AuthContext and retrieve authentication-related data and functions.
 * @returns {object} An object containing isLoggedIn, loggingIn, inLoginPage, and switchPage.
 */ 
export const useAuth = () => useContext(AuthContext)

/**
 * @component AuthProvider
 * @description A component that wraps the app with the AuthContext.Provider.
 * It manages user authentication state and exposes relevant data and functions to all the children that being wrapped inside.
 * @param {object} props - The children components to be wrapped with the AuthContext.Provider.
 * @returns {JSX.Element} The wrapper components.
 */
export const AuthProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isLoggedIn, setLoggedIn] = useState(false)
  const [inLoginPage, setInLoginPage] = useState(true)
  const [userInfo, setUserInfo] = useState(null)
  const [userToken, setUserToken] = useState(null)
  const loggedIn = async () => {
    try {
      // check if users have token or their token is still active
      setIsLoading(true)
      let token = await AsyncStorage.getItem('userToken')
      let info = await AsyncStorage.getItem('userInfo')
      //console.log(token, info)
      info = JSON.parse(info)
      if (token && info) {
        //if token and userInfo are valid
        //update userInfo and userToken state variables
        setUserInfo(info)
        setUserToken(token)
        //auto log in user
        loggingIn()
      }
      setIsLoading(false)
    }
    catch(err) {
      console.log('Error', err)
    }
  }

  const saveUserAuth = async (token, info) => {
    await AsyncStorage.setItem('userToken', token)
    await AsyncStorage.setItem('userInfo', JSON.stringify(info))
    setUserInfo(info)
    setUserToken(token)
  }

  const logout = async () => {
    //start the loading state
    setIsLoading(true)
    //set user token to null
    setUserToken(null)
    //set user info to null
    setUserInfo(null)
    ///remove userToken and userInfo out of AsyncStorage, making user to login again
    await AsyncStorage.removeItem('userToken')
    await AsyncStorage.removeItem('userInfo')
    //move user back to the login signup screen
    loggingOut()
    setIsLoading(false)
  }

  const loggingIn = () => setLoggedIn(true)
  const loggingOut = () => setLoggedIn(false)
  const switchPage = () => setInLoginPage(prev => !prev)


  // run this function to determine whether the use has logged in everytime they open the app
  useEffect(() => {
    loggedIn()
  },[])

  return (
    <AuthContext.Provider value={{isLoggedIn, loggingIn, inLoginPage, switchPage, isLoading, loggedIn, setIsLoading, userInfo, userToken, saveUserAuth, logout, setUserInfo}}>
        {children}
    </AuthContext.Provider>
  );
}