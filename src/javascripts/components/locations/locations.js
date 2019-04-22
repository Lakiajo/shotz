import locationsData from '../../helpers/data/locationsData';
import util from '../../helpers/util';
import './locations.scss';

let locations = [];

const domstringBuilder = () => {
  let domstring = '';
  locations.forEach((location) => {
    domstring += `<h3>${location.name}</h3>`;
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
