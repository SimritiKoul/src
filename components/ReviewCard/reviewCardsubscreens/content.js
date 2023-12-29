//content for the reviewer profile bar
import { reviewCard as styles } from "../../css"
import AvatarIcon from "../../AvatarIcon"
import { Text } from "react-native-paper"
import renderStarRating from "../../../utils/renderStarRating"
//return a component that will render a reviewer profile picture on the review card
export const renderReviewerPicture = (reviewerProfile) => <AvatarIcon avatarSettings={reviewerProfile}/>
//return a component that will render a text for number of posted days on the review card
export const renderPostedDate = (postedDate) => <Text style={styles.postedDateStyle}>{postedDate}</Text>
//return a component that will render the rating star from the reviewer for the resource on the review card
export const ReviewerRating = ({rating}) => <Text variant='labelLarge'>{renderStarRating(rating)} {rating}.0</Text>