import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainContainer from './src/MainContainer';


export default function App() {
  return (
    <View>
      <StatusBar style="auto" />
      <MainContainer />
    </View>
  );
}
