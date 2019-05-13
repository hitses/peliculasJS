import films from './films.js';

let imgPath = 'http://image.tmdb.org/t/p/w185/'

window.addEventListener('load', () => {
  let divFilms = document.querySelector('#peliculas');
  console.log('Funciona');
  films.forEach((film) => {
    let divFilm = document.createElement('article');
    divFilm.innerHTML = `
    <img src="${imgPath}${film.poster_path}" alt="${film.title}">
    <p class="title">${film.title}</p>
    <p class="ratio">${film.vote_average}</p>
    <p class="date">${film.release_date}</p>
    `;

    divFilms.appendChild(divFilm);
  });
});