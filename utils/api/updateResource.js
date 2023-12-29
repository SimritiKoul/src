import axios from "axios";
import { UPDATE_RESOURCE_ROUTE } from "./apiRoutes";
import clearResourceData from "../clearResourceData";
export default updateResource = async (resource, userToken, resourceId, navigation, dispatch) => {
  try {
    console.log(resource)
    console.log(resourceId)
    const response = await axios.put(UPDATE_RESOURCE_ROUTE, {
      resource: {...resource},
      resourceid: resourceId

    }, {
      headers: {
        'Authorization': `Bearer ${userToken}`
      }
    } )
    //clear resource-state variable after update
    clearResourceData(dispatch)
    navigation.navigate('Published Service')

  } catch(err) {
    console.log(err)
    alert('Failed to update resource')
  }
}

