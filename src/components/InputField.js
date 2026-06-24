import { TextInput } from "react-native"

const InputField = ({text, isHidden, onChangeText}) =>{
    return (
        <>
            <TextInput 
                onChangeText={onChangeText}
                placeholder={text}
            />
        </>
    )
}
export default InputField