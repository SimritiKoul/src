//update resource-state variable with the clicked resource
import { resourceActions } from "../context/resourceTemplate"
export default updateResourceWithClickedResource = (dispatch, resource) => {
    const updatedResource = {
          name: resource?.name,
          kindOfResource: resource?.kindOfResource,
          email: resource?.email,
          address: resource?.address,
          description: resource?.description,
          phoneNumber: resource?.phoneNumber,
          website: resource?.website,
          rating: resource?.rating,
          monday: {
            dayName: 'Monday',
            day: 1,
            isClosed: resource.hours['1']?.open_time === 'Closed',
            openTime: resource.hours['1']?.open_time,
            closeTime: resource.hours['1']?.close_time,
          },
          tuesday: {
            dayName: 'Tuesday',
            day: 2,
            isClosed: resource.hours['2']?.open_time === 'Closed',
            openTime: resource.hours['2']?.open_time,
            closeTime: resource.hours['2']?.close_time,
          },
          wednesday: {
            dayName: 'Wednesday',
            day: 3,
            isClosed: resource.hours['3']?.open_time === 'Closed',
            openTime: resource.hours['3']?.open_time,
            closeTime: resource.hours['3']?.close_time,
          },
          thursday: {
            dayName: 'Thursday',
            day: 4,
            isClosed: resource.hours['4']?.open_time === 'Closed',
            openTime: resource.hours['4']?.open_time,
            closeTime: resource.hours['4']?.close_time,
          },
          friday: {
            dayName: 'Friday',
            day: 5,
            isClosed: resource.hours['5']?.open_time === 'Closed',
            openTime: resource.hours['5']?.open_time,
            closeTime: resource.hours['5']?.close_time,
          },
          saturday: {
            dayName: 'Saturday',
            day: 6,
            isClosed: resource.hours['6']?.open_time === 'Closed',
            openTime: resource.hours['6']?.open_time,
            closeTime: resource.hours['6']?.close_time,
          },
          sunday: {
            dayName: 'Sunday',
            day: 7,
            isClosed: resource.hours['7']?.open_time === 'Closed',
            openTime: resource.hours['7']?.open_time,
            closeTime: resource.hours['7']?.close_time,
          },
          popUpModal: false,
          images: []
    }
    dispatch(resourceActions.create(updatedResource))

}