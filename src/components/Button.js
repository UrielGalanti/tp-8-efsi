import { Button as RNButton } from "react-native";

const Button = ({ text, onPress }) => {
  return (
    <RNButton
      title={text}
      onPress={onPress}
    />
  );
};

export default Button;