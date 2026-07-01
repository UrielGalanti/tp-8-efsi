import { TextInput, StyleSheet } from "react-native";

const InputField = ({ text, isHidden, onChangeText }) => {
  return (
    <TextInput
      style={styles.input}
      onChangeText={onChangeText}
      placeholder={text}
      secureTextEntry={isHidden}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: "85%",
    height: 50,
    borderWidth: 1,
    borderColor: "#b2082d", 
    borderRadius: 4,
    paddingHorizontal: 12,
    marginBottom: 10,
    backgroundColor: "#fff",
    fontSize: 16,
  },
});

export default InputField;