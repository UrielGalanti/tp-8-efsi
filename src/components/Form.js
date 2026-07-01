import { useState } from "react"
import InputField from "./InputField"
import Button from "./Button"
import TextButton from "./TextButton"

const Form = ({onSubmit, onForget, onRegister}) =>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <>
            <InputField text="Email" onChangeText={setEmail}/>
            <InputField text="Contraseña" onChangeText={setPassword} isHidden={true}/>
            <Button text="Ingresar" onPress={onSubmit}/>
            <TextButton text="Olvidaste la clave?" onPress={onForget}/>
            <TextButton text="Crear Cuenta" onPress={onRegister}/>
        </>
    )
}
export default Form