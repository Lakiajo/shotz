import locationsData from '../../helpers/data/locationsData';
import util from '../../helpers/util';
import './locations.scss';

let locations = [];

const domstringBuilder = () => {
  let domstring = '';
  locations.forEach((location) => {
    domstring += `<div id="${location.id}">`;
    domstring += '<div class="card">';
    domstring += `<p class="card-header">${location.name}</p>`;
    domstring += `<img src="${location.imageUrl}"></img>`;
    domstring += `<h5>${location.address}</h5>`;
    domstring += '</div>';
    domstring += '</div>';
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
