'use strict';

function showPassengers(x) {
  document.getElementById("passengerCount").innerText = x;
}

document.addEventListener("DOMContentLoaded", function () {
  console.log("We have lift off!");

  const starshipListElement = document.querySelector('#starshipInfo');
  const updateButton = document.querySelector('#updateButton'); // Select the button by its ID
  const swInfo = document.getElementById('swInfo');

  // Fetch the list of starships from the API
  fetch("https://swapi.dev/api/starships/")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const starships = data.results;

      // Create the select element for the dropdown
      const selectElement = document.createElement('select');

      starships.forEach(function (starship) {
        const option = document.createElement('option');
        option.value = starship.name;
        option.text = starship.name;
        selectElement.appendChild(option);
      });

      // Append the select element to the DOM
      starshipListElement.appendChild(selectElement);

      // Event listener for when a starship is selected
      selectElement.addEventListener("change", function () {
        const selectedStarshipName = selectElement.value;
        const selectedStarship = starships.find(function (starship) {
          return starship.name === selectedStarshipName;
        });

        if (selectedStarship) {
          showPassengers(selectedStarship.passengers);
        }
      });

      // Select a random starship when the content is loaded
      const randomStarshipIndex = Math.floor(Math.random() * starships.length);
      const randomStarship = starships[randomStarshipIndex];
      
      if (randomStarship) {
        showPassengers(randomStarship.passengers);
      }

      // Event listener for when the button is clicked
      updateButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the form submission
        const randomStarshipIndex = Math.floor(Math.random() * starships.length);
        const randomStarship = starships[randomStarshipIndex];
        
        if (randomStarship) {
          showPassengers(randomStarship.passengers);
        }
      });
    })
    .catch(function (error) {
      console.error("Error fetching starships:", error);
    });
});
