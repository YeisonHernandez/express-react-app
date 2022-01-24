import axios from 'axios';

export default axios.create({
   baseURL: 'http://localhost:3030',
   timeout: 5000,
   headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json;charset=utf-8',
   },
   data: {},
});