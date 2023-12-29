/**
 * Function to close the dropdown hour popup.
 * 
 * This function updates the 'popUpModal' field in the resource state to false, effectively hiding the dropdown hour popup.
 * 
 * @function
 * @param {function} dispatch - The dispatch function from the context used for state management.
 * @example
 * // Call this function to close the dropdown hour popup
 * hideDropDownHour(dispatch);
 */

import updateResource from "./updateResource";
//this function will close the dropdown hour
export default hideDropDownHour = (dispatch,) => {
    updateResource(dispatch, {field: 'popUpModal', 'value': false})
};