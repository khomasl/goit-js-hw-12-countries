export default function fetchCountries(searchQuery){
    return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
    .then(response =>{
        if (response.ok) { 
            return  response.json();
        }
        throw new Error('Don`t found. Please enter a correct query!');
    })
    .catch((error) => {
        result.innerHTML = '';
        notifyAlert(error);
    });
    //.then(countries => countries.filter(country => country.name.toLowerCase().includes(searchQuery)))
}