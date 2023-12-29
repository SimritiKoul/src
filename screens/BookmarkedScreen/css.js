import { StyleSheet } from "react-native";
import {fontScale, colors} from '../../base'
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

//bookmarkedScreen container
export const bookmarkedScreenContainer = StyleSheet.create({
  bookmarkedScreenContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
})

//icons
export const icons = StyleSheet.create({
  locationIcon: {
    marginLeft: -4,
  }
})

//bookmarked card
export const bookmarkedCard = StyleSheet.create({
  bookmarkedCardContainer: {
    flexDirection: "row",
    alignSelf: "center",
    width: "90%",
    height: windowHeight * 0.15,
    backgroundColor: colors.white,
    marginTop: windowHeight * 0.06, 
    borderRadius: 20,
    padding: 10,
    shadowColor: colors.lightdark,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.55,
    shadowRadius: 3,
    elevation: 20,
    borderColor: '#d5d5d5',
    borderWidth: 1,
  },

  bookmarkedCardInfoContainer: {
    marginLeft: '7%',
    width: "70%",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 20 / fontScale,
    color: colors.appBtn,
    fontWeight: "bold",
    marginBottom: '3%',
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  info: {
    marginLeft: 4,
    fontSize:16 / fontScale
  },
})

//remove btn
export const removeBtn = StyleSheet.create({
  removeButton: {
    position: "absolute",
    bottom: '5%',
    right: '2%',
    width: '25%',
    height: '35%',
    backgroundColor: colors.appBtn,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  removeButtonText: {
    color: colors.white,
    fontSize: 17 / fontScale,
    fontWeight:'400'
  },
})