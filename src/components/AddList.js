import { View, Text, StyleSheet, TouchableOpacity, } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import React from 'react';


const AddList = (props, taskItems) => {

  const handleRemove = (index) => {
    const items = [...taskItems]
    items.splice(index, 1)
    setTaskItems(items)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.primary} >{props.text}</Text>
      <View style={styles.bin}>
        <TouchableOpacity>
          <AntDesign name="delete" size={16} color="black" onPress={handleRemove}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#C5C9D4',
    padding: 9,
    margin: 10,
    width: 300,
    height: 80,
    justifyContent: 'center',
    borderRadius: 20,
  },
  primary: {
    color: 'black',
    fontSize: 18,
  },
  bin: {
    flex: 1,
    bottom: -24,
    flexDirection: 'column',
    alignItems: 'flex-end',
  } 
})

export default AddList