const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=8ef3acee6058752fb9adc42140902cd6&units=imperial";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        const currentTemp = document.querySelector('current-Temp');
        document.getElementById('current-temp').textContent = jsObject.main.temp;
        const icon = document.querySelector('img');

        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
        const desc = jsObject.weather[0].description;
        document.getElementById('imagesrc').textContent = imagesrc;
        document.getElementById('icon').setAttribute('src', imagesrc);
        document.getElementById('icon').setAttribute('alt', desc);
        //  icon.setAttribute('src', imagesrc);
        //  icon.setAttribute('alt', desc);


    });