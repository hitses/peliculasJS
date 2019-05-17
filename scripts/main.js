import films from './films.js';

const IMG_PATH = 'http://image.tmdb.org/t/p/w185/'

window.addEventListener('load', () => {
  printFilms(films);

  let botonBuscar = document.querySelector('#botonBuscar');
  botonBuscar.addEventListener('click', buscar);
});


function printFilms(filmsToShow){
  let divFilms = document.querySelector('#peliculas');
  divFilms.innerHTML = '';

  filmsToShow.forEach((film) => {
    let divFilm = document.createElement('article');
    let {poster_path, title, vote_average, release_date, id} = film;
    divFilm.innerHTML = `
    <a href="/pelicula.html?id=${id}"><img src="${IMG_PATH}${poster_path}" alt="${title}"></a>
    <p class="title">${title}</p>
    <p class="ratio">${vote_average}</p>
    <p class="date">${release_date}</p>
    `;

    divFilms.appendChild(divFilm);
  });
}

function buscar(){
  let inputElement = document.querySelector('#inputBusqueda').value;
  let searchElement = films.filter(film => film.title.toLowerCase().includes(inputElement.toLowerCase()));
  printFilms(searchElement);
}