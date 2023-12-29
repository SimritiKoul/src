// createServiceNavigation.js
import { createStackNavigator } from '@react-navigation/stack';
import Header from '../Header';
// import Review from '../../screens/ViewReviewScreen/Review';
// import WriteReview from '../../screens/WriteReviewScreen/WriteReview';
import ServicesFullPage from '../../screens/ServiceFullPageScreen/ServicesFullPage';
import AnyResource from '../../screens/services/AnyResource';

const createServiceNavigation = async (serviceName) => {
  const Stack = createStackNavigator();


  const ServiceNavigation = () => (
    <Stack.Navigator>
      <Stack.Screen
        name={serviceName}
        component={serviceComponent.default}
        options={{
          header: ({ navigation }) => (
            <Header navigation={navigation} title={serviceName} />
          ),
        }}
      />
      
      <Stack.Screen
        name={`${serviceName}Service`}
        component={ServicesFullPage.default}
        options={{
          header: ({ navigation }) => <Header navigation={navigation} />,
        }}
      />
      {/*<Stack.Screen
        name="Review"
        component={Review}
        options={{
          header: ({ navigation }) => (
            <Header navigation={navigation} title="Reviews" />
          ),
        }}
      />
      <Stack.Screen
        name="Write a Review"
        component={WriteReview}
        options={{
          header: ({ navigation }) => (
            <Header navigation={navigation} title="Write a Review" />
          ),
        }}
      />*/}
    </Stack.Navigator>
  );

  return ServiceNavigation;
};

export default createServiceNavigation;
