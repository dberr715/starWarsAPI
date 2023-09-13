'use strict';

document.addEventListener("DOMContentLoaded", function (){
    console.log ("We have lift off!");

const swInfo = document.getElementById('swInfo');
console.log(swInfo)
const random = parseInt(Math.random()*13) 
const notZero = random ? random: 3
console.log(notZero)
console.log((random))
    fetch(`https://swapi.dev/api/vehicles/${notZero}/`)
    .then(function(response) {
        return response.json();
    })
    .then(function(data){
        console.log(data);
        wantVehicle(data.name, swInfo);
        console.log(data);
        return data;
    })


});

function wantVehicle(vehicle, element) {
  console.log(vehicle)
  console.log(element)
    element.innerText = vehicle;
}