import axios from 'axios';

let val= `http://localhost:4000/api`

export default axios.create({
  baseURL: val,
});