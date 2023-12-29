// for sign up screen
import axios from "axios";
import { SIGNUP_ROUTE } from "./apiRoutes";
export default signUpNewAccount = async (name, email, password, switchPage) => {
  //Move to login page after sign up account successfully
  //api url
  console.log(name, email, password)
  console.log(SIGNUP_ROUTE)
  try {
    //Send post request here
    const response = await axios.post(SIGNUP_ROUTE,
      {
        name: name,
        email: email,
        password: password
      }
    )
    switchPage()

  } catch (err) {
    alert("Can't signup account")
  }
};