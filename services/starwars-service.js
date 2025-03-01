'use strict';

function StarWarsService() {
  this.baseUrl = 'https://swapi.co/api';
};

StarWarsService.prototype.getAllMovies = async function() {
  try {
    var response     = await fetch(`${this.baseUrl}/films`);
    var allFilms = await response.json();
    return allFilms.results;
  }
  catch(error) {
    console.error(error)
  }
};

StarWarsService.prototype.getOneFilm = async function(filmId) {
  try {
    var response     = await fetch(`${this.baseUrl}/films/${filmId}`);
    var oneMovie = await response.json();
    return oneMovie.results[0];
  }
  catch(error) {
    console.error(error)
  }
};

var starWarsApiService = new StarWarsService();