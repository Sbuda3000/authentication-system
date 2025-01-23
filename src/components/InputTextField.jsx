const InputTextField = ( { id, type, label, disabled } ) => {
    return (
        <input
            className="input-text-field"
            id={id} 
            type={type}
            placeholder={label}
            disabled={disabled}
        />
    );
}

export default InputTextField;