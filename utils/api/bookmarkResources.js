import axios from 'axios';
import { SAVE_RESOURCE_ROUTE } from './apiRoutes';
const bookmarkResources = async (resourceId, userToken, setIsBookmarked) => {
    try {
        console.log(resourceId)
        const response = await axios.post(
            SAVE_RESOURCE_ROUTE, 
            { resourceId: resourceId },
            {
                headers: {
                    Authorization: `Bearer ${userToken}`
                }
            }
        );  
        setIsBookmarked(true)
        // if (response.status === 200  && response.data.data.msg === 'Resource successfully bookmarked.'){
        //     return { success: true, message: response.data.data.msg};
        // } else {
        //     return { success: false, message: 'Bookmark resource failed.'}
        // }
    } catch (error) {
        console.log(error)
        alert('Failed to save resource')
    }
};

export default bookmarkResources;