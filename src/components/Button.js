import { Pressable, Text, StyleSheet } from "react-native";

const Button = ({
  text,
  onPress,
  disabled = false,
  backgroundColor = "#b2082d",
  textColor = "#FFFFFF",
}) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.button,
        { backgroundColor },
        pressed && !disabled && styles.pressed,
        disabled && styles.disabled,
      ]}
    >
      <Text style={[styles.text, { color: textColor }]}>
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "85%",
    height: 50,

    justifyContent: "center",
    alignItems: "center",

    borderRadius: 4,

    // Android
    elevation: 4,

    // iOS
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },

  pressed: {
    opacity: 0.85,
  },

  disabled: {
    opacity: 0.5,
  },

  text: {
    fontSize: 16,
    fontWeight: "600",
    textTransform: "uppercase",
  },
});

export default Button;