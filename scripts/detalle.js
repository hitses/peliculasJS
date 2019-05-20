import films from './films.js';

const IMG_PATH = 'http://image.tmdb.org/t/p/w185/'
const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'a94db6e1acf929e6c3d28e88dc1bb386';
const API_POPULAR_URL = 'movie/popular';
const API_GENRE = 'genre/movie/list';

window.addEventListener('load', load);

function load (){                  
  let url = new URL(window.location.href);
  let result = url.searchParams.get('id');
  let pelicula = films.find((iteracion) => result == iteracion.id)
  let body = document.querySelector('body');
  let articleFilm = document.createElement('article');
  let stars = '<i class="fas fa-star"></i>'.repeat((Math.round(pelicula['vote_average'] / 2)));

  articleFilm.innerHTML = `
  <img src="${IMG_PATH}${pelicula.poster_path}" alt="${pelicula.title}">
    <p class="title">${pelicula.title}</p>
    <div class="stars">
      ${stars}
    </div>
    <p class="overview">${pelicula.overview}</p>
    `;

    body.appendChild(articleFilm);
};