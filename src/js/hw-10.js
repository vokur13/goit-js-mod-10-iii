import '../css/styles.css';
import { fetchCountries } from '../js/fetchCountries';
import { renderCountryCard } from '../js/fetchCountries';
import LodashDebounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 500;

const refs = {
  input: document.querySelector('#search-box'),
  countryCardContainer: document.querySelector('.country-info'),
};

refs.input.addEventListener('input', LodashDebounce(onInput, DEBOUNCE_DELAY));

function onInput(e) {
  const country = e.target.value;
  fetchCountries(country)
    .then(renderCountryCard)
    .catch(error => {
      console.log('Oops, there is no country with that name');
    });
}
