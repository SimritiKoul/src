//Review screen. This is the main screen that the user will see when they run the application
import React from 'react';
import ReviewContainer from './subscreens/ReviewContainer';
import ReviewCard from '../../components/ReviewCard/ReviewCard';
import ScrollListOfReviews from './subscreens/ScrollListOfReviews';
import WriteReviewBtn from './subscreens/WriteReviewBtn';
import ResourceAverageRating from './subscreens/ResourceAverageRating';
import mockupreviews from './mockupreviews';
const Review = ({navigation}) => (
  <ReviewContainer>
    <ResourceAverageRating/>
    <ScrollListOfReviews>
      {mockupreviews.map((e, i) => 
                                 <ReviewCard reviewerName={e.name}
                                 content={e.content} reviewerProfileUri={e.avatar} rating={e.rating} postedDate={e.postedDate} key={i.toString()}/> )}
    </ScrollListOfReviews>
    <WriteReviewBtn onPress={() => navigation.navigate('Write a Review') }/>
  </ReviewContainer>
  
)
export default Review;