import axios from 'axios';

export default axios.create({
  baseURL: `https://superheroapi.com/api/${process.env.REACT_APP_SUPERHERO_API_SECRET}`,
});
