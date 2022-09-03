import countryCardTpl from '../templates/country-card.hbs';

const container = document.querySelector('.country-info');

export const fetchCountries = name => {
  return fetch(`https://restcountries.com/v3.1/name/${name}`).then(response => {
    return response.json();
  });
};

export const renderCountryCard = country => {
  const markupCountryInfo = country.map(item => {
    return countryCardTpl(item);
  });
  container.innerHTML = markupCountryInfo;
};
