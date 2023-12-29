import renderExpoIcon from "./renderExpoIcon"
import { View } from "react-native"
//this function will render the ratings star for the resource based on the reviewer's rating
//rating: number
//starStyle: an object of Expo Icon keys
export default renderStarRating = (rating, starStyle ) => {
  const arr = Array.from({length: 5})
  return (<View style={{
      flexDirection:'row',
      justifyContent:'space-evenly'
  }}>
              {arr.map((_, i) => {
                                //if the rating is bigger than the position of the current star, render the black star
                                if (rating > i) return renderExpoIcon('FontAwesome', 'star', {key: i.toString(),...starStyle})
                                else return renderExpoIcon('FontAwesome', 'star-o', {key: i.toString(),...starStyle})                                
                            })}
          </View>)
}