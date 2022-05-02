import { View, Text, StyleSheet, TouchableOpacity, } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import React from 'react';

const handlePress = () => {
  return alert('are you sure you want to delete this!?')
} 

const AddList = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.primary} >{props.text}</Text>
      <Text>Time: {props.time} </Text>
      <View style={styles.bin}>
        <TouchableOpacity>
          <AntDesign name="edit" size={16} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign name="delete" size={16} color="black" onPress={handlePress} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f3f3f3',
    padding: 20,
    margin: 10,
    width: 300,
    height: 150,
    justifyContent: 'center',
    borderRadius: 20,
  },
  primary: {
    color: 'black',
    fontSize: 24,
  },
  bin: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  } 
})

export default AddList