const requestURL = "https://drebollo16.github.io/Final-Scoots/scootsjson.json";
fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {

        const pricechart = jsonObject['pricechart'];

        pricechart.forEach(pricechart => {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let p = document.createElement('p');
            let photo = document.createElement('img');

            photo.setAttribute('src', pricechart.photo);
            photo.setAttribute('alt', pricechart.photo);

            h2.textContent = " Rental Type " + pricechart.rentaltype;
            p.textContent = " Max Person " + pricechart.maxperson;
            card.appendChild(h2);
            card.appendChild(p);
            card.appendChild(photo);
            document.querySelector('div.cards').appendChild(card);

        });
    });