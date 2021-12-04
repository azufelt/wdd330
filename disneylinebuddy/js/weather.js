const selectPark = document.querySelector('.parkList');

selectPark.addEventListener('change', (event) => {
  let park = event.target.value;
  getWeather(park);

});


function getWeather(park) {
  console.log(park);
  getLocation(park);

}

function getLocation(park) {

  const coordinates = [{
      location: "california",
      lat: "33.812511",
      long: "-117.918976"

    },
    {
      location: "florida",
      lat: "28.3772",
      long: "-81.563873"

    }, {
      location: "paris",
      lat: "48.8674",
      long: "2.7836"
    }, {
      location: "japan",
      lat: "35.6329",
      long: "139.8804"
    }, {
      location: "china",
      lat: "22.312771",
      long: "114.041931"
    }, {
      location: "shanghai",
      lat: "31.1434",
      long: "121.6579"
    }
  ]
  const location = park;
  //filter for the location value provided
  //search for location of variable
  var parkFound = -1;
  for (var i = 0; i < coordinates.length; i++) {
    if (coordinates[i].location == location) {
      // __FOUND is set to the index of the element
      parkFound = i;
      break;
    }
  }
  console.log(parkFound);
  // coordinates[0].long
  const long = coordinates[parkFound].long;
  const lat = coordinates[parkFound].lat;
  console.log(long, lat, location);
  const units = "imperial"
  const APPID = "150cd72e5595793ee58a48d53d68f9f7";
  const apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=hourly,daily&appid=${APPID}&units=${units}`
  displayWeather(apiURL);
}




function displayWeather(apiURL) {
  fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
      String.prototype.toProperCase = function () {
        return this.replace(/\w\S*/g, function (txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
      };
      console.log(jsObject);
      const currentConditions = document.querySelector("#conditions");
      currentConditions.textContent = jsObject.current.weather[0].description;

      const humidity = document.querySelector("#humidity");
      humidity.textContent = jsObject.current.humidity + "%";

      const windspeed = jsObject.current.wind_speed.toFixed(0);
      document.querySelector("#wind").textContent = windspeed;

      const temp = jsObject.current.temp.toFixed(0);
      document.querySelector("#currentTemp").textContent = temp;

      var chill = 0;
      var message = 0;
      if (temp <= 50 && windspeed > 3) {
        chill = 35.74 + .6215 * temp - 35.75 * Math.pow(windspeed, .16) + .4275 * temp * Math.pow(windspeed, .16);
        message = chill.toFixed() + "°F";
      } else {
        message = "N/A"
      };
      document.querySelector("#windchill").innerHTML = message;
    });
}