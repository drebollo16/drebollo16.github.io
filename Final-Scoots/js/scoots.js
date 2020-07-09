const apiURLs = "https://drebollo16.github.io/Final-Scoots/scootsjson.json";
fetch(apiURLs)
    .then((response) => response.json())
    .then((jsObject) => {

        const rentaltype = jsObject['pricechart'];

        for (let i = 0; i < rentaltype.length; i++) {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');

            h2.textContent = rentaltype[i].rentaltype;

            card.appendChild(h2);

            document.querySelector('div.cards').appendChild(card);
        }
    });