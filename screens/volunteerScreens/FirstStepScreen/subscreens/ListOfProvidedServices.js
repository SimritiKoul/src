//this file will make a list which it contains all the services card and is displayed on the first step screen 
import React, {useState} from 'react';
import ProvidedServicesContainer from './ProvidedServicesContainer';
import {listOfServiceTypes} from '../listOfServiceTypes';
import ServiceCard from '../../../../components/ServiceCard';
import updateResource from '../../../../utils/updateResource';
import { useResourceContext} from '../../../../context/ResourceProvider';
const ListOfProvidedServices = ({selectedService, setSelectedService}) => {

  //get resource-related state variable and dispatch function from ResourceProvider
  const {resource, dispatch} = useResourceContext()
  return (
    // list container
    <ProvidedServicesContainer>
      {/* list of service cards */}
      {listOfServiceTypes.map((service, i) =>
        <ServiceCard
          title={service.name}
          picture={service.urlImage}
          key={i.toString()}
          onPress={() => {
            //set selected services to kindofresource in state
            updateResource(dispatch, {'field': 'kindOfResource', 'value': service.name.toLowerCase()})
            setSelectedService(service.name)
          }}
          isSelected={selectedService === service.name}
        />)}
    </ProvidedServicesContainer>
  );
}
export default ListOfProvidedServices;