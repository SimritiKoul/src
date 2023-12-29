// make a portion to display service image in resource card
import React, {useState} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {resourceCard as styles} from '../../css';
import EditButton from './ResourceCardEditBtn';
import {bookmarkedIcon, whiteBookmarkedIcon} from "../../icons";
import { useAuth } from '../../../context/AuthProvider';
import bookmarkResources from '../../../utils/api/bookmarkResources';

const ResourceCardImage = ({picture, editBtnFunction, resourceId, hasEditButton}) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const {userToken} = useAuth()
  const handleBookmark = async () => {
    bookmarkResources(resourceId, userToken, setIsBookmarked);
  };

  return (
    // container that stores the image, edit btn, and the white box
    <View style={styles.imageContainer}>
      {/* image of the resource */}
      <Image
        source={
          typeof picture === "string" ? {uri: picture} : picture
        }
        style={styles.image}
        resizeMode="cover"
      />
      {/* saved resource btn. No saved btn for resource that user publishes*/}
      {!hasEditButton && <TouchableOpacity
        style={styles.bookmarkButton}
        onPress={() => {
          /* Bookmark function */
          if (!isBookmarked) {
            handleBookmark();
          }
          else {
            setIsBookmarked(false)
          }
        }}
      >
        {/*bookmark icon*/}
        <View style={isBookmarked ? styles.greenBox : styles.whiteBox}>
          {isBookmarked ? whiteBookmarkedIcon : bookmarkedIcon}
        </View>
      </TouchableOpacity>}
      {/* edit btn */}
      {hasEditButton && <EditButton text={'edit'} onPress={editBtnFunction}/>}
    </View>
  );
};
export default ResourceCardImage;