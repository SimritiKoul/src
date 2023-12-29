//Get Started screen. This is the screen that the user will see when they run the application
import React from 'react';
import GetStartedBtn from './subscreens/GetStartedBtn';
import GetStartedContainer from './subscreens/GetStartedContainer';
import InstructionCard from './subscreens/InstructionCard';
import {stepsOfInstruction} from './StepOfInstructions';
import {screenTitle as styles} from './css';
import ScreenTitle from '../../../components/ScreenTitle';

const GetStarted = ({navigation}) => (
  <GetStartedContainer>
    <ScreenTitle titleMessage={"Let's get started"} style={styles.title}/>
    {stepsOfInstruction.map((instruction, i) =>
      <InstructionCard instruction={instruction.instruction}
                       source={instruction.image} title={instruction.title} key={i.toString()}/>)}
    <GetStartedBtn navigation={navigation}/>
  </GetStartedContainer>

)
export default GetStarted;