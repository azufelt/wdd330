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
  console.log(park);
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

function displayWeather(apiURL, offset) {
  fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
      String.prototype.toProperCase = function () {
        return this.replace(/\w\S*/g, function (txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
      };
      console.log(jsObject);
      const icon = jsObject.current.weather[0].icon;
      const currentConditions = jsObject.current.weather[0].description;
      const temp = jsObject.current.temp.toFixed(0);
      const humidity = jsObject.current.humidity + "%";
      const windspeed = jsObject.current.wind_speed.toFixed(0);
      const url = `"http://openweathermap.org/img/wn/${icon}@2x.png"`;

      //get local time
      //get timezone offset
      //subtract daylight savings if needed
      //convert timestamp to readable time
      var d = new Date();
      console.log(d);
      var utc_offset = d.getTimezoneOffset();
      console.log(utc_offset);
      d.setMinutes(d.getMinutes() + utc_offset);
      console.log(d);

      var parkTimeZone = jsObject.timezone_offset;
      var disneyOffset = parkTimeZone / 60;
      d.setMinutes(d.getMinutes() + disneyOffset);
      console.log("youtube time" + d);
      //^^^ this is the CORRECT Date Timestamp!!! 
      // Now to parse it to just the time! 


      let offset = jsObject.timezone_offset;
      let dateTime = jsObject.current.dt;
      let date = new Date().toUTCString();
      let parkTime = niceTime(dateTime, offset);
      let parkDate = niceDate(date, offset);
      console.log(parkDate);
      console.log(parkTime);

      //  Strip out just the HH:MM:SS AM/PM from the date
      function niceTime(dateTime, offset) {
        let day = new Date((dateTime + offset) * 1000).toLocaleString();
        let hour = day.indexOf(' ') + 1;
        let time = day.substring(hour);
        time = time.substring(0, time.lastIndexOf(':')) + time.substring(time.length - 3)
        return time;
      }

      function niceDate(date, offset) {
        let day = new Date((date + offset) * 1000);
        day = day.toLocaleString();
        return day.substring(0, day.indexOf(','));
      }



      document.querySelector(".weatherResults").innerHTML =
        `<div class="weatherResults-inner">
        <div class="weatherReport">
        <h3 class="weatherResultsTitle">Current Conditions:</h3>
        <h4 class="parkTime"> Current Park Time: ${parkTime} </h4>
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
              </div>
              </div>`;
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
      let i;

      for (i = 0; i < 3; i++) {
        let dayStamp = jsonObj.daily[i].dt;
        let date = new Date(dayStamp);
        let max = jsonObj.daily[i].temp.max;
        console.log(date.getDay());
        let min = jsonObj.daily[i].temp.min;
        console.log(min);


      }



    });
}