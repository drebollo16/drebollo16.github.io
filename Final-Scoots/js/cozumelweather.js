 const apiURL = "https://api.openweathermap.org/data/2.5/weather?city=cozumel&APPID=f7da04040c3d069b80af451215c7be78&units=imperial";
 fetch(apiURL)
     .then((response) => response.json())
     .then((jsObject) => {


         document.getElementById('currently').textContent = jsObject.weather[0].description;
         let high = document.getElementById('high').innerHTML = jsObject.main.temp_max + '&deg;F';
         document.getElementById('humid').innerHTML = jsObject.main.humidity + '%';
         let windspeed = document.getElementById('windspeed').innerHTML = jsObject.wind.speed + 'mph';


         let ws = Math.pow(windspeed, 0.16);

         let windchill = 35.74 + 0.6215 * high - 35.75 * ws + 0.4275 * high * ws;

         if (high <= 50 && windspeed > 3) {

             document.getElementById('windchill').innerHTML = Math.round(windchill);
         } else {

             document.getElementById('windchill').innerHTML = "N/A";
         }


     });

 const apiURL = "https://api.openweathermap.org/data/2.5/forecast?city=cozumel&APPID=f7da04040c3d069b80af451215c7be78&units=imperial";
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