/**
 * Function to update operational hours of a resource.
 *
 * This function updates the operational hours of a specific day in the resource state using the provided parameters.
 *
 * @function
 * @param {object} resource - The resource-related state.
 * @param {function} dispatch - The dispatch function from the context used for state management.
 * @param {object} hourSetting - The hour settings being managed in the object of {day: '', type: ''}
 *  day: value is one of the following: 'Monday, 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'.Used to determine which days the picked times belong to
 * type: either 'openTime' or 'closeTime'. Used to determine the whether the picked is for openTime or closeTime
 * @param {Date} pickedTime - The new time value to be updated.
 * @example
 * // Call this function to update the operational hours
 * updateHour(resource, dispatch, hourSetting, pickedDate);
 */

import { resourceActions } from "../context/resourceTemplate"
export default updateHour = (resource, dispatch, hourSetting, pickedTime) => {
  //get the day the picked time belongs to
  const day = hourSetting.day.toLowerCase()
  //get its object from the resource-state variable
  const dayObject = resource[day]
  //get the field that will be updated based on the type
  const updatedField = hourSetting.type
  const params = { [day]: {
    //only update the field that the time is picked for and keep the rest in the day object
    ...dayObject, 
    [updatedField]: pickedTime,
    },
    //close the modal after updating the field 
    popUpModal: false
  }
  dispatch(resourceActions.create(params))
}