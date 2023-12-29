/**
 * Dropdown hour component for picking open and close times of the resource.
 *
 * This component displays a dropdown hour picker that allows users to select open and close times for a specific resource.
 *
 * @component
 * @param {object} hourSetting - The hour settings being managed in the object of {day: '', type: ''}
 *  day: value is one of the following: 'Monday, 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'.Used to determine which days the picked times belong to
 * type: either 'openTime' or 'closeTime'. Used to determine the whether the picked is for openTime or closeTime
 * @param {Object} operationalHour - An object containing operational hour data for a specific day.
 * @returns {JSX.Element} - A JSX element representing the dropdown hour picker.
 * @example
 * // Use this component to allow users to pick open and close times for a resource
 * <DropDownHour hourSetting={{ day: 'Monday', type: 'open' }} operationalHour={...} />
 */

import React from 'react';
import { View } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import CustomButtonsForDropDown from './CustomButtonsForDropDown';
import CustomHeaderForDropDown from './CustomHeaderForDropDown';
import updateNewSelectedTime from '../../../../utils/updateNewSelectedTime';
const DropDownHour = ({hourSetting, operationalHour}) => {
  //the time is picked in the drop down hour
  let pickedTime = ''


  return (
    <DateTimePickerModal
        isVisible={operationalHour.popUpModal}  
        mode="time"
        customConfirmButtonIOS={() => {
          //use the custom buttons for the drop down hour
          return (
          <CustomButtonsForDropDown operationalHour={operationalHour} pickedTime={pickedTime} hourSetting={hourSetting}/>
        )}}
        customCancelButtonIOS={() =>(<View/>)} //hide the pre-built cancel button in dropdown hour
        onCancel={() => null} //hide the function of the pre-built cancel button in dropdown hour
        onConfirm={() => null} //hide the function of the pre-built save button in dropdown hour
        customHeaderIOS={() => 
            //use the custom header for the drop down hour
            <CustomHeaderForDropDown headerTitle={hourSetting.day}/>
        }
        //update pickedTime variable to the new selected time 
        onChange={(date) => {
        pickedTime = updateNewSelectedTime(date)
      }}
      />
  );
}
export default DropDownHour;