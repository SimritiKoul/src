/**
 * Dispatch function to update resource-related state variables.
 * 
 * @param {Function} dispatch - The dispatch function from the resource context.
 * @param {...{field: string, value: any}} updates - An array of updates, each containing a field name and its new value.
 * @example
 * // Assuming you have access to the dispatch function from the resource context
 * const {dispatch} = useResourceContext();
 * 
 * // Call the function to update multiple fields at once
 * changeResourceInfo(dispatch, { field: 'name', value: 'New Name' }, { field: 'description', value: 'New Description' });
 */

import { resourceActions } from "../context/resourceTemplate";
export default changeResourceInfo = (dispatch, ...updates) => {
  // Loop through the updates array and apply each update to the resource
  updates.forEach(update => {
    const { field, value } = update;
    // Dispatch the action to update the specified field with the new value
    dispatch(resourceActions.create({ [field]: value }));
  });
}