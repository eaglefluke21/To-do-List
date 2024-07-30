import axios from 'axios';

const apiAxios = axios.create({
    baseURL:'https://to-do-list-node.vercel.app',
});

export default apiAxios;