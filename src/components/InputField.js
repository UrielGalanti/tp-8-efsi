import { TextInput, StyleSheet } from "react-native";

const InputField = ({ text, isHidden, onChangeText }) => {
  return (
    <TextInput
      style={styles.input}
      onChangeText={onChangeText}
      placeholder={text}
      secureTextEntry={isHidden}
      placeholderTextColor="#777"
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: "85%",
    height: 50,
    borderWidth: 1,
    borderColor: "#7C4DFF", 
    borderRadius: 4,
    paddingHorizontal: 12,
    marginBottom: 10,
    backgroundColor: "#fff",
    fontSize: 16,
  },
});

export default InputField;