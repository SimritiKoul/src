//this file will contain all the instructions about how to publish the resource that are displayed on the get started screen
import { Image } from "react-native"
import FirstStepPicture from '../../../images/The_Little_Things_Working.png'
import SecondStepPicture from '../../../images/Stuck_at_Home_Brainstorming.png'
import ThirdStepPicture from '../../../images/Happy_Bunch_Chat.png'
export const stepsOfInstruction = [
  {
    title: '1  Pick your category',
    instruction: 'Choose one out of the given categories that best represents the service that you are providing.',
    image: Image.resolveAssetSource(FirstStepPicture).uri
  },
  {
    title: '2  Describe your Service',
    instruction: 'Add a title and description to your service, and share the location with pictures.',
    image: Image.resolveAssetSource(SecondStepPicture).uri
  },
  {
    title: '3  Publish it!',
    instruction: 'See a preview of the service, make edits and publish',
    image: Image.resolveAssetSource(ThirdStepPicture).uri
  }
]