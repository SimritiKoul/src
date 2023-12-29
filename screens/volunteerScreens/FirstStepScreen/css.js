import { StyleSheet } from "react-native";
import {fontScale, colors} from '../../../base'
export const firstStepScreenContainer = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  }
})

export const cardContainer = StyleSheet.create({
  providedServicesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    flex: 8,
    flexWrap: "wrap",
    alignContent: "space-around",
    paddingTop: "5%",
    marginHorizontal: "5%", // Adjust the margin as needed
    marginVertical: "5%", // Adjust the margin as needed
  },
})

export const title = StyleSheet.create({
  title: {
    padding: 10,
    maxWidth: '80%',
  },
})

export const nextBtn = StyleSheet.create({
  nxtButton: {

    width: '35%',
    height: '7%',
    borderRadius: 20,
    backgroundColor: colors.appBtn,
    alignItems: 'center',
    padding: 3,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center'
  },
  nxtButtonText: {
    color: colors.white,
    fontSize: 30 / fontScale,
    fontWeight: 'bold',
},
})
