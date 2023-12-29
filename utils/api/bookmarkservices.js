//for login page
import axios from "axios";
import { GET_SAVEDRESOURCES_ROUTE, REMOVE_BOOKMARKED_RESOURCE } from "./apiRoutes";

//api url
const getbookmarkedresources = async (userToken, setSavedResources) => {
  console.log(userToken);

  try {
    //Send post request here
    const response = await axios.get(GET_SAVEDRESOURCES_ROUTE, {
      headers: {
        Authorization: `Bearer ${userToken}`
      }
    });
    //check if there's an error, else return it
    setSavedResources(response.data.clientResponse.data.userData);
  } catch (error) {
    console.log(error);
    return null;
  }
};

const removeBookmarkedResources = async (resourceId, userToken) => {

  try {
    //Send post request here
    const response = await axios.delete(REMOVE_BOOKMARKED_RESOURCE, {
        resourceId: resourceId
    }, {
      headers: {
        Authorization: `Bearer ${userToken}`
         }
  });
    console.log(response)
    //check if there's an error, else return it
    // if (response.status === 200) {
    //   return response.data.data.resources;
    // } else {
    //   console.log(response.data.error);
    // }
  } catch (error) {
    // console.log("Failed to delete bookmarked resources: " + error.message);
    // return null;
    console.log(error);
    alert("Failed to remove bookmarked resource")
  }
};

export { removeBookmarkedResources, getbookmarkedresources };
