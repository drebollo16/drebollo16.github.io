const apiURLs = "https://drebollo16.github.io/Final-Scoots/scootsjson.json";
fetch(apiURLs)
    .then((response) => response.json())
    .then((jsObject) => {

        const pricechart = jsObject['pricechart'];

        for (let i = 0; i < pricechart.length; i++) {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let p = document.createElement('p');
            let photo = document.createElement('img');

            photo.setAttribute('src', pricechart[i].photo);
            photo.setAttribute('alt', pricechart[i].photo);

            h2.textContent = " Rental Type " + pricechart[i].rentaltype;
            p.textContent = " Max Person " + pricechart[i].maxperson;
            card.appendChild(h2);
            card.appendChild(p);
            card.appendChild(photo);
            document.querySelector('div.cards').appendChild(card);
        }
    });