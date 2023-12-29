import axios from 'axios';
import { CREATE_RESOURCE_ROUTE } from './apiRoutes';
import clearResourceData from '../clearResourceData';
const submitResource = async (resourceInfo, userToken, navigation, dispatch) => {
  try {
    console.log(resourceInfo, userToken)
    const response = await axios.post(CREATE_RESOURCE_ROUTE, {
      ...resourceInfo
    }, {
      headers: {
        'Authorization': `Bearer ${userToken}`
      }
    })
    clearResourceData(dispatch)
    navigation.navigate('Published Message')
  }
  catch(err)
  {
    console.log(err)
    alert("Failed to create resource")
  }
}

export default submitResource;