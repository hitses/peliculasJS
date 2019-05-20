import films from './films.js';

const IMG_PATH = 'http://image.tmdb.org/t/p/w185/'

window.addEventListener('load', () => {
  printFilms(films);

  let botonBuscar = document.querySelector('#botonBuscar');
  botonBuscar.addEventListener('click', buscar);
});


function printFilms(filmsToShow){
  let sectionFilms = document.querySelector('#peliculas');
  sectionFilms.innerHTML = '';

  filmsToShow.forEach((film) => {
    let articleFilm = document.createElement('article');
    let {poster_path, title, vote_average, release_date, id} = film;
    let stars = '<i class="fas fa-star"></i>'.repeat((Math.round(film['vote_average'] / 2)));
    
    articleFilm.innerHTML = `
    <a href="/pelicula.html?id=${id}" target="_blank"><p class="title">${title}</p></a>
    <a href="/pelicula.html?id=${id}" target="_blank"><img src="${IMG_PATH}${poster_path}" alt="${title}"></a>
    <div class="stars">
      ${stars}
    </div>
    <p class="date">${release_date}</p>
    `;

    sectionFilms.appendChild(articleFilm);
  });
}

function buscar(){
  let inputElement = document.querySelector('#inputBusqueda').value;
  let searchElement = films.filter(film => film.title.toLowerCase().includes(inputElement.toLowerCase()));
  printFilms(searchElement);
}

//Entre para buscar
let input = document.getElementById("inputBusqueda");
input.addEventListener("keyup", function() {
  document.getElementById("botonBuscar").click();
});