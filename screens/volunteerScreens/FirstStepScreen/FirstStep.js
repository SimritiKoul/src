//First Step screen. This is the screen that the user will see when they run the application
import React, {useState} from "react";
import FirstStepScreenContainer from "./subscreens/FirstStepScreenContainer";
import ListOfProvidedServices from "./subscreens/ListOfProvidedServices";
//use the next btn component created for the Describe Service screen
import NextBtn from "../../DescribeServiceScreen/subscreens/NextBtn";
import ScreenTitle from "../../../components/ScreenTitle";
import { title as styles } from "./css";
import { ScrollView, View, Text } from "react-native"; // Import ScrollView

import ProgressBar from "../../../components/ProgressBar";
const FirstStep = ({navigation}) => {
  const [selectedService, setSelectedService] = useState(null);
  return (
  <FirstStepScreenContainer>
    <ProgressBar step={1}/>
    <ScreenTitle titleMessage={'Select a category for your service'} style={styles.title}/>
    <ListOfProvidedServices selectedService={selectedService} setSelectedService={setSelectedService}/>
    <NextBtn onPress={() => {
      //check if users have selected the kind of service
      if (selectedService) {
              navigation.navigate('Describe Service', {title: 'Describe your service',purpose: 'create'})
          }
      //if users haven't selected any service and click next
      else {
        alert('Please select service card')
      }
    }
  }
    />
  </FirstStepScreenContainer>
  )
};


export default FirstStep;
