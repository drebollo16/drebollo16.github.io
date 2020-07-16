const requestURL = "https://drebollo16.github.io/Final-Scoots/json/scootsjson.json";
fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {

        const pricechart = jsonObject['pricechart'];

        pricechart.forEach(pricechart => {

            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            let p3 = document.createElement('p');
            let p4 = document.createElement('p');
            let p5 = document.createElement('p');



            let photo = document.createElement('img');
            photo.setAttribute('src', pricechart.photo);
            photo.setAttribute('alt', pricechart.photo);
            card.setAttribute('class', 'sectiondiv');

            h2.textContent = pricechart.rentaltype;
            p1.textContent = pricechart.maxperson;
            p2.textContent = pricechart.halfdayreservation;
            p3.textContent = pricechart.fulldayreservation;
            p4.textContent = pricechart.walkinhalfday3hrs;
            p5.textContent = pricechart.walkinfullday;



            h2.textContent = pricechart.rentaltype;
            p1.textContent = " Max Person " + pricechart.maxperson;
            p2.textContent = "Half day Reservation: " + pricechart.halfdayreservation;
            p3.textContent = "Full day Reservation: " + pricechart.fulldayreservation;
            p4.textContent = "Walk in Half day (3 hours): " + pricechart.walkinhalfday3hrs;
            p5.textContent = "Walk in Full Day: " + pricechart.walkinfullday;

            card.appendChild(h2);
            card.appendChild(p1);
            card.appendChild(p2);
            card.appendChild(p3);
            card.appendChild(p4);
            card.appendChild(p5);

            card.appendChild(photo);
            document.querySelector('div.cards').appendChild(card);

        });
    });