const IMG_PATH = 'http://image.tmdb.org/t/p/w500/'
const API_URL = 'https://api.themoviedb.org/3/';
const API_POPULAR_URL = 'movie/popular';
const API_KEY = 'a94db6e1acf929e6c3d28e88dc1bb386';

window.addEventListener('load', () => {
  axios.get(API_URL + API_POPULAR_URL + '?api_key=' + API_KEY).then((resp) => {
    let films = resp.data.results;
    printFilms(films);

    let busqueda = document.querySelector('#busqueda');
    busqueda.addEventListener('click', buscar);

    //Para buscar películas
    function buscar() {
      let inputElement = document.querySelector('#inputBusqueda').value;
      let searchElement = films.filter(film => film.title.toLowerCase().includes(inputElement.toLowerCase()));
      printFilms(searchElement);
    }
    
    let input = document.getElementById("inputBusqueda");
    input.addEventListener("keyup", function () {
      document.getElementById("busqueda").click();
    });
    //Para buscar películas

    //Para ordenar películas por título
    let orderTytle = document.querySelector('#ordenarTitulo');
    orderTytle.addEventListener('click', orderByTitle);

    function orderByTitle(){
      films.sort(function(a, b){
        let nameA = a.title.toLowerCase(), nameB = b.title.toLowerCase();
        if (nameA < nameB){
          return -1;
        }
        if (nameA > nameB){
          return 1;
        }
        return 0;
       });
       printFilms(films);
    };
    //Para ordenar películas por título

    //Para ordenar películas por popularidad
    let orderPopularity = document.querySelector('#ordenarPopularidad');
    orderPopularity.addEventListener('click', orderByPopularity);
  
    function orderByPopularity(){
      films.sort(function(a, b){
        let PopularityA = a.vote_average, PopularityB = b.vote_average;
        if (PopularityA < PopularityB){
          return 1;
        }
        if (PopularityA > PopularityB){
          return -1;
        }
        return 0;
       });
       printFilms(films);
    };
    //Para ordenar películas por popularidad

    //Para ordenar películas por fecha
    let orderDate = document.querySelector('#ordenarFecha');
    orderDate.addEventListener('click', orderByDate);
  
    function orderByDate(){
      films.sort(function(a, b){
        let dateA = a.release_date, dateB = b.release_date;
        if (dateA < dateB){
          return 1;
        }
        if (dateA > dateB){
          return -1;
        }
        return 0;
       });
       printFilms(films);
    };
    //Para ordenar películas por fecha
  });

  function printFilms(filmsToShow) {
    let sectionFilms = document.querySelector('#peliculas');
    sectionFilms.innerHTML = '';

    filmsToShow.forEach((film) => {
      let articleFilm = document.createElement('article');
      let {
        poster_path,
        title,
        release_date,
        id
      } = film;
      let stars = '<i class="fas fa-star"></i>'.repeat((Math.round(film['vote_average'] / 2)));
      let voidStars = '<i class="far fa-star"></i>'.repeat((5 - (Math.round(film['vote_average'] / 2))));

      articleFilm.innerHTML = `
      <a href="/pelicula.html?id=${id}" target="_blank"><p class="title">${title}</p></a>
      <a href="/pelicula.html?id=${id}" target="_blank"><img src="${IMG_PATH}${poster_path}" alt="${title}"></a>
      <div class="stars">
        ${stars}
        ${voidStars}
      </div>
      <p class="date">${release_date}</p>
      `;

      sectionFilms.appendChild(articleFilm);
    });
  };
});