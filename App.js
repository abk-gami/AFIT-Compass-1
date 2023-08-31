
  import { StyleSheet, View, SafeAreaView } from 'react-native'
import Test from './test';
import MapScreen from './MapScreen';
import Hehe from './hehe';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <MapScreen/>
      {/* <Test/> */}
      {/* <Hehe /> */}
    </SafeAreaView>
  );
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

})