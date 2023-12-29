import React from 'react';
import { View, StyleSheet, Image, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';

function FirstPage(props) {
  const {fontScale} = useWindowDimensions()
  const styles = makeStyle(fontScale)
  return (
    <View 
          style={styles.container}>
        <View 
              style={styles.upperPart}>
          <View 
              style={styles.imageContainer}>
            <Image 
                  source={require('../images/Unite_Logo.png')} resizeMode='cover' style={styles.image}/>
          </View>
        </View>
        <View 
              style={styles.lowerPart}></View>
        <View 
              style={styles.promptContainer}>
              <View 
                    style={styles.innerPromptContainer}>
                    <Text 
                          style={styles.i_am_textStyle}>
                                I AM...
                    </Text>
                    
                    <TouchableOpacity>
                      <View 
                            style={styles.firstBoxContainer}>
                            <Text 
                                  style={styles.boxContainerText1}>
                                        Someone who wants to
                            </Text>
                            <Text 
                                  style={styles.boxContainerText2}>
                                        provide servies
                            </Text>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                      <View 
                            style={styles.secondBoxContainer}>
                            <Text 
                                  style={styles.boxContainerText1}>
                                        Someone who wants to
                            </Text>
                            <Text 
                                  style={styles.boxContainerText2}>
                                        receive services
                            </Text>
                      </View>
                    </TouchableOpacity>
              </View>
        </View>
    </View>
  );
}

const makeStyle = fontScale => StyleSheet.create({
  container: {
    flex:1
  },
  upperPart: {
    flex: 6,
    backgroundColor:'red',
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30,
    alignItems:'center'
  
  },
  lowerPart: {
    flex: 4,
    backgroundColor:'#FFFFFF'
  },
  imageContainer: {
    width: '40%',
    height: '30%',
    backgroundColor: '#FFFFFF',
    borderRadius: 100,
    top: '18%'

  },
  image: {
    width: '100%',
    height: '100%'
  },
  promptContainer: {
    position:'absolute',
    width: '90%',
    height: '55%',
    backgroundColor:'#FFFFFF',
    alignSelf:'center',
    top: '40%',
    borderRadius: 40,
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 20,
    paddingVertical: 80,
    paddingHorizontal: 35
  },
  innerPromptContainer: {
    width: '100%',
    height:'100%',
   
  },
  i_am_textStyle: {
    alignSelf:'center',
    fontSize: 30 / fontScale,
    color:'#FE7940',
    fontWeight:'800'
  },
  firstBoxContainer: {
    width: '100%',
    height: '63%',
    backgroundColor:'#FE7940',
    borderRadius: 30,
    top: '50%',
    justifyContent:'center',
    alignItems:'center',
    

  },
  boxContainerText1: {
    fontSize: 18 / fontScale,
    fontWeight: '700',
    color:'#FFFFFF'
  },
  boxContainerText2: {
    fontSize: 18 / fontScale,
    fontWeight: '700',
    marginTop: 3,
    color:'#FFFFFF'

  },  
  secondBoxContainer: {
    width: '100%',
    height: '63%',
    backgroundColor:'#FE7940',
    borderRadius: 30,
    bottom: '20%',
    justifyContent:'center',
    alignItems:'center'
  },

});

export default FirstPage;