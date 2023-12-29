import React, { useEffect, useState } from "react";
import { ScrollView, ActivityIndicator } from "react-native";
import ServiceContainer from "./subscreens/ServiceContainer";
import SortBtn from "./subscreens/SortBtn";
import { dataSearching } from "../../utils/resourceDataArrayToCards";
import * as Location from "expo-location";
import { container } from './css';
import getResourceKind from "../../utils/api/getResourceKind";
import ResourceCard from "../../components/ResourceCard/ResourceCard";

const AnyResource = ({ navigation, route }) => {
  const { resourceName } = route.params;

  const [location, setLocation] = useState(null);
  const [cards, setCards] = useState([]); // State to store the cards data
  const [loading, setLoading] = useState(true); // State to track loading status

  useEffect(() => {
    console.log(resourceName)
    const getResources = async () => {
      try{
        const response = await getResourceKind(resourceName);
        setCards(response.data.resources)
      } catch (error) {
        console.log(error);
        alert(`Failed to get resources by ${resourceName}`)
      }
    }
    getResources();
  }, [])

  // useEffect(() => {
  //   const fetchLocation = async () => {
  //     let { status } = await Location.requestForegroundPermissionsAsync();
  //     if (status !== "granted") {
  //       console.log("Permission to access location was denied.");
  //       return;
  //     }

  //     try {
  //       let location = await Location.getCurrentPositionAsync({});
  //       setLocation({
  //         latitude: location.coords.latitude,
  //         longitude: location.coords.longitude,
  //       });
  //     } catch (error) {
  //       console.log("Error getting location:", error);
  //     }
  //   };
  //   fetchLocation();
  // }, []);

  // useEffect(() => {
  //   // Fetch data and update cards state when location is available
  //   if (location) {
  //     dataSearching(
  //       resourceName,
  //       30000,
  //       resourceName,
  //       navigation,
  //       location.latitude,
  //       location.longitude
  //     )
  //       .then((result) => {
  //         setCards(result);
  //         setLoading(false); // Data loading is complete
  //       })
  //       .catch((error) => {
  //         console.log("Error fetching data:", error);
  //         setLoading(false); // Data loading is complete (even if it failed)
  //       });
  //   }
  // }, [location, resourceName, navigation]);

  // if (loading) {
  //   // Display a loading indicator while data is being fetched
  //   return (
  //     <ServiceContainer>
  //       <ActivityIndicator size="large" color="#0000ff" />
  //     </ServiceContainer>
  //   );
  // }

  // Conditional rendering based on whether cards is null or empty
  if (cards) {
    return (
      <ServiceContainer>
        <SortBtn />
        <ScrollView>
          {cards.map((resource, i) => <ResourceCard resource={resource} key={i.toString()}  navigation={navigation}/>)}
        </ScrollView>
      </ServiceContainer>
    );
  } else {
    return (
      <ServiceContainer>
        <SortBtn />
        <ScrollView></ScrollView>
      </ServiceContainer>
    );
  }
};

export default AnyResource;
