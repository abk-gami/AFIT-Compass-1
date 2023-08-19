import { StyleSheet, View } from 'react-native'
import React from 'react'
// import MapScreen from './MapScreen';
import Test from './test';

const App = () => {
  return (
    <View style={styles.container}>
      {/* <MapScreen/> */}
      <Test/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

})