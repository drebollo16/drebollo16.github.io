const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5585010&APPID=8ef3acee6058752fb9adc42140902cd6&units=imperial";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {


        document.getElementById('currently').textContent = jsObject.weather[0].description;
        let high = document.getElementById('high').innerHTML = jsObject.main.temp_max + '&deg;F';
        document.getElementById('humid').innerHTML = jsObject.main.humidity + '%';
        let windspeed = document.getElementById('windspeed').innerHTML = jsObject.wind.speed + 'mph';

        //the formula to calculate the wind chill factor is LaTeX: 
        // f=35.74+0.6215\:t-35.75\:s^{0.16}+0.4275\:t\:s^{0.16}
        let ws = Math.pow(windspeed, 0.16);

        let windchill = 35.74 + 0.6215 * high - 35.75 * ws + 0.4275 * high * ws;

        if (high <= 50 && windspeed > 3) {

            document.getElementById('windchill').innerHTML = Math.round(windchill);
        } else {

            document.getElementById('windchill').innerHTML = "N/A";
        }


    });


const apiURLs = "https://api.openweathermap.org/data/2.5/forecast?id=5585010&APPID=8ef3acee6058752fb9adc42140902cd6&units=imperial";
fetch(apiURLs)
    .then((response) => response.json())
    .then((jsObject) => {

        const forecast = jsObject['list'];


        let weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let day = 0;

        for (let i = 6; i < forecast.length; i += 8) {

            const days = new Date(forecast[i].dt_txt);
            const date = weekday[days.getDay()];

            document.getElementById(`dayofweek${day+i}`).textContent = date;

            const imagesrc = 'https://openweathermap.org/img/w/' + forecast[i].weather[0].icon + '.png';
            const desc = forecast[i].weather[0].description;

            document.getElementById(`icon${i}`).setAttribute('src', imagesrc);
            document.getElementById(`icon${i}`).setAttribute('alt', desc);
            document.getElementById(`forecast${i}`).textContent = forecast[i].main.temp;
        }

    });


/*-----------------Event Table-------------------------------------------*/
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';


fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {

        const towns = jsonObject['towns'];
        for (let i = 0; i < jsonObject.towns.length; i++) {
            if (towns[i].name == 'Fish Haven') {
                let townnames = jsonObject.towns[i].events;
                townnames.innerHTML = " ";
                let newCard = document.createElement('Section');
                let display2 = document.createElement('div');
                for (i in towns[i].events) {
                    let eventArray = document.createElement('p')
                    eventArray.innerHTML = `${townnames[i]}`;
                    display2.setAttribute('class', 'display2');
                    newCard.setAttribute('class', 'event');
                    document.querySelector('section.newCard').appendChild(eventArray);
                }
            }
        }

    });