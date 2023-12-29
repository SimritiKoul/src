/**
 * A component that displays the open time and close time picking fields for a single day's operational hours.
 *
 * @param {Object} operationalHour - An object containing the operational hour data for a specific day.
 * @param {Object} hourSetting - An object containing the current hour setting data.
 * @param {function} setHourSetting - A function to set the hour setting data.
 * @returns {JSX.Element} - JSX element representing the TimePickingFieldForDay component.
 * @example
 * // Usage
 * <TimePickingFieldForDay
 *   operationalHour={operationalHourData}
 *   hourSetting={hourSettingData}
 *   setHourSetting={setHourSettingFunction}
 * />
 */

import React from 'react';
import { View, Pressable} from 'react-native';
import { hour as styles} from '../../css';
import { lock_closed_sharp, lock_open_sharp } from '../../icons';
import TimePickingField from './TimePickingField';
import TitleForTimePickingField from './TitleForTimePickingField';
import { lockPickingField, unlockPickingField } from '../../../../utils/dayPickingFieldManagement';
import { useResourceContext } from '../../../../context/ResourceProvider';
//operationalHour is an object in the format of 
      //{
            //dayName: 'Friday',
            //day: 5,
            //isClosed: false,
            //openTime: '0:00',
            //closeTime: '0:00', 
      //} 
const TimePickingFieldForDay = ({operationalHour, hourSetting, setHourSetting}) => {
  //get resource-related state function to change the value of the state
  const {dispatch} = useResourceContext()

  return (
    <View 
          style={styles.timePickingFieldForDayContainer}>
      {/* Lock/Unlock Day */}
      <Pressable 
                onPress={() => {    
                                    //if the day is currently closed, unlock when pressed
                                    if (operationalHour.isClosed) unlockPickingField(operationalHour, dispatch)
                                    //if the day is currently open, lock when pressed
                                    else lockPickingField(operationalHour, dispatch)
                               }}>
      {/* Display the lock or unlock icon based on the status of the day */}
        {operationalHour.isClosed 
                                  ? lock_closed_sharp 
                                  : lock_open_sharp}
      </Pressable>
      {/* display the day name */}
      <TitleForTimePickingField 
                                title={`${operationalHour.dayName}:`}/>
      <View style={styles.openAndCloseHourContainer}>
          {/* Hour Picking Field for Open Time  */}
          <TimePickingField 
                            type={'openTime'}  
                            operationalHour={operationalHour} 
                            hourSetting={hourSetting} 
                            setHourSetting={setHourSetting}/>
          {/* Display the text 'to' */}
          <TitleForTimePickingField 
                            title={'to'}/>
          {/* Hour Picking Field for Close Time */}
          <TimePickingField 
                            type={'closeTime'}  
                            operationalHour={operationalHour} 
                            setHourSetting={setHourSetting}/>
      </View>
    </View>
  );
}
export default TimePickingFieldForDay;