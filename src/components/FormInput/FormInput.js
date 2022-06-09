import React, { useState } from "react";
import "./FormInput.css"

function FormInput({customStyle, inputStyle, label, errorMessage, isLastForm, seDescricao, descricao, ...props}) {
    const [focused, setFocused] = useState(false)
    const handleFocused = (e) => {
        setFocused(true);
    }
    
    return (
        <div className="formInput" style={customStyle}>
            <label>{label}</label>
            <input {...props} 
            onBlur={handleFocused}
            onFocus={() => isLastForm && setFocused(true)} 
            focused={focused.toString()}
            style={inputStyle}/>
            <span>{errorMessage}</span>
        </div>
    )
}

export default FormInput;