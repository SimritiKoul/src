// Avatar component from react-native-paper has three type: Image, Text, Icon
//Avatar component is a small circle where the type is displayed inside that circle
//this function will receive a type as the argument and return the correct Avatar type component
import { Avatar } from "react-native-paper"
export default renderAvarta = (type) => {
  if (type.icon) return <Avatar.Icon {...type}/>
  else if (type.source) {
    const {source, ...remainingSettings} = type
    return <Avatar.Image source={{uri: source}} {...remainingSettings} />}
  else return <Avatar.Text {...type}/>
}