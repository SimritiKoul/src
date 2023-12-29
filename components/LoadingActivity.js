/**
 * LoadingActivity component.
 * This component displays an activity indicator, indicating a loading state.
 *
 * @component
 * @returns {JSX.Element} LoadingActivity component
 */

import { ActivityIndicator, View } from "react-native";
import { loadingActivity as styles } from "./css";
export default LoadingActivity = () => (
  <View style={styles.container}>
    <ActivityIndicator size={'large'}/>
  </View>
)