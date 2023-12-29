//return a view of contact info with an icon on the resource card
import { locationIcon, phoneIcon } from "../icons"
import { View } from "react-native"
import { Text } from "react-native-paper"
import { resourceCard as styles } from "../css"
export default renderResourceCardContactInfo = (location, number) => {
  if (location) return (<View style={styles.resourceCardContactInfoContainer}>
                          {locationIcon}
                          <Text style={styles.resourceCardcontactInfo}>{location}</Text>
                        </View>)
  else return (<View style={styles.resourceCardContactInfoContainer}>
                {phoneIcon}
                <Text style={styles.resourceCardcontactInfo}>{number}</Text>
              </View>)
}
