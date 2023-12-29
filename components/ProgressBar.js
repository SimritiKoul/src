import React from 'react';
import { View } from 'react-native';
import { progressBar as styles } from './css';

const ProgressBar = ({step}) => {

    //the step must be a number since 1 to 4 
    // by this way, it`ll define the styles in each step


    return (
        <View style={styles.wholeBar}>
            <View style={styles.internalBar}>
                <View style={styles.progressPartActiv}></View>
                <View style={step <=1? styles.progressPartNotActiv: styles.progressPartActiv}></View>
            </View>
            <View style={styles.internalBar}>
                <View style={step <=1? styles.progressPartNotActiv: styles.progressPartActiv}></View>
                <View style={step <=2? styles.progressPartNotActiv: styles.progressPartActiv}></View>
            </View>
            <View style={styles.internalBar}>
                <View style={step <=2? styles.progressPartNotActiv: styles.progressPartActiv}></View>
                <View style={step <=3? styles.progressPartNotActiv: styles.progressPartActiv}></View>
            </View>
        </View>
    )
}

export default ProgressBar;