import { StyleSheet } from "react-native";
import { fontScale, colors } from '../../base';

const styles = StyleSheet.create({
  hoursContainer: {
    flexDirection: 'row', // Display columns horizontally
    justifyContent: 'center', // Center columns horizontally
  },
  dayColumn: {
    flex: 1, // Each column takes equal space
    alignItems: 'center', // Center items vertically within each column
  },
  daySchedule: {
    marginBottom: 8, // Add margin between each "day: hours" entry
  },
});

export const serviceFullPageContainer = StyleSheet.create({
  serviceFullPagecontainer: {
    flex: 1,
    backgroundColor: colors.white
  },
});

export const serviceFullPageImage = StyleSheet.create({
  serviceImageStyle: {
    flex: 4,
    padding: '2%',
    justifyContent: 'center',
  },
  imageStyle: {
    width: '100%',
    height: '70%',
    borderRadius: 10,
  },
});

export const serviceFullPageInfo = StyleSheet.create({
  serviceInfoStyle: {
    flex: 1,
  },
  infoStyle1: {
    flexDirection: 'row',
    padding: '2%',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  serviceTitleStyle: {
    fontSize: 30 / fontScale,
    fontWeight: 'bold',
  },
  numberOfReviewStyle: {
    textDecorationLine: 'underline',
    fontWeight: '500',
  },
  infoStyle2: {
    paddingHorizontal: '2%',
    flexDirection: 'row',
  },
});

export const serviceFullPageDetail = StyleSheet.create({
  serviceDetailStyle: {
    flex: 4,
  },
  servicesDetailInnerContainer: {
    width: '100%',
    height: '15%',
    borderBottomColor: 'black',
    borderBottomWidth: 0.5,
  },
  serviceDetailOptionContainer: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: '2%',
  },
});

export const serviceOption = StyleSheet.create({
  serviceDetailOptionStyle: {
    width: '15%',
    justifyContent: 'center',
    borderBottomColor: colors.appBtn,
    alignItems: 'center',
  },
  serviceDetailOptionTextStyle: {
    fontSize: 20 / fontScale,
    fontWeight: '400',
  },
});

export const serviceOptionDetail = StyleSheet.create({
  serviceOptionDetail: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    height: 300,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});

export default styles;
