import { StyleSheet, View } from 'react-native'
import MapScreen from './MapScreen';
// import Test from './test';

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



