import axios from 'axios';
import { REMOVE_BOOKMARKED_RESOURCE } from './apiRoutes';

const removeBookmarkedResources = async (resourceId, userToken) => {
    try {
        const response = await axios.delete(
            REMOVE_BOOKMARKED_RESOURCE,
            {
                headers: {
                    Authorization: `Bearer ${userToken}`
                },
                data: {
                    resourceId
                }
            }
        );

        if (response.status === 200 && response.data.data.msg === "Bookmark successfully deleted") {
            return { success: true, message: response.data.data.msg };
        } else {
            return { success: false, message: "Delete client bookmark failed" };
        }
    } catch (error) {
        return { success: false, message: "An error occurred while deleting the bookmark" };
    }
};

export default removeBookmarkedResources;
