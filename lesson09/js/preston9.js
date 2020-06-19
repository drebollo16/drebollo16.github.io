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
                let h2 = document.createElement('text');
                let motto = document.createElement('text');
                let yearFounded = document.createElement('text');
                let currentPopulation = document.createElement('text');
                let photo = document.createElement('img');
                let name = document.createElement('text');
                let averageRainfall = document.createElement('text');

                photo.setAttribute('src', towns.photo);
                motto.innerHTML = `<i>${towns.motto}<br>`;

                currentPopulation.innerHTML = `Population: ${towns.currentPopulation}<br>`;
                yearFounded.innerHTML = `Year Founded: ${towns.yearFounded}<br>`;
                h2.innerHTML = `<h3>${towns.name}</h3>`;
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