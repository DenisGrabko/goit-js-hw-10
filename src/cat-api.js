import axios from "axios";

axios.defaults.headers.common["x-api-key"] = "live_lJcJU1AuNnhlcVjceNk6Xjrh8ITLhUvkZcjR4Semjtm4rRofZYSDP6yaWhF3phbO";

 export function fetchBreeds() {
    const apiURL = 'https://api.thecatapi.com/v1/breeds';

    return axios 
    .get(apiURL)
    .then((res) => {
        if (res.status !== 200){
            throw new Error (`HTTP error. Status: ${res.status}`);
        }
        return res.data; 
        
    })    
    .catch((err) => {
        console.log("Fetch error: ", err);
        throw err;        
    });
} 


