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
                let h2 = document.createElement('div');
                let motto = document.createElement('div');
                let yearFounded = document.createElement('div');
                let currentPopulation = document.createElement('div');
                let photo = document.createElement('img');
                let name = document.createElement('div');
                let averageRainfall = document.createElement('div');

                photo.setAttribute('src', towns.photo);
                motto.innerHTML = `<i>${towns.motto}<br>`;

                currentPopulation.innerHTML = `Population: ${towns.currentPopulation}<br>`;
                yearFounded.innerHTML = `Year Founded: ${towns.yearFounded}<br>`;
                h2.innerHTML = `<h2>${towns.name}</h2>`;
                averageRainfall.innerHTML = `Average Rainfall :${towns.averageRainfall}`;
                card.appendChild(name);
                card.appendChild(h2);
                card.appendChild(motto);
                card.appendChild(yearFounded);
                card.appendChild(currentPopulation);
                card.appendChild(averageRainfall);
                card.appendChild(photo);

                document.querySelector('div.cards').appendChild(card);
            }
        });
    });