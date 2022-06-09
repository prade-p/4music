import React, {useState} from 'react'
import "./TextAreaInput.css"

function TextAreaInput({customStyle, inputStyle, label, errorMessage, isLastForm, seDescricao, descricao, ...props}) {
  const [focused, setFocused] = useState(false)
  const handleFocused = (e) => {
      setFocused(true);
  }
  
  return (
      <div className="TextAreaInput" style={customStyle}>
          <label>{label}</label>
          <textarea {...props}
          onBlur={handleFocused}
          onFocus={() => isLastForm && setFocused(true)} 
          focused={focused.toString()}
          style={inputStyle}/>
          <span>{errorMessage}</span>
      </div>
  )
}

export default TextAreaInput;