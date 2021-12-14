let park = 'florida';
getWeather(park);

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

  // coordinates[0].long
  const long = coordinates[parkFound].long;
  const lat = coordinates[parkFound].lat;
  const units = "imperial";
  const APPID = "150cd72e5595793ee58a48d53d68f9f7";
  const apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=hourly,daily&appid=${APPID}&units=${units}`;
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
      // const icon = jsObject.current.weather[0].icon;
      // const currentConditions = jsObject.current.weather[0].description;
      // const temp = jsObject.current.temp.toFixed(0);
      // const humidity = jsObject.current.humidity + "%";
      // const windspeed = jsObject.current.wind_speed.toFixed(0);
      // const url = `"http://openweathermap.org/img/wn/${icon}@2x.png"`;

      //get local park time
      //timezone offset is delivered in seconds... convert to milliseconds to make comparison.
      //Get timestamp in locale

      //
      // let parkTime = jsObject.current.dt;

      // function formatAMPM(parkTime) {
      //   var hours = parkTime.getHours();
      //   var minutes = parkTime.getMinutes();
      //   var ampm = hours >= 12 ? 'pm' : 'am';
      //   hours = hours % 12;
      //   hours = hours ? hours : 12; // the hour '0' should be '12'
      //   minutes = ('0' + minutes).slice(-2);
      //   var strTime = hours + ':' + minutes + ' ' + ampm;
      //   return strTime;
      // }

      // console.log(formatAMPM(new Date));


      //timezone offset delivers MINUTES in the Api
      //So subtract UTC timestamp- offset to get local park time

      //offset in weather API
      let offset = jsObject.timezone_offset;
      let dateTime = jsObject.current.dt;
      let date = new Date().toUTCString();


      //weather API current timestamp
      // let userLocalTime = jsObject.current.dt;
      //utc new date, then millisecond parse
      // let dateTime = new Date();
      // let dateString = new Date().toUTCString();
      // let milliseconds = Date.parse(dateString);
      // let date = milliseconds / 1000;

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

      var d = new Date();
      console.log(d);
      var utc_offset = d.getTimezoneOffset();
      console.log(utc_offset);
      d.setMinutes(d.getMinutes() + utc_offset);
      console.log(d);

      var parkTimeZone = jsObject.timezone_offset;
      var disneyOffset = parkTimeZone / 60;
      d.setMinutes(d.getMinutes() + disneyOffset);
      console.log(d);



    })
}