/**
 * the file that contains the css of all the files in DescribeServiceScreen folder
 */
import {StyleSheet} from "react-native";
import {colors, fontScale} from "../../base";

export const title = StyleSheet.create({
  titleContainer: {
    bottom: '4%',
    backgroundColor: 'red'

  },
  titleStyle: {
    fontSize: 45 / fontScale,
    paddingBottom: '3%',
  },
})

export const section = StyleSheet.create({
  sectionContainer: {
    width:'100%',
    //paddingLeft: 20,
    paddingHorizontal: 5,
    paddingBottom: 30,
    height:'10%', 
    marginBottom:'3%'

  },
  titleSectionContainer: {
    flex: 1,
    paddingBottom: 10,
    //marginBottom:'3%'
  },
  titleSection: {
    fontSize: 18 / fontScale,
    fontWeight: '700'
  },
})

export const about = StyleSheet.create({
  aboutSection: {
    height:'20%'
  },  
  contentContainer: {
    width:'100%',
    paddingLeft: 20,
    height:'100%'
  },
  inputFieldForTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  label: {
    right: 5,
    fontSize: 16 / fontScale,
    alignSelf: 'center',
    fontWeight: '400'
  },
  titleTextInput: {
    width: '70%',
    height: '100%',
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: colors.lightgray,
    backgroundColor: colors.lightgray,
    paddingVertical: 3,
    paddingHorizontal: 20,
    fontSize: 16 / fontScale
  },
  descriptionTextInput: {
    height:'70%',
    maxHeight: '70%',
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: colors.lightgray,
    backgroundColor: colors.lightgray,
    paddingHorizontal: 10,
    marginTop: 12,
    fontSize: 16 / fontScale
  },
})

export const media = StyleSheet.create({
  mediaSection: {
    height:'15%'
  },
  contentContainer: {
    paddingLeft: 10,
    flex: 3,
    justifyContent: 'space-around',
  },
  inputFieldForMedia: {
    paddingLeft: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
    height:'60%',
    paddingBottom: 10,
    
    
  },
  mediaTextInput: {
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: colors.lightgray,
    backgroundColor: colors.lightgray,
    paddingHorizontal: 10,
    width: '100%',
    height: '80%',
    marginLeft: '5%',
    top: '2%',
    fontSize: 16 / fontScale
    
  },
  mediaIcons: {
    alignSelf:'center'
  }
})

export const location = StyleSheet.create({
  locationSection: {
    height: '10%',
  },
  contentContainer: {
    paddingLeft: 10,
    justifyContent: 'space-around',
   
  },
  inputFieldForLocation: {
    paddingLeft: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
  },
  locationTextInput: {
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: colors.lightgray,
    backgroundColor: colors.lightgray,
    paddingHorizontal: 10,
    width: '100%',
    height: '100%',
    marginLeft: '2%',
    fontSize: 14 / fontScale,
    paddingVertical:4
  },
})

export const hour = StyleSheet.create({
  dropDownHourButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: '10%',
    alignItems: 'center',
  },
  saveButton: {
    width: '43%',
    height: 45,
    borderRadius: 20,
    backgroundColor: colors.appBtn,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.appBtn
  },
  cancelButton: {
    width: '43%',
    height: 45,
    borderRadius: 20,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1
  },
  saveButtonText: {
    fontSize: 20 / fontScale,
    fontWeight: '400',
    color: colors.white,
  },
  cancelButtonText: {
    fontSize: 20 / fontScale,
    fontWeight: '400',
  },
  customHeaderForDropDown: {
    alignSelf: 'center',
    fontSize: 24 / fontScale,
    fontWeight: '600',
  },
  customHeaderForDropDownView: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: colors.lightdark,
  },
  timePickingFieldForDayContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between'
  },
  day: {
    fontSize: 14 / fontScale
  },
  timePickingFieldContainer: {
    width: '35%',
    height: '80%',
    
    borderWidth: 0.5,
    borderColor: colors.lightgray,
    borderRadius: 5,
    backgroundColor: colors.lightgray,
    flexDirection: 'row',
    paddingRight:'2%'

  },
  timePickingField: {
    width: '82%',
    alignItems: 'center',
    justifyContent: 'center',

  },
  displayedPickingTime: {
    fontSize: 14 / fontScale,
    color: 'black'
  },
  arrowDownIcon: {
    alignSelf: 'center',
  },
  titleForTimePickingField: {
    fontSize: 14 / fontScale,
    right: 10
  },
  hourSection: {
    height:'30%'
  },
  hourContentContainer: {
    width:'100%',
    paddingLeft: 15,
    height:'100%'
    
  },
  openAndCloseHourContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },
  lock_icon: {
    right: 20
    
  }
})

export const addImage = StyleSheet.create({
  addImageSection: {
    height:'20%',
    
  },
  addImageSectionTitleContainer: {
    flex: 0.5
  }
})

export const nextBtn = StyleSheet.create({
  nextBtnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '30%',
    alignSelf: 'flex-end',
    backgroundColor: colors.appBtn,
    borderRadius: 20,
    height: '5%',
    marginRight: '5%',
    marginBottom: '10%',
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 1,
    shadowRadius: 4,
  },
  nextBtnLabel: {
    fontSize: 21 / fontScale,
    fontWeight: '700',
    color: 'white',

  }
})

export const describeServicePageContainer = StyleSheet.create({
  describeServicePageContainer: {
    flex: 1,
    paddingHorizontal: '3%',
    backgroundColor: colors.white,
    justifyContent: 'space-evenly',
  }
})