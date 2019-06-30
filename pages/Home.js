'use strict';

function Home() {
  this.pageElements = null;
};

Home.prototype.generateElements = function() {
  this.pageElements = `

    <header id="hero-header">
      <p class="ironwars-logo">IRONWARS</p>
      <h1>Hace muchos Pull Request en Ironhack....</h1>
      <article class="title-text">
        <p>
        Los alumnos de webdev de Junio, aún diezmados por su primer proyecto, se adentran en una nueva campaña contra las fuerzas del API, fetch y async.
        <br>
        </p>
        <p>
        ¿Conseguirán la victoria y se convertiran en los nuevos héroes de Ironhack ? ....
        </p>
      </article>
      <article class="hero-characters">
        <img src="../public/images/falcon.png" class="falcon">
        <img src="../public/images/tie.png" class="tie">
        <img src="../public/images/chewie.png" class="darth">
      </article>
    </header>

  `;
};