const axios = require("axios");
const BASE_URL = "https://servicodados.ibge.gov.br/api/v1";

const sortByLabelCompare = (a, b) => {
    return a.label.localeCompare(b.label);
}

const parseState = (state) => {
    return {label: state.nome, value: state.sigla};
}
export const fetchStates = () => {
    const url = `${BASE_URL}/localidades/estados`;
    return axios.get(url)
    .then(res => res.data)
    .then(data => {return data.map(parseState)})
    .then(data => {return data.sort(sortByLabelCompare)});
}

const parseCity = (city) => {
    return {label: city.nome, value: city.nome};
} 

export const fetchCitiesByState = (uf) => {
    const url = `${BASE_URL}/localidades/estados/${uf}/municipios`;
    return axios.get(url)
    .then(res => res.data)
    .then(data => {return data.map(parseCity)})
    .then(data => {return data.sort(sortByLabelCompare)});
}
