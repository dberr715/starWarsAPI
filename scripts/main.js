"use strict";
const starshipListElement = document.querySelector("#swinfo");
const starshipListElement2 = document.querySelector("#starshipInfo");

document.addEventListener("DOMContentLoaded", function () {
  console.log("We have lift off!");

  const swInfo = document.getElementById("swInfo");
  const swInfo2 = document.getElementById("swInfo2");
  console.log(swInfo);
  const random = parseInt(Math.random() * 10);
  const notZero = random ? random : 3;
  console.log(notZero);
  console.log(random);
  fetch(`https://swapi.dev/api/vehicles/`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      function wantVehicle(vehicle, element) {
        element.innerText = vehicle;
      }
      wantVehicle(data.results[notZero].name, swInfo);
      // console.log(data);
      return data;
    });
  fetch("https://swapi.dev/api/starships/")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      function wantStarship(starship, element2) {
        element2.innerText = starship;
      }
      wantStarship(data.results[notZero].name, swInfo2);
      return data;
    });
  const starshipUrl = "https://swapi.dev/api/starships/";

  get(starshipUrl).then(function (response) {
    console.log("Starship LIST:", response.results);
    makeListOfShips(response);
    //   response.results.map((x) => {
    //     console.log(x.name);
    //     return x.name;
      });
    // );

    function makeListOfShips(starshipObjList) {
      console.log(starshipObjList);
      const selectElement = document.createElement("select");
      for (let i = 0; i < starshipObjList.results.length; i++){
        const option = document.createElement("option");
        option.value = starshipObjList.results[i].url;
        option.text = starshipObjList.results[i].name;
        selectElement.appendChild(option);
      
      }
       starshipListElement2.append(selectElement);
    //   starshipArray.map(function (starship, i) {
        
    //   });
    }
    starshipListElement2.addEventListener("submit", function (event) {
      event.preventDefault();
      const newShipUrl = this.querySelector("select").value;
    //   const apiUrl = `https://swapi.dev/api/starships/${newShip}`;
    //   console.log(apiUrl);
      get(newShipUrl).then(function (response) {
         console.log("WOOOOOOOOO", response);
        // makeListOfShips(
        //   response.results.map((x) => {
        //     console.log(x.name);
        //     return x.name;
        //   })
        // );
    //   const filteredApiUrl = apiUrl.filter(
    //     (starshipName) => starshipName === `${newShip}`
    //   );
    //   console.log(filteredApiUrl);
    //   makeMeAStarship(apiUrl);
    //   console.log(apiUrl);
    //   return filteredApiUrl.passengers;
    });

    // function makeMeAStarship(apiUrl) {
    //   get(apiUrl).then(function (response) {
    //     console.log("RESPONSE", response);
    //     makeListOfShips(response.passengers, passengerCount);
    //   });
    // }
  });
});
