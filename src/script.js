import { fetchBreeds } from "./cat-api.js";

const breedsList = document.querySelector('.breed-select');

// Приховуємо помилку та відображаємо лоадер перед виконанням запиту
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

fetchBreeds()
  .then((breeds) => {
    // Додаємо опції до вибірки
    breeds.forEach(addOptionToSelectList);

    // Після успішного запиту, приховуємо лоадер та відображаємо вибірку
    loaderElement.style.display = 'none';
    breedsList.style.display = 'block';
  })
  .catch((error) => {
    console.log(error);
    // У разі помилки, приховуємо лоадер та показуємо повідомлення про помилку
    loaderElement.style.display = 'none';
    errorElement.style.display = 'block';
  });
