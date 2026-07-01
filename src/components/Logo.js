import { Image, StyleSheet } from "react-native";

const Logo = () => {
  return (
    <Image
      source={require("../../assets/images/logo.png")}
      style={styles.logo}
      resizeMode="contain"
    />
  );
};

const styles = StyleSheet.create({
  logo: {
    width: "85%",
    height: 180,
    marginBottom: 30,
  },
});

export default Logo;