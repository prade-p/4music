import React, {useState} from 'react'
import "./SelectInput.css"

function SelectInput({dataSet = [], firstOption, inputStyle, label, errorMessage, isLastForm, seDescricao, descricao, containerStyle, ...props}) {
  const [focused, setFocused] = useState(false)
  const handleFocused = (e) => {
      setFocused(true);
  }
  
  return (
      <div className="SelectInput" style={containerStyle}>
          <label>{label}</label>
          <select {...props} 
          onBlur={handleFocused}
          onFocus={() => isLastForm && setFocused(true)} 
          focused={focused.toString()}>
            <option value="" defaultValue={firstOption}>{firstOption}</option>
            {dataSet?.map(data => {
              return (<option key={data?.value} value={data?.value}>{data?.label}</option>)
            })}
          </select>
          <span>{errorMessage}</span>
      </div>
  )
}

export default SelectInput;

// import React, {useEffect, useState} from 'react'
// import "./SelectInput.css"

// const axios = require("axios");
// const BASE_URL = "https://servicodados.ibge.gov.br/api/v1";

// export const fetchStates = async () => {
//     const url = `${BASE_URL}/localidades/estados`;
//     const res = await axios.get(url);
//     return res.data;
// }

// export const fetchCitiesByState = async (uf) => {
//     const url = `${BASE_URL}/localidades/estados/${uf}/municipios`;
//     const res = await axios.get(url);
//     return res.data;
// }

// function SelectInput({isState, options, firstOption, inputStyle, label, errorMessage, isLastForm, seDescricao, descricao, ...props}) {
  
//   const [focused, setFocused] = useState(false);
  
//   const [states, setStates] = useState([]);
//   useEffect(() => {
//       fetchStates().then(data => setStates(data))
//   }, [])

//   const handleFocused = (e) => {
//       setFocused(true);
//   }
  
//   return (
//       <div className="SelectInput">
//           <label>{label}</label>
//           <select {...props} 
//           onBlur={handleFocused}
//           onFocus={() => isLastForm && setFocused(true)} 
//           focused={focused.toString()}>
//             <option value="" defaultValue={firstOption}>{firstOption}</option>
//             {isState 
//                ? states.map(state => {
//               return (<option key={state.sigla} value={state.sigla}>{state.nome}</option>)
//             }) : 
//             <option value="eita">eita</option>}
//           </select>
          
//       </div>
//   )
// }

// export default SelectInput;