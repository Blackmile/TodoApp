import { View, Text, StyleSheet, } from 'react-native'
import React from 'react';

const AddList = (props) => {
  return (
    <View style={styles.container}>
      <Text style={{color: '#fff'}} >{props.text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f3f3f3',
    padding: 20,
    margin: 10,
    width: 300,
    height: 250,
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  }
})

export default AddList