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

    const time = date.toTimeString().substring(0,6) + "00";
    // format time as '00:00:00'
    console.log(time)

    return time;
    
}