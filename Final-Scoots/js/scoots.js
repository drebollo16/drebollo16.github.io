const requestURL = "https://drebollo16.github.io/Final-Scoots/scootsjson.json";
fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {

        const pricechart = jsonObject['pricechart'];

        pricechart.forEach(pricechart => {
            let card = document.createElement('section');
            let h3 = document.createElement('h3');
            let h2 = document.createElement('h2');
            let p = document.createElement('p');
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            let p3 = document.createElement('p');
            let p4 = document.createElement('p');
            let p5 = document.createElement('p');



            let photo = document.createElement('img');

            photo.setAttribute('src', pricechart.photo);
            photo.setAttribute('alt', pricechart.photo);

            h2.textContent = " Rental Type ";
            h2.textContent = pricechart.rentaltype;
            p1.textContent = pricechart.maxperson;
            p2.textContent = pricechart.halfdayreservation;
            p3.textContent = pricechart.Reservatinfullday;
            p4.textContent = pricechart.walkinhalfday3hrs;
            p5.textContent = pricechart.walkinfullday;
            p.textContent = pricechart.walkinfullday;


            h2.textContent = pricechart.rentaltype;
            p1.textContent = " Max Person " + pricechart.maxperson;
            p2.textContent = "Half day Reservation: " + pricechart.halfdayreservation;
            p3.textContent = "Full day Reservation: " + pricechart.Reservatinfullday;
            p4.textContent = "Walk in Half day (3 hours): " + pricechart.walkinhalfday3hrs;
            p5.textContent = "Walk in Full Day: " + pricechart.walkinfullday;


            card.appendChild(h2);
            card.appendChild(h3);

            card.appendChild(p1);
            card.appendChild(p2);
            card.appendChild(p3);
            card.appendChild(p4);
            card.appendChild(p5);

            card.appendChild(photo);
            document.querySelector('div.cards').appendChild(card);

        });
    });