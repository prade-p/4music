const axios = require("axios");

const BASE_URL = "https://servicodados.ibge.gov.br/api/v1";

const fetchStates =  () => {
    const url = `${BASE_URL}/localidades/estados`;
    return axios.get(url).then(res => res.data);
}

const fetchCitiesByState =  (uf) => {
    const url = `${BASE_URL}/localidades/estados/${uf}/municipios`;
    return axios.get(url).then(res => res.data);
}

fetchCitiesByState("MG").then(console.log)