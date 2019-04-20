import moviesData from '../../helpers/data/moviesdata';
import util from '../../helpers/util';
import './movies.scss';

let movies = [];

const domstringBuilder = () => {
  let domstring = '';
  movies.forEach((movie) => {
    domstring += `<h3>${movie.name}</h3>`;
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
