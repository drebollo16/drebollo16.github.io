const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';


fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {

        const towns = jsonObject['towns'];
        // const utah = prophets.filter(prophet => (prophet.birthplace == "Utah")); //example for main page filter

        towns.forEach(towns => {


            if (towns.name == 'Preston' || towns.name == 'Fish Haven' || towns.name == 'Soda Springs') {

                let card = document.createElement('section');
                let h2 = document.createElement('h2');
                let yearFounded = document.createElement('year');
                let currentPopulation = document.createElement('div');
                let name = document.createElement('div');
                let averageRainfall = document.createElement('div');

                currentPopulation.innerHTML = `<h4>Population: ${towns.currentPopulation}</h4>`;
                yearFounded.innerHTML = `<h4>Year Founded: ${towns.yearFounded}</h4>`;
                h2.innerHTML = towns.name;
                averageRainfall.innerHTML = `<h4>Average Rainfall :${towns.averageRainfall}</h4>`;
                card.appendChild(name);
                card.appendChild(h2);
                card.appendChild(yearFounded);
                card.appendChild(currentPopulation);
                card.appendChild(averageRainfall);

                document.querySelector('div.cards').appendChild(card);
            }
        });
    });