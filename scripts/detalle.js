const IMG_PATH = 'http://image.tmdb.org/t/p/w500/'
const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'a94db6e1acf929e6c3d28e88dc1bb386';
const API_POPULAR_URL = 'movie/popular';
const API_GENRE = 'genre/movie/list';

window.addEventListener('load', load);

function load (){
  axios.get(API_URL + API_POPULAR_URL + '?api_key=' + API_KEY).then((resp) => {
    let films = resp.data.results;
    let url = new URL(window.location.href);
    let result = url.searchParams.get('id');
    let pelicula = films.find((iteracion) => result == iteracion.id)
    let body = document.querySelector('body');
    let articleFilm = document.createElement('article');
    let stars = '<i class="fas fa-star"></i>'.repeat((Math.round(pelicula['vote_average'] / 2)));
    let voidStars = '<i class="far fa-star"></i>'.repeat((5-(Math.round(pelicula['vote_average'] / 2))));

    articleFilm.innerHTML = `
    <p class="title">${pelicula.title}</p>
    <div class="stars">
      ${stars}
      ${voidStars}
    </div>
    <img class="caratula" src="${IMG_PATH}${pelicula.poster_path}" alt="${pelicula.title}">
    <p class="overview">${pelicula.overview}</p>
    `;

    body.appendChild(articleFilm);
})
};