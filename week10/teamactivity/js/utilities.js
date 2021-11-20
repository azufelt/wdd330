const url = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';

window.onload = function () {
  getJSON(url);
};

function getJSON(url) {
  fetch(url)
    .then((respond) => {
      if (respond.ok) {
        return respond;
      } else {
        throw Error(respond.statusText);
      }
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(respond => respond.json())
    .then((jsObject) => {
      console.log(jsObject);
    })
}

//geolocation services
const getLocation = function (options) {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
};