'use strict';

function MovieDetails(movie) {
  this.movie        = movie;
  this.pageElements = null;
};

MovieDetails.prototype.generateElements = function() {
  this.pageElements = `
  <section class="movie-details">
    <h1>${this.movie.title}</h1>
    <p>Director: ${this.movie.director} - Producer: ${this.movie.producer}</p>
    <p class="movie-detail-text">${this.movie.opening_crawl}</p>
    <date>${this.movie.release_date}</date>
  </section>
  `;
};