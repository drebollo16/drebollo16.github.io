  const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=3530103&APPID=f7da04040c3d069b80af451215c7be78&units=imperial";
  fetch(apiURL)
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

  const apiURLs = "https://api.openweathermap.org/data/2.5/weather?id=3530103&APPID=f7da04040c3d069b80af451215c7be78&units=imperial";
  fetch(apiURLs)
      .then((response) => response.json())
      .then((jsObject) => {


          document.getElementById('currently').textContent = jsObject.weather[0].description;
          let high = document.getElementById('high').innerHTML = jsObject.main.temp_max + '&deg;F';
          document.getElementById('humid').innerHTML = jsObject.main.humidity + '%';




      });