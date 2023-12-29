/**
 * Lock the operational hours for a specific day, setting the openTime and closeTime to a closed state.
 * @param operationalHour - An object containing the operational hour data for a specific day.
 * @param {Function} dispatch - The dispatch function from the resource context.
 * @example
 * // Assuming you have access to the dispatch function from the resource context
 * const {dispatch} = useResourceContext();
 * 
 * //Call this function to lock the operational hours for the value of the dayName in the operationalHour object
 * lockPickingField(operationalHour, dispatch)
 */

import { resourceActions } from "../context/resourceTemplate"
export const lockPickingField = (operationalHour, dispatch) => {
  const params = { [(operationalHour.dayName).toLowerCase()]: {
    ...operationalHour, 
    isClosed: true,
    openTime: 'Closed',
    closeTime: 'Closed'
  }
  }
  dispatch(resourceActions.create(params))
  return 
}

/**
 * Unlock the operational hours for a specific day, setting the openTime and closeTime to initial value '0:00'.
 * @param operationalHour - An object containing the operational hour data for a specific day.
 * @param {Function} dispatch - The dispatch function from the resource context.
 * @example
 * // Assuming you have access to the dispatch function from the resource context
 * const {dispatch} = useResourceContext();
 * 
 * //Call this function to unlock the operational hours for the value of the dayName in the operationalHour object
 * lockPickingField(operationalHour, dispatch)
 */
export const unlockPickingField = (operationalHour, dispatch) => {
  const params = { [(operationalHour.dayName).toLowerCase()]: {
    ...operationalHour, 
    isClosed: false,
    openTime: '0:00',
    closeTime: '0:00'
  }
  }
  dispatch(resourceActions.create(params))
  return 
}