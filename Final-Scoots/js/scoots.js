const apiURLs = "https://drebollo16.github.io/Final-Scoots/scootsjson.json";
fetch(apiURLs)
    .then((response) => response.json())
    .then((jsObject) => {

        const pricechart = jsObject['pricechart'];

        for (let i = 0; i < pricechart.length; i++) {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let p = document.createElement('p');

            h2.textContent = " Rental Type " + pricechart[i].rentaltype;
            p.textContent = pricechart[i].maxperson + " Max Person";
            card.appendChild(h2);
            card.appendChild(p);

            document.querySelector('div.cards').appendChild(card);
        }
    });