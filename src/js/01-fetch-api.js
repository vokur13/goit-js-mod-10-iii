/*
 * - HTTP-запросы в браузере
 *  - Fetch API
 *  - Владка Network
 *  - HTTP-методы
 *  - Заголовки
 *  - MIME-типы
 *  - Параметры запроса
 * - Документация REST API
 * - Обработка 404 с fetch
 * - Аутентификация
 * - Библиотеки-обёртки
 * - https://pokeapi.co/
 */

import '../css/common.css';
import pokemonCardTpl from '../templates/pokemon-card.hbs';
// import API from './api-service';
// import getRefs from './get-refs';

const refs = {
  cardContainer: document.querySelector('.js-card-container'),
};

fetchPokemonByID().then(renderPokemonCard);

function fetchPokemonByID() {
  return fetch('https://pokeapi.co/api/v2/pokemon/4').then(response => {
    return response.json();
  });
}

function renderPokemonCard(pokemon) {
  const markupCards = pokemonCardTpl(pokemon);
  refs.cardContainer.innerHTML = markupCards;
}
