import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Logo from './src/components/Logo';
import Form from './src/components/Form';

export default function App() {
  const onSubmit = () =>{

  }
  return (
    <SafeAreaView  style={styles.container}>
      <Logo/>
      <Form onSubmit={onSubmit}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
