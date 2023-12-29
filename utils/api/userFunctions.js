//for login page
import axios from "axios";
import { UPDATE_USER_ROUTE } from "./apiRoutes";

const updateUser = async (name, phonenumber, userToken, userInfo) => {
  try {
    console.log(userInfo)
    //start loading state 
    //Send post request here
    const response = await axios.post(UPDATE_USER_ROUTE, {
        email: userInfo.email,
        password: userInfo.password,
        name: name,
        phonenumber: phonenumber
    }, {
      headers: {
        'Authorization': `Bearer ${userToken}`
      }
    });
    //setUserInfo(response.data.client)
    
  } catch (error) {
    console.log(error)
    alert('Failed to update user')
  }
};


const getUserByID = async (userToken) => {
  try {
    //Send post request here
    const response = await axios.get(
      `${BASE_URL}api/v1/client/get`,
      null,
      {
        headers: {
          Authorization: `${userToken}`
        }
      });

    //check if there's an error, else return it
    if (response.status === 200) {
      return response.body.data.client;
    } else {
      console.log(response.data.error);
    }
  } catch (error) {
    console.log("Failed to get user: " + error.message);
  }
};



export { updateUser, getUserByID };
