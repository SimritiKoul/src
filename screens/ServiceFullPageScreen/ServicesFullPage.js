import React, { useState } from 'react';
import { View, Image, ScrollView, Pressable, Text } from 'react-native';
import { star, location } from './icons';
import {
  serviceFullPageDetail as styles,
  serviceOption as optionStyles,
  serviceOptionDetail as optionDetailStyles,
  serviceFullPageImage as imageStyles,
  serviceFullPageInfo as infoStyles,
  serviceFullPageContainer as containerStyles,
} from './css';


const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


// Helper function to format time as AM/PM
const formatTime = (time) => {
  const date = new Date(`2023-08-21T${time}`);
  return date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
};

const HoursSection = ({ hours }) => {
  const renderDaySchedule = (dayName, schedule) => (
    <View key={dayName} style={styles.daySchedule}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ width: '30%' }}>{daysOfWeek[dayName - 1]}:</Text>

        {schedule ?
          <><Text style={{ width: '22%', textAlign: 'left' }}> {formatTime(schedule.open_time)}</Text>
            <Text style={{ width: '8%', textAlign: 'left' }}> to </Text>
            <Text style={{ width: '22%', textAlign: 'left' }}>{formatTime(schedule.close_time)}</Text>
          </>
          : <Text style={{ color: 'red' }}> 'Closed'</Text>}

      </View>
    </View>
  );

  return (
    <View style={styles.hoursContainer}>
      {Object.keys(hours).map((day) => (
        <View key={day} style={styles.dayColumn}>
          {renderDaySchedule(day, hours[day])}
        </View>
      ))}
    </View>
  );
};

// Define a component for rendering the Media section
const MediaSection = ({ website, phone }) => (
  <View>
    <Text>{website}</Text>
    <Text>{phone}</Text>
  </View>
);

// Define a component for rendering the About section
const AboutSection = ({ description }) => (
  <Text>{description}</Text>
);

const ServiceOption = ({ title, setDetailOption, detailOption, index }) => (
  <View
    style={[
      optionStyles.serviceDetailOptionStyle,
      { borderBottomWidth: detailOption === index ? 4 : 0 },
    ]}
  >
    <Pressable onPress={() => setDetailOption(index)}>
      <Text style={optionStyles.serviceDetailOptionTextStyle}>{title}</Text>
    </Pressable>
  </View>
);

const ServiceOptionDetail = ({ detailOption, resource }) => (
  <View style={optionDetailStyles.serviceOptionDetail}>
    <ScrollView>
      {detailOption === 0 && <AboutSection description={resource.description} />}
      {detailOption === 1 && <HoursSection hours={resource.hours} />}
      {detailOption === 2 && <MediaSection website={resource.website} phone={resource.phone} />}
    </ScrollView>
  </View>
);

const ServicePageImage = ({ source }) => (
  <View style={imageStyles.serviceImageStyle}>
    <Image source={require('../../images/food.jpeg')} style={imageStyles.imageStyle} />
  </View>
);

const ServicePageInfo = ({ resource }) => (
  <View style={infoStyles.serviceInfoStyle}>
    <View style={infoStyles.infoStyle1}>
      <Text style={infoStyles.serviceTitleStyle}>{resource.name}</Text>
      <Text>
        {star}
        <Text>{resource.rating}</Text>
      </Text>
      <Text style={infoStyles.numberOfReviewStyle}>6000 Reviews</Text>
    </View>
    {extractCityStateFromAddress(resource.address)}
  </View>
);

function extractCityStateFromAddress(address) {
  // Regular expression to match the city and state
  const cityStateRegex = /([^,]+),\s*([^,]+)\s*(\d{5})/;

  // Use the regex to extract city and state
  const matches = address.match(cityStateRegex);

  if (matches) {
    const city = matches[1].trim(); // Extracted city
    const state = matches[2].trim(); // Extracted state

    // Combine city and state
    const cityState = `${city}, ${state}`;

    return (<View style={infoStyles.infoStyle2}>
      {location}
      <Text>{cityState}</Text>
    </View>)
  } else {
    // Return null on error
    return <></>;
  }
}


const ServicesFullPage = ({ route }) => {
  const [detailOption, setDetailOption] = useState(0);
  const { resource } = route.params;
  console.log(resource.hours)

  return (
    <View style={containerStyles.serviceFullPagecontainer}>
      <ServicePageImage />
      <ServicePageInfo resource={resource} />
      <View style={styles.serviceDetailStyle}>
        <View style={styles.servicesDetailInnerContainer}>
          <View style={styles.serviceDetailOptionContainer}>
            <ServiceOption title='About' setDetailOption={setDetailOption} detailOption={detailOption} index={0} />
            <ServiceOption title='Hours' setDetailOption={setDetailOption} detailOption={detailOption} index={1} />
            <ServiceOption title='Media' setDetailOption={setDetailOption} detailOption={detailOption} index={2} />
          </View>
          <ServiceOptionDetail detailOption={detailOption} resource={resource} />
        </View>
      </View>
    </View>
  );
};

export default ServicesFullPage;
