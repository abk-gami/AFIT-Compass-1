
  import { StyleSheet, View } from 'react-native'
// import Test from './test';
import MapScreen from './MapScreen';

const App = () => {
  return (
    <View style={styles.container}>
      <MapScreen/>
      {/* <Test/> */}
    </View>
  );
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

})