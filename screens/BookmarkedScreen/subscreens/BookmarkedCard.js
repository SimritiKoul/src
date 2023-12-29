//bookmarked card 
import React, { useState } from 'react';
import { View, Image} from 'react-native';
import { Text } from 'react-native-paper';
//icon
import { locationIcon, phoneIcon } from '../icons';
import RemoveBtn from './RemoveBtn';
import { bookmarkedCard as styles} from '../css';
// Needed services
import { useAuth } from '../../../context/AuthProvider';
import removeBookmarkedResources from '../../../utils/api/removeBookmarkedResources';
//this component will take the name, location, phoneNumber, and picture of the resource to make a resource card
const BookmarkedCard = ({cardName, location, phoneNumber, source, resourceId }) => {

    const [isRemoveBookmarkLoading, setIsRemoveBookmarkLoading] = useState(false);
    const { userToken } = useAuth();

    const handleRemoveBookmark = async (resourceId, userToken) => {
        // console.log('removing bookmark');
        // setIsRemoveBookmarkLoading(true);
        // const response = await removeBookmarkedResources(resourceId, userToken);
         removeBookmarkedResources(resourceId, userToken);
        // console.log('Bookmark removed.');
        // setIsRemoveBookmarkLoading(false);
    }

    return (
    //create the shape of the card
    <View style={styles.bookmarkedCardContainer}>
        {/* load the image of the resource on the card */}
        <Image source={source} />
        {/* create a box that stores all the resources' infos on the card*/}
        <View style={styles.bookmarkedCardInfoContainer}>
            {/* name of the resource */}
            <Text style={styles.title}>{cardName}</Text>
            {/*location of the resource */}
            <View style={styles.infoContainer}>
            {locationIcon}
            <Text style={styles.info}>{location}</Text>
            </View>
            {/* phone number of the resource */}
            <View style={styles.infoContainer}>
            {phoneIcon}
            <Text style={styles.info}>{phoneNumber}</Text>
            </View>
        </View>
        {/* the remove button
            */}
        <RemoveBtn onPress={() => handleRemoveBookmark(resourceId, userToken)}/>
    </View>
    )
};

export default BookmarkedCard;