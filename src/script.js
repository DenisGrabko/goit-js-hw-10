import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

const breedsList = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');

const errorElement = document.querySelector('.error');
const loaderElement = document.querySelector('.loader');
errorElement.style.display = 'none';
loaderElement.style.display = 'block';

function addOptionToSelectList(breed) {
  const option = document.createElement('option');
  option.value = breed.id;
  option.textContent = breed.name;
  breedsList.appendChild(option);
}

function showCatInfo(result) {
  const infoOfCat = document.createElement('div');
  infoOfCat.textContent = result.name;
  document.body.appendChild(infoOfCat);
}

fetchBreeds()
  .then((breeds) => {
    
    breeds.forEach(addOptionToSelectList);

    
    loaderElement.style.display = 'none';
    breedsList.style.display = 'block';
  })
  .catch((error) => {
    console.log(error);
   
    loaderElement.style.display = 'none';
    errorElement.style.display = 'block';
  });


breedsList.addEventListener('change', () => {
  const selectedBreedId = breedsList.value;


  fetchCatByBreed(selectedBreedId)
    .then((result) => {
      catInfo.innerHTML = `
        <h2>${result.breeds[0].name}</h2>
        <p><strong>Опис:</strong> ${result.breeds[0].description}</p>
        <p><strong>Темперамент:</strong> ${result.breeds[0].temperament}</p>
        <img src="${result.url}" alt="${result.breeds[0].name}" width="250px">
      `;
    })
    .catch((error) => {
      console.error('Помилка отримання інформації про кота:', error);
    });
});