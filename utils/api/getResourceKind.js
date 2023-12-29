import axios from 'axios';
import { GET_RESOURCE_KIND } from './apiRoutes';

const getResourceKind = async (kindType) => {
    try{
        const response = await axios.post(
            GET_RESOURCE_KIND,
            { kindofresource: kindType });
        return response.data;

    } catch (error) {
        throw new Error('Error getting resource by kind: ' + error);
    }
}

export default getResourceKind;