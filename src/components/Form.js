import { useState } from "react"
import InputField from "./InputField"
import Button from "./Button"

const Form = ({onSubmit}) =>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <>
            <InputField text="Email" onChangeText={setEmail}/>
            <InputField text="Contraseña" onChangeText={setPassword} isHidden={true}/>
            <Button text="Ingresar" onPress={onSubmit}></Button>
        </>
    )
}
export default Form