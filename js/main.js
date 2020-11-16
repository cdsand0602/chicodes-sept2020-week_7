const api = {
   key: "3a4c63478be89437a0567848f51c1d8c",
   baseurl: "api.openweathermap.org/data/2.5/"
}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
    if (evt.keyCode == 13) {
         getResults(searchbox.value);
         console.log(searchbox.value);
    }
}

function getResults (query) {
    fetch(`${api.base}weather?q=${query}&feels_like=imperial&appid=${api.key}`)
      .then(weather => {
          return weather.json();
      }) .then(displayResults);                
}

function displayResults (weather) {
    console.log(weather);
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;
}