import axios from "axios"
import { GET_PUBLISHEDRESOURCES_ROUTE } from "./apiRoutes"
export default getPublishedResources = async (userToken, setPublishedResources) => {
  try {
    const response = await axios.get(GET_PUBLISHEDRESOURCES_ROUTE, {
      headers: {
        'Authorization': `Bearer ${userToken}`
      }
    })
    // const publishedResources = response.data.data.resources
    // return publishedResources
    setPublishedResources(response.data.data.resources)
  } catch(err) {
    console.log(err)
    
  }
}