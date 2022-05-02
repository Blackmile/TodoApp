import { View, Text, StyleSheet, TouchableOpacity, Modal, TextInput } from 'react-native'
import { Ionicons, Feather, MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react'
import AddList from '../components/AddList'



const Home = () => {
  
  const [task, setTask] = useState([])
  const [modalVisible, setModalVisible] = useState(false);
  
  const handleInput = () => {
    console.log('i was called', modalVisible)
    setModalVisible(true)
    return (
      <View style={styles.centeredView} >
        <Modal
          animationType='fade'
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible)
          }}
        >
          <View style={styles.centeredView} >
            <View style={styles.modalView} >
              <Text>this is a modal</Text>
              {/* <Feather name="check" size={12} color="black" onPress={() => setModalVisible(!modalVisible)}/>
              <MaterialIcons name="cancel" size={12} color="black" /> */}
            </View>
          </View>
        </Modal>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>Today's Task</Text>
        <View style={styles.task}>
          <AddList text={'i will do something today'} time={'9 : 00am'} />
          <AddList text={'i will do something today'} time={'9 : 00am'} />
        </View>
        <View>
          <TouchableOpacity style={styles.footer} onPress={handleInput} >
            <Ionicons name="add-circle" size={styles.size} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#971FCC',
  },
  footer: {
    marginLeft: 270,
    marginTop: 250,
    position: 'absolute',
  },
  size: 84,
  header: {
    padding: 10,
    color: 'white',
    fontSize: 32,
  },
  task: {
    padding: 10,
    alignSelf: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "gray",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
})

export default Home;