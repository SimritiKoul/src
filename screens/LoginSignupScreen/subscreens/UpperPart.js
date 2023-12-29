/**
 * @file UpperPart.js
 * @description This file contains a component that renders the upper part of screens in this folder.
 */

import React from 'react';
import { Image } from 'react-native';
import { upperPart as styles } from '../css';
const UpperPart = () => <Image source={require('../../../images/backgroundImg.png')} style={styles.img}/>

export default UpperPart;