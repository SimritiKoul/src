/**
 * Render 6 service cards in the HomePage
 */
import React from 'react';
import { providedServices } from '../listOfProvidedServices';
import ProvidedServicesContainer from './ProvidedServicesContainer';
import ServiceCard from '../../../components/ServiceCard';
import { servicecard as styles } from '../css';

/**
 * 
 * @param navigation navigation object that used to navigate to 'DisplayResource' screen 
 */
const ProvidedServices = ({ navigation }) => {
  return (
    <ProvidedServicesContainer>
      {providedServices.map((service, i) =>
        <ServiceCard title={service.name}
          picture={service.urlImage}
          onPress={() =>
            /**
             * When a service card is clicked, navigate to the 'View All Resources' page and pass the title as the params, which is corresponding kind of the clicked service, to that page.
             */
            navigation.navigate('ResourceNav', {
              //this is how to send params to nested screens 
              screen: 'View All Resources',
              params: {
                title: service.title
              }
            })
          }
          key={i.toString()}
          style={styles.servicecard} />
      )}
    </ProvidedServicesContainer>
  );
}
export default ProvidedServices;