import moviesData from '../../helpers/data/moviesdata';
import util from '../../helpers/util';
import locations from '../locations/locations';
import './movies.scss';

let movies = [];

const domstringBuilder = () => {
  let domstring = '';
  movies.forEach((movie) => {
    domstring += `<div class="card col-3" id="${movie.id}">`;
    domstring += '<div class="card movie">';
    domstring += `<h5 class="card-header">${movie.name}</h5>`;
    domstring += `<p>${movie.genre}</p>`;
    domstring += `<p>${movie.releaseDate}</p>`;
    domstring += `<p>${movie.description}</p>`;
    domstring += `<p>${movie.locations.length} Locations</p>`;
    domstring += '</div>';
    domstring += '</div>';
  });
  util.printToDom('movies', domstring);
};

const hideOtherCards = (e) => {
  const movieBtnId = e.target.id;
  console.error(`${movieBtnId}`);
  console.error(movies[0].id);
  const selectedMovieArray = movies.filter(x => x.id === movieBtnId);
  console.error(selectedMovieArray);
  domstringBuilder(selectedMovieArray);
  locations.getMovieLocations(selectedMovieArray[0].locations);
  document.getElementById('clearButton').classList.remove('hide');
};

const buttonEvents = () => {
  console.error(movies);
  movies.forEach((movie) => {
    document.getElementById(movie.id).addEventListener('click', hideOtherCards);
  });
};

const initializeMovies = () => {
  moviesData.getMoviesData()
    .then((resp) => {
      const movieResults = resp.data.movies;
      movies = movieResults;
      domstringBuilder(movies);
      buttonEvents();
    })
    .catch(err => console.error(err));
};

export default { initializeMovies, buttonEvents };
