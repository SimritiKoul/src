//make a contact info portion for resource card
import renderResourceCardContactInfo from "../renderResourceCardContactInfo";
const ResourceCardContactInfo = ({location, number}) => (
  //this function will either return the contact info view for the location or contact info view for the phone number of the resource card
  renderResourceCardContactInfo(location, number)
)
export default ResourceCardContactInfo;