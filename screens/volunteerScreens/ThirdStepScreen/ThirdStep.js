//Third Step Screen. This is the screen that the user will see when they run the application
import React from 'react';
import PreviewServiceContainer from './subscreens/PreviewServiceContainer';
import { title as styles } from './css';
import PublishedBtn from './subscreens/PublishedBtn';
import ScreenTitle from '../../../components/ScreenTitle';
import ProgressBar from '../../../components/ProgressBar';
import submitResource from '../../../utils/api/submitResource';
import updateResource from '../../../utils/api/updateResource';
import { useResourceContext } from '../../../context/ResourceProvider';
import { useAuth } from '../../../context/AuthProvider';
const ThirdStep = ({navigation, route}) => {
  /**
   * if purpose is update, use updateResources(resource, userToken, resourceId) for onPress for PublishBtn
   * if purpose is create, use submitResource(resource)
   */
  const {resource, dispatch} = useResourceContext()
  const {purpose} = route.params
  const { userToken} = useAuth()

  //use info from resource-state variable to make an object that send to the backend
  //In Ui of describe service page, we don't have a field to enter the email
  const email = resource.email ? resource.email : resource.name + '@gmail.com'
  const resourceInfo = {
    name: resource.name,
    kindofresource: resource.kindOfResource,
    email: email,
    address: resource.address,
    description: resource.description,
    phonenumber: resource.phoneNumber,
    website: resource.website,
    hours: {
      '1': {
        "opentime": resource.monday.openTime,
        "closetime": resource.monday.closeTime
      },
      '2': {
        "opentime": resource.tuesday.openTime,
        "closetime": resource.tuesday.closeTime
      },
      '3': {
        "opentime": resource.wednesday.openTime,
        "closetime": resource.wednesday.closeTime
      },
      '4': {
        "opentime": resource.thursday.openTime,
        "closetime": resource.thursday.closeTime
        
      },
      '5': {
        "opentime": resource.friday.openTime,
        "closetime": resource.friday.closeTime
      },
      '6': {
        "opentime": resource.saturday.openTime,
        "closetime": resource.saturday.closeTime
      },
      '7': {
        "opentime": resource.sunday.openTime,
        "closetime": resource.sunday.closeTime
      }
    }

  }
  return (
    <PreviewServiceContainer>
      {purpose === 'create' && <ProgressBar step={3}/>}
      <ScreenTitle titleMessage={'Preview'} style={styles.title}/>
      <PublishedBtn onPress={() => {
        if (purpose === 'update')
        {
          const {resourceId} = route.params
          updateResource(resourceInfo, userToken, resourceId, navigation, dispatch)
        }
        else {
          submitResource(resourceInfo, userToken, navigation, dispatch)
        }
        //based on the value of purpose and use the correct function for Publish btn, whether update or publish resource

      }} />
    </PreviewServiceContainer>
  )
}
export default ThirdStep;