//for login page
import axios from "axios";
import { LOGIN_ROUTE } from "./apiRoutes";

//Official Implementation - Lines 6-27
export default handleLogin = async (email, password, loggingIn, saveUserAuth, setIsLoading) => {
  
//api url
  try {
    setIsLoading(true)
    //Send post request here
    const response = await axios.post(LOGIN_ROUTE, {
      email,
      password
    })
    const userInfo = response.data.data.client
    const token = response.headers.authorization.split(' ')[1]
    saveUserAuth(token, userInfo)
    loggingIn()
    setIsLoading(false)

  } catch (err) {
    alert("Login failed")
    setIsLoading(false)

  }
};

//Implementation for Front End testing without Back End Access - Lines 30-37
/*export default handleLogin = (email, password, loggingIn, saveUserAuth, setIsLoading) => {
  try {
    console.log(email, password)
    loggingIn()
  } catch(err) {
    console.log(err)
  }
};*/