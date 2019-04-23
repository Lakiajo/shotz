import locationsData from '../../helpers/data/locationsData';
import util from '../../helpers/util';
import './locations.scss';

let locations = [];

const shootTimeClass = (shootTime) => {
  let selectedClass = '';
  switch (shootTime) {
    case 'Morning':
      selectedClass = 'bg-primary';
      break;
    case 'Afternoon':
      selectedClass = 'bg-secondary';
      break;
    case 'Evening':
      selectedClass = 'bg-success';
      break;
    case 'After Dark':
      selectedClass = 'bg-warning';
      break;
    default:
      selectedClass = '';
  }
  return selectedClass;
};

const domstringBuilder = () => {
  let domstring = '';
  locations.forEach((location) => {
    domstring += `<div id="${location.id}">`;
    domstring += '<div class="card" width=" 10rem">';
    domstring += `<p class="card-header ${shootTimeClass(location.shootTime)}">${location.name}</p>`;
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
