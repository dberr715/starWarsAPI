"use strict";

function get(url) {
  return fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      return data;
    })
    .catch(function(error){
        console.log('yOu gOt aN eRrOr...', error)
    });
}