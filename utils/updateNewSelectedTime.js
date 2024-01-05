/**
 * Update the pickedTime variable to the new selected time.
 *
 * This function takes a Date object and the current picked time and updates the pickedTime variable with the new selected time.
 *
 * @param {Date} date - The new selected time as a Date object.
 * @returns {string} - in the format of time (8:12 or 12:34) 
 * @example
 * // Update the pickedTime with the new selected time
 * updateNewSelectedTime(new Date());
 */

export default updateNewSelectedTime = (date) => {
    //the new time is picked
    const newPickedTime = date.toLocaleString()
    //this is the maximum length of the returned value of newPickedTime, but only pick a time, which is portion of it 
    const MAXIMUM_LENGTH_OF_THE_RETURNED_TIME = 22
    const startPoint = 11
    let endPoint = 15  
    if (newPickedTime.length == MAXIMUM_LENGTH_OF_THE_RETURNED_TIME) endPoint = 16 
    return date.toLocaleString().substring(startPoint,endPoint)
    
}