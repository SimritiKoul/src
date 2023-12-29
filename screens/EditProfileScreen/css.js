import { StyleSheet } from "react-native"
import { fontScale, colors } from "../../base"
export const editProfileContainer = StyleSheet.create({
  editProfileContainer: {
    flex: 1,
    backgroundColor: colors.white
  }
})

export const saveBtn = StyleSheet.create({
  button: {
    width: "90%",
    height: "10%",
    backgroundColor: colors.appBtn,
    borderRadius: 43,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    shadowColor:colors.lightdark,
    shadowOpacity:0.25,
    shadowRadius:10,
    borderWidth:1,
    borderColor:colors.lightgray,
    shadowOffset:{ height: 9 },
    marginTop: "10%",
  },
  buttonText: {
    color: colors.white,
    fontSize: 21 / fontScale,
    fontWeight: "bold",
  },
})


export const editProfile = StyleSheet.create({
  editProfilePictureContainer: {
    flex: 3,
    alignItems:'center',
    justifyContent:'center',
  },
  profilePictureView: {
    width: '45%',
    height: '69%',
    borderRadius: 100,
    backgroundColor: colors.white,
    bottom:'10%'
   
  },
  profilePicture: {
    width:'100%',
    height:'100%',
    borderRadius:100
  },
})

export const editProfileInfoContainer = StyleSheet.create({
  editProfileInfoContainer: {
    flex: 7,
    bottom:'2%'
  },
})

export const editProfileBtn = StyleSheet.create({
  editProfilePictureButtonView: {
    position:'absolute',
    bottom: '16%', 
    left:'56%'
  },
})

export const editProfileInfo = StyleSheet.create({
  editProfileInfoField: {
    width:'100%',
    height: '13%',
    marginBottom: '8%',
    marginLeft: '8%',
    justifyContent:'space-around'
  },
  editProfileInfoTitle: {
    fontSize: 20 / fontScale,
    fontWeight:'700',
    color:'#d3d3d3'
  },
  contentTextStyle: {
    width:'100%',
    height:'40%',
    fontSize: 20/ fontScale,
    fontWeight:'700',
    borderBottomWidth: 0.199
  }
})