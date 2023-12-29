/**
 * updateImage function.
 * Updates the image array of resource-related variable using the dispatch function.
 *
 * @param {function} dispatch - The dispatch function from the resource context.
 * @param {string[]} newImageArray - The new array of image URIs to replace the existing images.
 * @returns {void}
 */

import updateResource from "./updateResource";

export default updateImage = (dispatch, newImageArray) => updateResource(dispatch, {field: 'images', value: newImageArray})