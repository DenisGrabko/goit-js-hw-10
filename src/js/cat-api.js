import axios from 'axios';

axios.defaults.headers.common['x-api-key'] = 'live_lJcJU1AuNnhlcVjceNk6Xjrh8ITLhUvkZcjR4Semjtm4rRofZYSDP6yaWhF3phbO';
  
  const apiURL ='https://api.thecatapi.com';

export function fetchBreeds() {

  return axios
    .get(`${apiURL}/v1/breeds`)
    .then((res) => {
      return res.data;
    })   
}

export function fetchCatByBreed(breedId) {
  const endpoint = `${apiURL}/v1/images/search?breed_ids=${breedId}`;

  return axios
    .get(endpoint)
    .then((result) => {
      return result.data[0];
    })   
}
