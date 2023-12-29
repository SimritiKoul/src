//Published Service screen. This is the screen that the user will see when they run the application
import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import AddBtn from "./subscreens/AddBtn";
import PublishedServiceContainer from "./subscreens/PublishedServiceContainer";
import { title as styles } from "./css";
import ResourceCard from "../../../components/ResourceCard/ResourceCard";
import ScreenTitle from "../../../components/ScreenTitle";
import { useAuth } from "../../../context/AuthProvider";
import getPublishedResources from "../../../utils/api/getPublishedResources";

const PublishedServices = ({navigation}) => {
  //the variable that stores all the published resources
  const [publishedResource, setPublishedResources] = useState([])
  const {userToken} = useAuth()
  useEffect(() => {
    getPublishedResources(userToken, setPublishedResources)
  }, [navigation])

  return (
    <PublishedServiceContainer>
      <ScreenTitle titleMessage={'My Published Service'} style={styles.title}/>
      <ScrollView>
        {publishedResource.map((resource, i) => <ResourceCard resource={resource} navigation={navigation} key={i.toString()} hasEditButton={true}/>)} 
        
      </ScrollView>
      <AddBtn navigation={navigation}/>
    </PublishedServiceContainer>
  );
};



export default PublishedServices;
