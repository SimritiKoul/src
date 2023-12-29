//for login page
import axios from "axios";


//api url
const api_url = 'https://34.27.143.72/' + 'api/v1/bookmarkResources';

export default  getbookmarkedresources = async (userToken) => {

  try {
    //Send post request here
    const response = await axios.post(api_url, {userToken})
    const userInfo = response.data
    const token = response.header.token
    return {
      userToken: token,
      userInfo: userInfo
    }

  } catch (err) {
    console.log(err)

    //Use alert to alert error to user
    //alert(err.message)

  }
};