import locationsData from '../../helpers/data/locationsData';
import util from '../../helpers/util';
import './locations.scss';

let locations = [];

const domstringBuilder = () => {
  let domstring = '';
  locations.forEach((movie) => {
    domstring += `<h3>${movie.name}</h3>`;
  });
  util.printToDom('locations', domstring);
};

const initializeLocations = () => {
  locationsData.getLocationsData()
    .then((resp) => {
      const locationResults = resp.data.locations;
      locations = locationResults;
      domstringBuilder();
    })
    .catch(err => console.error(err));
};

export default { initializeLocations };
