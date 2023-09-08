import { fetchBreeds } from "./cat-api";

const outBreedsList = document.querySelector("breed-select");



fetchBreeds()
    .then((breeds) => {console.log("Breeds: ", breeds)})
    .catch((err) => {console.log(err)});