import {
  getName
} from "./getName.mjs";

getName();


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

function displayForecast(forecastAPI) {
  fetch(forecastAPI)
    .then((respond) => respond.json())
    .then((jsonObj) => {
      String.prototype.toProperCase = function () {
        return this.replace(/\w\S*/g, function (txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
      };


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
        let max = (jsonObj.daily[i].temp.max).toFixed(0);
        let min = (jsonObj.daily[i].temp.min).toFixed(0);
        let conditions = jsonObj.daily[i].weather[0].main;


        let displayLi = document.querySelector('.forecastList');
        let li = document.createElement('li');
        li.innerHTML = `
        <svg class="liMickey" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 91.98 73.7"><defs><style>.cls-1{fill:#fff;}</style></defs><path class="cls-1" d="M92.12,46.48c-4.2,5.28-11.14,7.23-17.76,5.64A27,27,0,1,1,25.24,52c-7.35,1.77-15-.77-19-7C1,37,3.93,25.79,12.76,20.06S33,16.22,38.19,24.27a16.6,16.6,0,0,1,1.86,13.81,27.08,27.08,0,0,1,19.47,0,16.81,16.81,0,0,1,2.76-15.32c6-7.51,17.47-8.29,25.71-1.74S98.08,39,92.12,46.48Z" transform="translate(-3.63 -16.6)"/></svg>
          <h5>${weekDay}</h5>
          <span>${max}°F | ${min}°F</span>
          <p>${conditions}</p>
       `;
        displayLi.append(li);
      };
    });
}