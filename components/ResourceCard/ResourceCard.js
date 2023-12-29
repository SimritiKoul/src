//this file will create a resource card component for every provided services
import React, {useState} from "react";
import ResourceCardContainer from "./resourceCardsubscreens/ResourceCardContainer";
import ResourceCardContactInfo from "./resourceCardsubscreens/ResourceCardContactInfo";
import ResourceCardContent from "./resourceCardsubscreens/ResourceCardContent";
import ResourceCardDescription from "./resourceCardsubscreens/ResourceCardDescription";
import ResourceCardImage from "./resourceCardsubscreens/ResourceCardImage";
import ResourceCardRatingAndReview from "./resourceCardsubscreens/ResourceCardRatingAndReview";
import ResourceCardTitle from "./resourceCardsubscreens/ResourceCardTitle";
import { useResourceContext } from "../../context/ResourceProvider";
import dummyImg from '../../images/Dummyresource.png'
import updateResourceWithClickedResource from "../../utils/updateResourceWithClickedResource";
/**
 @resource - an object - {
                                “name”: “example name”,
                                “kindOfResource”: “example kind”,
                                “email”: “example@gmail.com”,
                                “address”: “123 main street, new york city, NY 101010”,
                                “description”: “example description”
                                “phoneNumber”: “14087777777”,  // not required
                                “website”: “www.example.com”,   // not required
                                “publishedBy: “userid”
                                “hours”: {
                                        1: {	//Monday
                                              “opentime”: “8:00”  // string type
                                              “closetime”: “8:00”  // string type
                                            },
                                              … include for all 7 days
                                  }

                          }
  @navigation - navigation object
  @ediBtnFunction - function for the edit btn if resource has edit btn
 */
const ResourceCard = ({ resource, navigation, hasEditButton}) => {
  //make a variable to store resourceId for sending to the bookmark route
  const [resourceId, setResourceId] = useState(resource.id) //resource id
  const {dispatch} = useResourceContext()

  const editButtonPress = () => {
    //populate all the resource-state variable fields with the resource's info 
    console.log(resource)
    console.log(resource.hours)
    updateResourceWithClickedResource(dispatch, resource)
    navigation.navigate('Describe Service', {title: 'Update your service', purpose: 'update', resourceId: resourceId})
    
  }

  return (
    <ResourceCardContainer>
      <ResourceCardContent>
        <ResourceCardTitle title={resource.name} onPress={
          /**
           * send resource to view resource page to populate all the fields there 
           */
          () => navigation.navigate('ViewResource', {resource: resource})
          
        }
          />
          {/* use dummy review and image for the first release */}
        <ResourceCardRatingAndReview rating={resource.rating} review={'0'}/>
        <ResourceCardDescription description={resource.description}/>
        <ResourceCardContactInfo location={resource.address}/>
        <ResourceCardContactInfo number={resource.phoneNumber}/>
      </ResourceCardContent>
      <ResourceCardImage picture={dummyImg} editBtnFunction={editButtonPress} resourceId={resourceId} hasEditButton={hasEditButton}/>
    </ResourceCardContainer>

  ) 
};
  export default ResourceCard;