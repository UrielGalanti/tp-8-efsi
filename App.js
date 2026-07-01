import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Alert } from "react-native";
import Logo from './src/components/Logo.js';
import Form from './src/components/Form.js'
import { login } from "./src/api/auth";
import Header from './src/components/Header.js';

export default function App() {
  const onSubmit = async (email, password) => {
    const success = await login(email, password);
    if (success) {
      Alert.alert("Inicio de sesión correcto")
    } else {
      Alert.alert("Usuario o contraseña incorrectos", "Vuelva a intentar")
    }
  }
  const onForget = () => {
    Alert.alert("Olvidé mi contraseña", "Funcionalidad pendiente.")
  }
  const onRegister = () => {
    Alert.alert("Crear cuenta", "Funcionalidad pendiente.")
  }
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Logo />
        <Form
          onSubmit={onSubmit}
          onForget={onForget}
          onRegister={onRegister}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },

  content: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});