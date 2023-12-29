/**
 * getVectorIconBasedOnParam function.
 * Returns a specific icon component based on the passed name argument.
 *
 * @param {string} name - The name of the icon.
 * @returns {React.ReactNode} - The corresponding icon component.
 */

import { phoneIcon, globalIcon } from "../../icons"
export const getVectorIconBasedOnParam = (name) => {
  if (name === 'globe-sharp' ) return globalIcon
  else return phoneIcon
} 