 const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

 fetch(requestURL)
     .then(function(response) {
         return response.json();
     })
     .then(function(jsonObject) {

         const prophets = jsonObject['prophets'];
         // const utah = prophets.filter(prophet => (prophet.birthplace == "Utah")); //example for main page filter
         prophets.forEach(prophets => {

             let card = document.createElement('section');

             let h2 = document.createElement('h2');
             let birthplace = document.createElement('div');
             let image = document.createElement('img');
             let birthdate = document.createElement('birth');

             h2.innerHTML = `${prophets.name} ${prophets.lastname}`;
             image.setAttribute('src', prophets.image);


             birthdate.innerHTML = `<strong>Date of Birth: ${prophets.birthdate}</strong>`;
             birthplace.innerHTML = `<strong>Place of Birth: ${prophets.birthplace}</strong>`;
             card.appendChild(h2);
             card.appendChild(image);
             card.appendChild(birthdate);
             card.appendChild(birthplace);
             document.querySelector('div.cards').appendChild(card);
         });
     });