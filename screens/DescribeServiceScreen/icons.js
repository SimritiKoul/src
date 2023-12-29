/**
 * the file that contains the icons that are used in DescribeServiceScreen folder
 */
import { fontScale } from '../../base';
import renderExpoIcon from '../../utils/renderExpoIcon';
import { hour as styles } from './css';
import { media } from './css';
export const globalIcon = renderExpoIcon('Ionicons', 'globe-sharp', {size: 26, style: media.mediaIcons})
export const phoneIcon =  renderExpoIcon('Feather', 'phone', {size: 26 , style: media.mediaIcons})
export const locationIcon = renderExpoIcon('EvilIcons', 'location', {size: 36 })
export const arrow_downIcon= renderExpoIcon('MaterialIcons', 'keyboard-arrow-down', {size: 25 / fontScale, style: styles.arrowDownIcon})
export const lock_closed_sharp = renderExpoIcon('Ionicons', 'lock-closed-sharp', {size: 22 , style: styles.lock_icon})
export const lock_open_sharp = renderExpoIcon('Ionicons', 'lock-open-sharp', {size: 22 , style: styles.lock_icon
})