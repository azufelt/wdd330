// import {
//   getName
// } from "./getName.mjs";

// getName();


const selectPark = document.querySelector(".parkList");

selectPark.addEventListener("change", (event) => {
  let park = event.target.value;
  getWeather(park);
});

function getWeather(park) {
  document.querySelector(".weatherResults").innerHTML =
    `<div class="weatherResults-inner">
    <div class="weatherReport"></div>
    <div class="forecastResults"></div>
    </div>`;
  getLocation(park);
}

function getLocation(park) {
  const coordinates = [{
      location: "california",
      lat: "33.812511",
      long: "-117.918976",
    },
    {
      location: "florida",
      lat: "28.3772",
      long: "-81.563873",
    },
    {
      location: "paris",
      lat: "48.8674",
      long: "2.7836",
    },
    {
      location: "japan",
      lat: "35.6329",
      long: "139.8804",
    },
    {
      location: "china",
      lat: "22.312771",
      long: "114.041931",
    },
    {
      location: "shanghai",
      lat: "31.1434",
      long: "121.6579",
    },
  ];
  const location = park;
  var parkFound = -1;
  for (var i = 0; i < coordinates.length; i++) {
    if (coordinates[i].location == location) {
      parkFound = i;
      break;
    }
  }

  const long = coordinates[parkFound].long;
  const lat = coordinates[parkFound].lat;

  const units = "imperial";
  const APPID = "150cd72e5595793ee58a48d53d68f9f7";
  const apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=hourly,daily&appid=${APPID}&units=${units}`;
  displayWeather(apiURL);
  let offset;
  const forecastKey = "197c66470073aa160753f2488d01de5b";
  const part = 'hourly'
  const forecastAPI = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=${part}&appid=${forecastKey}&units=imperial`;
  displayForecast(forecastAPI, offset);
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
      // console.log(jsObject);
      const icon = jsObject.current.weather[0].icon;
      const currentConditions = jsObject.current.weather[0].description;
      const temp = jsObject.current.temp.toFixed(0);
      const humidity = jsObject.current.humidity + "%";
      const windspeed = jsObject.current.wind_speed.toFixed(0);
      const url = `"http://openweathermap.org/img/wn/${icon}@2x.png"`;

      let ParkTime = formatAMPM(new Date);

      function formatAMPM(d) {
        var utc_offset = d.getTimezoneOffset();
        d.setMinutes(d.getMinutes() + utc_offset);
        var api_offset = jsObject.timezone_offset;
        var park_offset = api_offset / 60;
        d.setMinutes(d.getMinutes() + park_offset);
        var hours = d.getHours();
        var minutes = d.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = ('0' + minutes).slice(-2);
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
      }
      // console.log(ParkTime);



      document.querySelector(".weatherReport").innerHTML =
        `<h3 class="weatherResultsTitle">Current Conditions:</h3>
        <h4 class="parkTime"> Current Park Time: ${ParkTime} </h4>
            <div class="weatherBox">
        <ul class="tempIcon">
        <li> <img src=${url} alt="weather icon"> </li>
              <li class="caps"> ${currentConditions} </li>
        </ul>
        <ul class="tempBox">
              
              <li>${temp}°F</li>
              <li>Humidity: ${humidity} </li>
              <li>Wind: ${windspeed} mph</li>
              </ul>
              </div>
              
              `;
    });
}

function displayForecast(forecastAPI, offset) {
  fetch(forecastAPI)
    .then((respond) => respond.json())
    .then((jsonObj) => {
      String.prototype.toProperCase = function () {
        return this.replace(/\w\S*/g, function (txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
      };
      console.log(jsonObj);

      document.querySelector(".forecastResults").innerHTML = `<div class="forecastBox">
      <div class="forecastTitle"><h4>3-Day Forecast</h4>
      <h5>Hi | Low</h5>
      </div>
      <ul class="forecastList"></ul></div>`;

      for (let i = 0; i < 3; i++) {
        let dayStamp = jsonObj.daily[i].dt;
        let weatherDay = new Date(dayStamp * 1000);
        var options = {
          weekday: 'long'
        };
        let weekDay = new Intl.DateTimeFormat('en-US', options).format(weatherDay);
        console.log(new Intl.DateTimeFormat('en-US', options).format(weatherDay));
        let max = jsonObj.daily[i].temp.max;
        console.log(max);
        let min = jsonObj.daily[i].temp.min;
        console.log(min);
        let conditions = jsonObj.daily[0].weather[0].description;

        document.querySelector('.forecastList').innerHTML = `
        <li>
          <h5>${weekDay}</h5>
          <span>${max.toFixed(0)}°F | ${min.toFixed(0)}°F</span>
          <p>${conditions}</p>
        </li>`;
      }
    });
}