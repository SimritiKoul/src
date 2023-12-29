/**
 * DescribeServicePage component.
 * This screen is used by volunteers to enter information about the resource they provide.
 *
 * @component
 * @param {object} navigation - The navigation object provided by React Navigation.
 * @returns {JSX.Element} DescribeServicePage component
 */


import DescribeServicePageContainer from "./subscreens/DescribeServicePageContainer";
import AboutSection from "./subscreens/AboutSection";
import HourSection from "./subscreens/HourSection";
import MediaSection from "./subscreens/MediaSection";
import LocationSection from "./subscreens/LocationSection";
import ImageSection from "./subscreens/ImageSection";
import NextBtn from "./subscreens/NextBtn";
import ScreenTitle from "../../components/ScreenTitle";
import { title as styles } from "./css";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useResourceContext } from "../../context/ResourceProvider";
import resourceDataCompletenessChecker from "../../utils/resourceDataCompletenessChecker";
import ProgressBar from "../../components/ProgressBar";

const DescribeServicePage = ({navigation, route}) => {
  const {resource} = useResourceContext()
  const {title, purpose} = route.params
  /**
   * if purpose is update, send retrieve resourceId from route.params and send it to the Third Step Screen 
   */
  return (
    <DescribeServicePageContainer>
        {/* Progress bar. Only show when user create resource */}
        {purpose === 'create' && <ProgressBar step={2}/>}
        {/* Render the screen title */}
        <ScreenTitle titleMessage={title} style={styles.titleStyle} numberOfLines={2}/>
        <KeyboardAwareScrollView nestedScrollEnabled >
            {/* Render the sections for describing the service */}
            <AboutSection/>
            <HourSection/>
            <MediaSection/>
            <LocationSection/>
            <ImageSection/>
        </KeyboardAwareScrollView>
        {/* Render the NextBtn for navigation */}
        <NextBtn onPress={() => {
          //check if all the fields in the resource have been entered except images 
          const allFilled = resourceDataCompletenessChecker(resource)
          //if all the fields have been entered. Move to publish page
          if (allFilled) {
            if (purpose === 'create') {
              navigation.navigate('Third Step', {purpose: purpose});
            }
            else {
              const {resourceId} = route.params 
              navigation.navigate('Third Step', {purpose: purpose, resourceId: resourceId});
            }
          
          }
            
          
          //otherwise giver alert to user
          else alert("Some fields has not been filled out.")

        }}/>
    </DescribeServicePageContainer>
  )

}
export default DescribeServicePage;