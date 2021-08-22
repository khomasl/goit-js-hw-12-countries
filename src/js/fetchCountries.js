export default function fetchCountries(searchQuery){
    return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
    .then(response =>{
         if (response.ok) { 
            return  response.json()
        }
        throw new Error('Don`t found. Please enter a correct query!');
    })
    //.then(countries => countries.filter(country => country.name.toLowerCase().includes(searchQuery)))
}