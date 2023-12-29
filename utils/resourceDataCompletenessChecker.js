/**
 * Check if all the fields in the resource have been entered except images 
 * 
 * @param {variable} resource - The resource from the resource context. An object that contains all the resource-related infos
 * @returns boolean: return true if all fields in resource object are filled out except image, otherwise return false
 */

export default resourceDataCompletenessChecker = (resource) => {
  //check if all the resources'infos  in DescribeServicepage has been filled out or not
  const { name, address, description, phoneNumber, website } = resource;
  const resourceInfo = {name, address, description, phoneNumber, website}
  if (Object.keys(resourceInfo).some(
    (k) => (resourceInfo[k] == null || resourceInfo[k] == '')
  )) {
    //if there is field in DescribeService Page hasn't been filled out
    return false
  }

  //check if all the resources'operationalHours in DescribeServicepage has been filled out or not
  const { monday, tuesday, wednesday, thursday, friday } = resource;
  const resourceOperationalHours = { monday, tuesday, wednesday, thursday, friday }
  if (Object.keys(resourceOperationalHours).some(
    (k) => {
    const {openTime, closeTime} = resourceOperationalHours[k]
     return (openTime === '0:00' && closeTime === '0:00')
    } 
  )) {
    //if there is field in DescribeService Page hasn't been filled out
    return false
  }
  //if all the fields have been filled out
  return true


}