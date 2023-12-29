/**
 * Component that renders custom buttons for a dropdown hour selection.
 * 
 * This component displays two buttons: 'Cancel' and 'Save' which are used for managing dropdown hour visibility.
 * 
 * @component
 * @param {Date} pickedTime - The selected time for which the day and time of the hour settings are being managed.
 * @param {object} hourSetting - The hour settings being managed in the object of {day: '', type: ''}
 *  day: value is one of the following: 'Monday, 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'.Used to determine which days the picked times belong to
 * type: either 'openTime' or 'closeTime'. Used to determine the whether the picked is for openTime or closeTime
 * @example
 * // Inside a parent component
 * <CustomButtonsForDropDown pickedDate={pickedDate} hourSetting={hourSetting} />
 */

import React from 'react';
import {Pressable, View, Text} from 'react-native';
import { hour as styles } from '../../css';
import { colors } from '../../../../base';
import { useResourceContext } from '../../../../context/ResourceProvider';
import hideDropDownHour from '../../../../utils/hideDropDownHour';
import updateHour from '../../../../utils/updateHour';
const CustomButtonsForDropDown = ({pickedTime, hourSetting}) => {
  //get resource-related state variables and a function to change the value of the state
  const {resource, dispatch} = useResourceContext()
  return (
    <View style={styles.dropDownHourButtonsContainer}>
        {/* Cancel button */}
        <Pressable
          mode='outlined'
          buttonColor={colors.white}
          style={styles.cancelButton}
          onPress={() => {
                //hide drop down hour
                hideDropDownHour(dispatch)}
            }>
          <Text 
                style={styles.cancelButtonText}>
                Cancel
          </Text>
        </Pressable>

        {/* Save button */}
        <Pressable
          mode='outlined'
          buttonColor={colors.white}
          style={styles.saveButton}
          onPress={() => {
            //update picked hour to resource-related state 
            updateHour(resource, dispatch, hourSetting, pickedTime)
          }}>
          <Text 
                style={styles.saveButtonText}>
                      Save
          </Text>
        </Pressable>
    </View>
  )
}
export default CustomButtonsForDropDown;