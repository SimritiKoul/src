//this file will make an add btn on the PublishedService screen so the user can publish their resources
import React, { useState } from 'react';
import { addBtn as styles } from '../css';
import { addIcon } from '../icons';
import { Pressable, Text } from 'react-native';
import { useResourceContext } from '../../../../context/ResourceProvider';
import clearResourceData from '../../../../utils/clearResourceData';
const AddBtn = ({ navigation }) => {
  const [isPressed, setIsPressed] = useState(false);
  const {dispatch} = useResourceContext()
  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  return (
    <Pressable
      style={[styles.addbtn, isPressed && styles.addbtnPressed]}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={() => {
          //clear resource - state variable before creating resource
          clearResourceData(dispatch)
          navigation.navigate('Get Started')
        }
        }
    >
      {addIcon}
      <Text style={styles.addbtntext}>Add</Text>
    </Pressable>
  );
};

export default AddBtn;
