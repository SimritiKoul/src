//Write Review screen. This is the screen that the user will see when they run the application
import React from "react";
import WriteReviewPageContainer from "./subscreens/WriteReviewPageContainer";
import SectionTitle from "./subscreens/SectionTitle";
import SectionContainer from "./subscreens/SectionContainer";
import StarRating from "./subscreens/StarRating";
import ReviewTextBox from "./subscreens/ReviewTextBox";
import SubmitBtn from "./subscreens/SubmitBtn";
import AddImageSection from "./subscreens/AddImageSection";
const WriteReview = ({navigation}) => {
  return (
    <WriteReviewPageContainer>
      {/* star rating section */}
      <SectionContainer>
        <SectionTitle title={'Rate your overall experience'}/>
        <StarRating/>
      </SectionContainer>

      {/* add Photo */}
      <AddImageSection/>
      
      {/* write Review */}
      <ReviewTextBox/>
    
      {/* submit btn */}
      <SectionContainer>
        <SubmitBtn onPress={() => navigation.navigate('Review')}/>
      </SectionContainer>
    </WriteReviewPageContainer>
  );
};
export default WriteReview;

