// script.js

import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

const breedsList = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');

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

function showCatInfo(result) {
  const infoOfCat = document.createElement('div');
  infoOfCat.textContent = result.name;
  document.body.appendChild(infoOfCat);
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

// Додаємо обробник подій для вибору породи
breedsList.addEventListener('change', () => {
  const selectedBreedId = breedsList.value;

  // Отримуємо інформацію про кота за обраною породою та відображаємо її
  fetchCatByBreed(selectedBreedId)
    .then((result) => {
      // Відображаємо дані про кота (назва породи, опис, темперамент)
      catInfo.innerHTML = `
        <h2>${result.breeds[0].name}</h2>
        <p><strong>Опис:</strong> ${result.breeds[0].description}</p>
        <p><strong>Темперамент:</strong> ${result.breeds[0].temperament}</p>
        <img src="${result.url}" alt="${result.breeds[0].name}">
      `;
    })
    .catch((error) => {
      console.error('Помилка отримання інформації про кота:', error);
    });
});
