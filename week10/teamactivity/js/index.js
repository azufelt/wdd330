import {
  getJSON,
  getLocation
} from 'js/utilities.js';



const baseUrl = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';

function testGetQuakesForLocation() {
  // call the getLocation function to get the lat/long

  // use that information to build out the correct URL
  const geoUrl = baseUrl; // add location information here
  console.log(geoUrl);
  // use the url to request the correct quakes 

  //log out the quakes for now.
}
getQuakesForLocation();