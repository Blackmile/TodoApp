import { NavigationContainer } from '@react-navigation/native';

import Home from './src/screens/Home';
import Note from './src/screens/Note'
import Alarm from './src/screens/Alarm'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';

const homeName = 'Home'
const noteName = 'Note'
const alarmName = 'Alarm'

const Tab = createMaterialTopTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        style={{ paddingTop: 30 }}
        initialRouteName={{homeName}}
        screenOptions={({route}) => ({
          tabBarShowLabel: false,
          tabBarIcon: ({focus, color, size}) => {
            let rn = route.name;

            if (rn === homeName){
              return <Ionicons name='home-outline' size={20} />
            }

            if (rn === noteName){
              return <Foundation name='clipboard-notes' size={20} />
            }

            if (rn === alarmName){
              return <Ionicons name='alarm-outline' size={20} />
            }
          }
        })}
      >
        <Tab.Screen name={homeName} component={Home}  />
        <Tab.Screen name={alarmName} component={Alarm} />
        <Tab.Screen name={noteName} component={Note} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
