/**
 * A component representing the hour picking field.
 *
 * This component displays the selected time and provides an arrow-down button to open the dropdown hour for time selection.
 *
 * @param {string} type - The type of the hour field (e.g., 'openTime' or 'closeTime').
 * @param {Object} operationalHour - An object containing the operational hour data from resource-related state for a specific day.
 * @param {function} setHourSetting - A function to set the hour setting for the dropdown hour.
 * @returns {JSX.Element} - Returns a JSX element representing the time picking field.
 * @example
 * // Usage within a component's JSX
 * <TimePickingField type="openTime" operationalHour={operationalHourData} setHourSetting={setHourSettingFunction} />
 */

import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import showDropDownHour from '../../../../utils/showDropDownHour';
import { hour as styles } from '../../css';
import { arrow_downIcon} from '../../icons';
import { useResourceContext } from '../../../../context/ResourceProvider';

const TimePickingField = ({type, operationalHour, setHourSetting}) => {
  //get resource-related state function to change the value of the state
  const {dispatch} = useResourceContext()

  return (
    <View style={styles.timePickingFieldContainer}>
      {/* Display the selected time in the dropdown hour   */}
      <View style={styles.timePickingField}>
        <Text style={styles.displayedPickingTime}>{operationalHour[type]}</Text>
      </View>
      {/* Arrow-down button for opening the dropdown hour */}
      <TouchableOpacity onPress={() => {
            // Set the hour setting for the dropdown hour
            setHourSetting({
              day: operationalHour.dayName,
              type: type
            })
            // Open the modal for dropdown hour
            showDropDownHour(operationalHour, dispatch)
        }}>
        {arrow_downIcon}
      </TouchableOpacity>
    </View>
  )
}
export default TimePickingField;