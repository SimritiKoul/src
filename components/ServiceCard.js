//this file will create a card for the provided service that will be displayed in the First Step (volunteer's flow)
import React from "react";
import {View, Text, Image, TouchableOpacity} from "react-native";
import {servicecard as styles} from "./css";

const ServiceCard = ({picture, title, style, onPress, isSelected}) => {

  return (
    <TouchableOpacity
      style={[
        styles.cardStyle,
        style
      ]}
      onPress={onPress}
    >
      {/* Image of the service card */}
      <View style={isSelected ? styles.cardTitleClicked : styles.cardImage}>
        <Image
          style={styles.imageIcon}
          source={picture !== null
            ? {uri: picture}
            : {uri: "https://placehold.co/400?text=No+image+available"}}
          // resizeMode='cover'
          />
        {/* name of the service card */}
      </View>
      <View
        style={styles.cardTitleContainer}>
        <Text
          style={styles.cardTitle}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export default ServiceCard;
