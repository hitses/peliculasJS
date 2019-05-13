import films from './films.js';

let imgPath = 'http://image.tmdb.org/t/p/w185/'

window.addEventListener('load', () => {
  let divFilms = document.querySelector('#peliculas');
  console.log('Funciona');
  films.forEach((film) => {
    let divFilm = document.createElement('div');
    divFilm.innerHTML = `
    <img src="${imgPath}${film.poster_path}" alt="${film.title}">
    <p>${film.title}</p>
    <p>${film.vote_average}</p>
    <p>${film.release_date}</p>
    `;

    divFilms.appendChild(divFilm);
  });
});