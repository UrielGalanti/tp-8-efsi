const TextButton = ({ text, onPress }) => {
    return (
        <Button
            title={text}
            onPress={() => {onPress}}
            
        />
    )
}
export default TextButton