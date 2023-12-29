/**
 * Opens the dropdown hour modal for time selection.
 *
 * This function sets the `popUpModal` state variable to `true` in order to open the modal for time selection.
 * It checks if the resource is not closed on the selected day before opening the modal.
 *
 * @param {Object} operationalHour - An object containing the operational hour data for a specific day.
 * @param {function} dispatch - A function used to dispatch actions to update the resource-related state.
 * @returns {void}
 * @example
 * // Usage
 * showDropDownHour(operationalHourData, dispatchFunction);
 */

import updateResource from "./updateResource"
export default showDropDownHour =  (operationalHour, dispatch) => {
  // Check if the resource is not closed on the selected day
  if (!operationalHour.isClosed) {
    // Update the 'popUpModal' state variable to true to open the modal
    updateResource(dispatch, {field: 'popUpModal', value: true})
  }
  // If the resource is closed, the modal cannot be opened.
  // You may want to provide some kind of notification to inform the user.
}
