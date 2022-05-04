import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native'
import { Ionicons, Feather, MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react'
import AddList from '../components/AddList'
import { TextInput } from 'react-native-gesture-handler';



const Home = () => {
  
  const [task, setTask] = useState()
  const [time, setTime] = useState()

  const [taskItems, setTaskItems] = useState([])
  const [timeItems, setTimeItems] = useState([])
  const [modalVisible, setModalVisible] = useState(false);
  
  const handleAddTask = () => {
    setTaskItems([...taskItems, task])
    setTimeItems([...timeItems, time])
    setModalVisible(!modalVisible)
    setTask(null)
    setTime(null)
  }

  console.log(time, task)

  return (
    <View style={styles.container}>
        <Modal
          animationType='fade'
          transparent={false}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible)
          }}
        >
          <View style={styles.centeredView} >
            <View style={styles.modalView} >
              <TextInput 
                placeholder='set task' 
                maxLength={64} 
                style={styles.modalInput}
                value={task}
                onChangeText={text => setTask(text)} 
              />
              <TextInput 
                placeholder='set time' 
                maxLength={5} 
                style={styles.modalInput}
                value={time}
                onChangeText={text => setTime(text)} 
              />
              <View style={{ ...styles.modalBtn }}>
                <TouchableOpacity>
                  <MaterialIcons name="cancel" size={24} color="black" onPress={() => setModalVisible(!modalVisible)}/>
                </TouchableOpacity>
                <TouchableOpacity >
                  <Feather name="check" size={24} color="black" onPress={handleAddTask}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      <View>
        <Text style={styles.header}>Today's Task</Text>
        <View style={styles.task}>
          {taskItems.map((item, index) => {
            return <AddList key={index} text={item} />
          })}
        </View>
      </View>
        <View>
          <TouchableOpacity style={styles.footer} onPress={() => setModalVisible(true)} >
            <Ionicons name="add-circle" size={styles.size} color="white" />
          </TouchableOpacity>
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
    position: 'absolute',
    bottom: -300,
    alignSelf: 'flex-end',
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
    width: 300,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#778476",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalBtn:{
    width: 300,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    padding: 5,
    marginTop: 10,
  },
  modalInput: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: 200,
  },
})

export default Home;