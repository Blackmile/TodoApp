import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import AddList from '../components/AddList'

const Home = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text>Today's Task</Text>
        <View>
          <AddList text={'task 1'} />
          <AddList text={'task 2'} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#971FCC',
  }
})

export default Home