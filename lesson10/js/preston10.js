 const apiURLs = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=8ef3acee6058752fb9adc42140902cd6&units=imperial";
 fetch(apiURLs)
     .then((response) => response.json())
     .then((jsObject) => {
         console.log(jsObject);

         const fivedayforecast = jsObject.list.filter(x => x.dt_txt.includes('12:00:00'));


         console.log(fivedayforecast);
         const weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
         let day = 0;


         fivedayforecast.forEach(forecast => {

             let d = new Date(forecast.dt_txt);
             document.getElementById(`forecast${day+1}`).textContent = forecast.main.temp;

             document.getElementById(`dayofweek${day+1}`).textContent = weekday[d.getDay()];

             day++;

         });

     });