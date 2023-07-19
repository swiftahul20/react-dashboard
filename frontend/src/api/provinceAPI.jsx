import axios from "axios";
const apiBaseURL = 'https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json';
// const apiBaseURLa = `https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${id}.json`;

export const GETProvince = url => {
    return axios.get(apiBaseURL);
}

// export const GETRegency = url => {
//     return axios.get(apiBaseURLa)
// }

