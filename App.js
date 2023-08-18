import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapScreen from './MapScreen'

const App = () => {
  return (
    <View style={styles.container}>
      <MapScreen/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

})