import { alert, error } from '../../node_modules/@pnotify/core/dist/PNotify.js';
import debounce from '../../node_modules/lodash/debounce';
import { input, result } from "./refs.js";
import {renderedCountriesList, renderedCountryData} from './markup.js';
import fetchCountries from './fetchCountries.js';
import '@pnotify/core/dist/BrightTheme.css';

//input.addEventListener('input', _.debounce(onSearchCountryChange, 500));
input.addEventListener('input', debounce(onSearchCountryChange, 500));

function onSearchCountryChange(evt){
    evt.preventDefault();
    const searchQuery = evt.target.value.toLowerCase();
    
    if (searchQuery === '') {
      result.innerHTML = '';
      return;
    };

    fetchCountries(searchQuery)   
    .then(searchCountries => {
        const numberCountries = searchCountries.length;  
        
        if (numberCountries === 1) {
          renderedCountryData(searchCountries[0])
          return;
        } 

        if (numberCountries <= 10) {
          renderedCountriesList(searchCountries);
          return;
        } 
        
        //notification
        error({
          delay: 4000,
          text: 'Too many matches found. Please enter a more specific query!'
        });

        result.innerHTML = '';
        
    })
    .catch(err => {
        result.innerHTML = '';
        alert({
          delay: 4000,
          text: 'Don`t found. Please enter a correct query!'
        });
        console.error("Error3: ", err);
    });
}