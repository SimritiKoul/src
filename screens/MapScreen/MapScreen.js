import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { markerIcon } from "./icons";
import { map as styles } from "./css";

import * as Location from "expo-location";

const MapScreen = () => {
  const [location, setLocation] = useState(null);

  // fetch your location

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied.");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.04,
        longitudeDelta: 0.05,
      });
    })();
  }, []);

  // const [location, setLocation] = useState({
  //   latitude: 37.32531,
  //   longitude: -121.83633,
  //   // latitude: latitude,
  //   // longitude: longitude,
  //   latitudeDelta: 0.04,
  //   longitudeDelta: 0.05,
  // });

  //as we move the marker icon to a new location on the map, the location variable will be set to a new value
  const changeLocation = (region) => setLocation(region);
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        mapType="standard" //standard view
        provider="google" //use google map
        initialRegion={location} //initial location that appears on the map when it is first rendered
        //onRegionChange={(region) => changeLocation(region)}
      >
        {/* marker */}
        <Marker
          // location of marker
          coordinate={location}
        >
          {markerIcon}
        </Marker>
        <Marker
          // location of marker
          coordinate={location}
        >
          {markerIcon}
        </Marker>
      </MapView>
    </View>
  );
};
export default MapScreen;
