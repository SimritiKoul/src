// this file will make a Terms Of Service Screen component that displays some paragraphs about the term of service of this app
import React from 'react';
import { ScrollView, View } from 'react-native';
import { Text } from 'react-native-paper';
import { policyScreen as styles } from './css';
import { _r_text, effectivedate } from './termOfServiceContent';
const TermsOfServiceScreen = () => {
    return (
        <View style={styles.container}>
            <ScrollView>
            <Text style={styles.subHeader}>{effectivedate}</Text>
            <Text style={styles.content}>{_r_text}</Text>
            </ScrollView>
        </View>
    );
}
export default TermsOfServiceScreen;