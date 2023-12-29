/**
 * @file resourceTemplate.js
 * @description This file defines the initial state, reducer, and actions for managing resource-related data.
 * It provides a template for resource data and actions to create and clear resource information.
 */

/**
 * @constant initialState
 * @description The initial state template for resource data of the useReducer hook in the ResourceProvider.js
 */
export const initialState = {
  name: null,
  kindOfResource: null,
  email: null,
  address: null,
  description: null,
  location: null,
  phoneNumber: null,
  website: null,
  rating: null,
  publishedby: 'userId',
  monday: {
    dayName: 'Monday',
    day: 1,
    isClosed: false,
    openTime: '0:00',
    closeTime: '0:00',
  },
  tuesday: {
    dayName: 'Tuesday',
    day: 2,
    isClosed: false,
    openTime: '0:00',
    closeTime: '0:00',
  },
  wednesday: {
    dayName: 'Wednesday',
    day: 3,
    isClosed: false,
    openTime: '0:00',
    closeTime: '0:00',
  },
  thursday: {
    dayName: 'Thursday',
    day: 4,
    isClosed: false,
    openTime: '0:00',
    closeTime: '0:00',
  },
  friday: {
    dayName: 'Friday',
    day: 5,
    isClosed: false,
    openTime: '0:00',
    closeTime: '0:00',
  },
  saturday: {
    dayName: 'Saturday',
    day: 6,
    isClosed: false,
    openTime: '0:00',
    closeTime: '0:00',
  },
  sunday: {
    dayName: 'Sunday',
    day: 7,
    isClosed: false,
    openTime: '0:00',
    closeTime: '0:00',
  },
  popUpModal: false,
  images: []
}


/**
 * @constant types
 * @description Action types for resource-related actions.
 */
const types = {
  CREATE: 'CREATE',
  ClEAR: 'CLEAR',
}

/**
 * @constant resourceActions
 * @description Action creators for resource-related actions.
 * whenever use dispatch function to perform an action to the resource state (create or submit), import this object, call the intended action 
 * resourceActions.create(resourceData)
 * resourceData: an object value key pair, where the key is key of the field that resource is updated and the value is the new value of that field 
 * @return an object which would be used to pass to the dispatch() to determine dispatch action
 * 
 * resourceActions.submit() 
 * @return an object which would be used to pass to the dispatch() to determine dispatch action 
 */
export const resourceActions = {
  create: (resourceData) => ({type: types.CREATE, data: resourceData}),
  clear: () => ({type: types.ClEAR}),
}


/**
 * @function reducer
 * @description The reducer function will be passed to the useReducer hook in ResourceProvider.js as the dispatch function to update resource state based on actions.
 * @param {object} state - The current resource state.
 * @param {object} action - The action to perform on the resource state.
 * @returns {object} The updated resource state.
 * CREATE: update resource's info with new info
 * CLEAR: clear resource's info in the resource state, useful when after creating resource 
 * 
 */
export const reducer = (state, action) => {
  switch (action.type) {
    case types.CREATE:
      return {...state, ...action.data}
    case types.ClEAR:
      return {...initialState}
  }
}

