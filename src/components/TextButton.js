import { Pressable, Text, StyleSheet } from "react-native";

const TextButton = ({ text, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        pressed && styles.pressed,
      ]}
    >
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  pressed: {
    opacity: 0.6,
  },
  text: {
    color: "#000",
    fontSize: 15,
    fontWeight: "500",
  },
});

export default TextButton;