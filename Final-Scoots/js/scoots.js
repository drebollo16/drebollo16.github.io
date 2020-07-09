const apiURLs = "https://drebollo16.github.io/Final-Scoots/scootsjson.json";
fetch(apiURLs)
    .then((response) => response.json())
    .then((jsObject) => {

        const forecast = jsObject['pricechart'];



    });