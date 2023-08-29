
  import { StyleSheet, View } from 'react-native'
import Test from './test';
import MapScreen from './MapScreen';
import Hehe from './hehe';

const App = () => {
  return (
    <View style={styles.container}>
      {/* <MapScreen/> */}
      {/* <Test/> */}
      <Hehe />
    </View>
  );
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

})