import { SafeAreaView } from "react-native-safe-area-context";
import { Text, StyleSheet } from "react-native";

const Header = () => {
  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      <Text style={styles.title}>
        Login App (Sack, Galanti)
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#B2082D",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 16,
    width: "100%"
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});

export default Header;