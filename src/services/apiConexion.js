import axios from 'axios';

let url_base = "https://mindicador.cl/api/dolar";

export const apiGet = async () => {
    try {
        let result = await axios.get(url_base);
        return result.data;
    } catch (error) {
        console.error(error);
    }
}