// this file will make a Privacy Agreement Screen component that displays some paragraphs about the privacy of this app
import React from 'react';
import { ScrollView, View } from 'react-native';
import { Text } from 'react-native-paper';
import { _r_text, effectivedate } from './privacyAgreementContent';
import { policyScreen as styles } from './css';
const PrivacyAgreementScreen = () => {    
    return (
        <View style={styles.container}>
            <ScrollView>
            <Text style={styles.subHeader}>{effectivedate}</Text>
            <Text style={styles.content}>{_r_text}</Text>
            </ScrollView>
        </View>
    );
}
export default PrivacyAgreementScreen;