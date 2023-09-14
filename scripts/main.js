'use strict';
const starshipListElement = document.querySelector('#swinfo');
const starshipListElement2 = document.querySelector('#starshipInfo');

document.addEventListener("DOMContentLoaded", function (){
    console.log ("We have lift off!");

const swInfo = document.getElementById('swInfo');
const swInfo2 = document.getElementById('swInfo2');
console.log(swInfo)
const random = parseInt(Math.random()*10) 
const notZero = random ? random: 3
console.log(notZero)
console.log((random))
    fetch(`https://swapi.dev/api/vehicles/`)
    .then(function(response) {
        return response.json();
    })
    .then(function(data){
        function wantVehicle(vehicle, element) {
            element.innerText = vehicle
        };
        wantVehicle(data.results[notZero].name, swInfo);
        // console.log(data);
        return data;
    })
    fetch('https://swapi.dev/api/starships/')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
       function wantStarship(starship, element2) {
element2.innerText = starship;
};
        wantStarship(data.results[notZero].name, swInfo2);
        return data;

    })
    const starshipUrl = 'https://swapi.dev/api/starships/';

    get(starshipUrl).then(function (response) {
        console.log("Starship LIST:", response.results);
        makeListOfShips(response.results.map(x => {
            console.log(x.name);
            return x.name;
   }));



 function makeListOfShips(starshipArray){
    console.log(starshipArray)
    const selectElement = document.createElement('select');
    starshipArray.map(function(starship){
        const option = document.createElement('option');
        option.value = starship;
        option.text = starship;
        selectElement.appendChild(option);
        starshipListElement2.append(selectElement);
    })
}
    });
})
