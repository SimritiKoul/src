/**
 * @file ResourceContext.js
 * @description This file defines a custom resource context for managing resource-related state.
 * The context provides access to resource data and the dispatch function for actions (create, submit).
 */

import React, {createContext, useReducer, useContext} from 'react';
import { initialState, reducer } from './resourceTemplate';

/**
 * @context ResourceContext
 * @description A context to manage resource-related state.
 * Provides access to resource data and the dispatch function for actions.
 * resource: an object that contains all the necessary infos that is required to create a single resouce
 * dipatch: a function that set the new value to the resource variable 
 */
const ResourceContext = createContext()

/**
 * @customHook useResourceContext
 * @description A custom hook to access the ResourceContext and retrieve resource data and dispatch function.
 * @returns {object} An object containing resource data and dispatch function.
 */
export const useResourceContext =() => useContext(ResourceContext)

/**
 * @component ResourceProvider
 * @description A component that wraps the app with the ResourceContext.Provider.
 * It manages resource-related state and exposes relevant data and the dispatch function to the the children that being wrapped inside.
 * @param {object} props - The children components to be wrapped with the ResourceContext.Provider.
 * @returns {JSX.Element} The wrapper components.
 */
export const ResourceProvider = ({children}) => {
  const [resource, dispatch] = useReducer(reducer, initialState)
  return (
    <ResourceContext.Provider value={{resource, dispatch}}>
      {children}
    </ResourceContext.Provider>
  );
}

