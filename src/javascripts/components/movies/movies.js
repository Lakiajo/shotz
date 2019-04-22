import moviesData from '../../helpers/data/moviesdata';
import util from '../../helpers/util';
import './movies.scss';

let movies = [];

const domstringBuilder = () => {
  let domstring = '';
  movies.forEach((movie) => {
    domstring += `<div id="${movie.id}>`;
    domstring += '<div class="card movie col-sm-3">';
    domstring += `<h5>${movie.name}</h5>`;
    domstring += `<p>${movie.genre}</p>`;
    domstring += `<p>${movie.releaseDate}</p>`;
    domstring += `<p>${movie.description}</p>`;
    domstring += `<p>${movie.locations.length} Locations</p>`;
    domstring += '</div>';
    domstring += '</div>';
  });
  util.printToDom('movies', domstring);
};

const initializeMovies = () => {
  moviesData.getMoviesData()
    .then((resp) => {
      const movieResults = resp.data.movies;
      movies = movieResults;
      domstringBuilder();
    })
    .catch(err => console.error(err));
};

export default { initializeMovies };
