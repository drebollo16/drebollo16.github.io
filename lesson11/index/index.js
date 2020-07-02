const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';


fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {

        const towns = jsonObject['towns'];

        towns.forEach(towns => {


            if (towns.name == 'Preston' || towns.name == 'Fish Haven' || towns.name == 'Soda Springs') {

                let card = document.createElement('section');

                let display = document.createElement('div');
                let motto = document.createElement('h3');
                let yearFounded = document.createElement('h3');
                let currentPopulation = document.createElement('h3');
                let photo = document.createElement('img');
                let name = document.createElement('h2');
                let averageRainfall = document.createElement('h3');

                photo.setAttribute('src', towns.photo);
                motto.innerHTML = `<i>${towns.motto}`;
                display.setAttribute('class', 'display');
                card.setAttribute('class', 'sectdiv');

                currentPopulation.innerHTML = `Population: ${towns.currentPopulation}`;
                yearFounded.innerHTML = `Year Founded: ${towns.yearFounded}`;
                name.innerHTML = `${towns.name}`;
                averageRainfall.innerHTML = `Average Rainfall :${towns.averageRainfall}`;
                card.appendChild(display);
                display.appendChild(name);

                display.appendChild(motto);
                display.appendChild(yearFounded);
                display.appendChild(currentPopulation);
                display.appendChild(averageRainfall);

                card.appendChild(photo);

                document.querySelector('div.cards').appendChild(card);
            }
        });
    });