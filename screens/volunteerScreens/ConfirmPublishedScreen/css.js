import { StyleSheet } from "react-native";
import {fontScale, colors} from '../../../base'
export const confirmPublishedContainer = StyleSheet.create({
  confirmPublishedContainer: {
    flex: 1,
    padding: "3.58%",
    backgroundColor: colors.white,
  }
})

export const button = StyleSheet.create({
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '5%',
    justifyContent:'center'

  },
  buttonText: {
    fontSize: 18 / fontScale,
    fontWeight: '500'
  },
  buttons: {
    width: '45%',
    height: '85%',
    borderWidth: 2,
    borderColor: colors.appBtn,
    margin: '3%',
    borderRadius: 10,
    paddingHorizontal: '4%',
    paddingTop: '1.5%',
  }
})

export const infos = StyleSheet.create({
  title: {
    fontSize: 36 / fontScale,
    fontWeight: "bold",
    alignSelf: 'center'
  },
  congratsText: {
    fontSize: 18 / fontScale,
    alignSelf: 'center',
    marginTop: '4%',
    marginHorizontal: '5%',
    textAlign: 'center'
  },
  image: {
    alignSelf: 'center',
    margin: '18%',
    width: '35%',
    height: '35%'
  },
  next: {
    fontSize: 32,
    fontWeight: "bold",
    alignSelf: 'center'
  }
})