//this file will make a write review section on the Write Review screen 
import React, {useState} from 'react';
import { Text } from 'react-native-paper';
import { TextInput } from 'react-native';
import SectionContainer from './SectionContainer';
import { reviewTextInput as styles } from '../css';
import SectionTitle from './SectionTitle';
import calculateRemainingChars from '../../../utils/calculateRemainingChars';
const ReviewTextBox = () => {
  const [value, onChangeText] = useState("");  //the value that the user typed into the write review textbox
  const [remainingChars, setRemainingChars] = useState(1000); //the maximum character that the user is allowd to type into the write review textbox
  const handleTextChange = (text) => {
    onChangeText(text);
    setRemainingChars(calculateRemainingChars(1000, text.length)); // Update the character count based on your maximum character limit
  };
  return (
    <SectionContainer>
      {/* section title */}
      <SectionTitle title={'Write your Review'}/>
       {/* write review textbox */}
       <TextInput
          editable
          multiline
          onChangeText={handleTextChange} // Update the onChangeText callback
          placeholder="Enter your review"
          value={value}
          style={styles.Txtinput}
          maxLength={1000}
        />
        {/* character count */}
        <Text style={styles.remainingChars}>
          {remainingChars}/1000 characters
        </Text>
      
    </SectionContainer>
  );
}
export default ReviewTextBox;