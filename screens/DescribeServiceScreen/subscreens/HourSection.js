/**
 * HourSection component.
 * Represents the section for setting operational hours of a resource on the DescribeService page.
 *
 * @returns {React.ReactNode} - The HourSection component.
 */

import React, {useState} from 'react';
import SectionContainer from './SectionContainer';
import SectionTitle from './SectionTitle';
import HourContentContainer from './hoursSubscreens/HourContentContainer';
import TimePickingFieldForDay from './hoursSubscreens/TimePickingFieldForDay';
import { hour as styles } from '../css';
import { useResourceContext } from '../../../context/ResourceProvider';
import DropDownHour from './hoursSubscreens/DropDownHour';

const HourSection = () => {
  //  day: value is one of the following: 'Monday, 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'.Used to       determine which days the picked times belong to
  //  type: either 'openTime' or 'closeTime'. Used to determine the whether the picked is for openTime or closeTime
  const [hourSetting, setHourSetting] = useState({
    day: '',
    type: ''
  })
  //get the resource-state variable from ResourceProvider context
  const {resource} = useResourceContext()
  // Days array with operational hours for each specific day
  // operational hours is the object of the following key/value pairs 
          // { 
              //dayName: 'Friday',
              // day: 5,
              // isClosed: false,
              // openTime: '0:00',
              // closeTime: '0:00',
            // }
  const days = [resource.sunday, resource.monday, resource.tuesday, resource.wednesday, resource.thursday, resource.friday, resource.saturday]
  return (
    <SectionContainer style={styles.hourSection}>
      <SectionTitle title={'2 Hours'}/>
      <HourContentContainer>
        {days.map((d, i) => 
                              <TimePickingFieldForDay operationalHour={d} key={i.toString()} hourSetting={hourSetting} setHourSetting={setHourSetting}/>
                              )}
      </HourContentContainer>
      <DropDownHour operationalHour={resource} hourSetting={hourSetting}/>
    </SectionContainer>
    
  )
}
export default HourSection;