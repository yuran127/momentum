const API_KEY = '8b7d82d82cc014e22f2bfa986c4fb7f7';

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((Response) => Response.json())
        .then((data) => {
            const weather = document.querySelector('weather span:first-child');
            const city = document.querySelector('weather span:last-child');
            city.innerText = data.sys.country;
            weather.innerText = data.weather[0].main;
        });
}
function onGeoError() {
    alert("Can't find you. No weather for you.");
}

console.log('babo');
