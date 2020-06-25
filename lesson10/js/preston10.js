const apiURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=8ef3acee6058752fb9adc42140902cd6&units=imperial";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.table(jsObject);

        const fiveday = jsObject.list.filter(x => x.dt_txt.includes('12:00:00'));


        console.log(fiveday);
        const weekday = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];
        let day = 0;


        fiveday.foreach(forecast => {

            let d = new Date(forecast.dt_txt);
            document.getElementById(`forecast${day+1}`).textContent = forecast.main.temp;
            const currentTemp = document.querySelector('forecast');

            document.getElementById(`dayofweek${day+1}`).textContent = weekday[d.getDay()];
            const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
            const desc = jsObject.weather[0].description;

            document.getElementById('imagesrc').textContent = imagesrc;
            document.getElementById('icon').setAttribute('src', imagesrc);
            document.getElementById('icon').setAttribute('alt', desc);

            day++;

        });

    });