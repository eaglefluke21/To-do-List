import axios from 'axios';

const apiAxios = axios.create({
    baseURL:'https://task-list-node.vercel.app',
});

export default apiAxios;