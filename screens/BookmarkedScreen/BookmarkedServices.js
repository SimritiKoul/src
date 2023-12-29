//Bookmarked service screen
import React, { useEffect, useState } from 'react';
import img from '../../images/Dummyresource.png';
import BookmarkedScreenContainer from './subscreens/BookmarkedScreenContainer';
import BookmarkedCard from './subscreens/BookmarkedCard';

//mockup data for testing purpose (Later on, this data will be retrieved from database)
import { ScrollView } from 'react-native';
import { useAuth } from '../../context/AuthProvider';
import {getbookmarkedresources} from '../../utils/api/bookmarkservices'

// ... (other imports)

const BookmarkedServices = () => {
    const {userToken} = useAuth()
    const [savedResources, setSavedResources] = useState([]);

    useEffect(() => {
        // const getSavedResources = async () => {
        //     try {
        //         const resources = await getbookmarkedresources(userToken, setSavedResources);
        //         setSavedResources(resources);
        //     } catch (error) {
        //         console.error("Error fetching saved resources:", error);
        //     }
        // };

        // getSavedResources();
        getbookmarkedresources(userToken, setSavedResources)
    }, []); // Empty dependency array to run the effect only once

    // Rest of your code

    // if (savedResources === null) {
    //     // Return a loading indicator or a message while fetching data
    //     return <p>Loading...</p>;
    // }

    return (
        <BookmarkedScreenContainer>
            <ScrollView>
                {savedResources && savedResources.map((resource, i) => (
                    <BookmarkedCard
                        cardName={resource.name}
                        location={resource.address}
                        phoneNumber={resource.phoneNumber}
                        source={img}
                        resourceId={resource.id}
                        key={i.toString()}
                    />
                ))}
            </ScrollView>
        </BookmarkedScreenContainer>
    );
};

export default BookmarkedServices;