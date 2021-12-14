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

      //user local day/time
      var d = new Date();
      //get the timezone offset for the user
      var utc_offset = d.getTimezoneOffset();
      //using the returned offset, "zero" out the time to UTC time
      d.setMinutes(d.getMinutes() + utc_offset);
      //get disney park time offset
      var api_offset = jsObject.timezone_offset;
      //refactor seconds to minutes;
      var park_offset = api_offset / 60;
      d.setMinutes(d.getMinutes() + park_offset);
      console.log(d);
      //^^^ CORRECT Date/TIME!! 


      function formatAMPM(d) {
        var hours = d.getHours();
        var minutes = d.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = ('0' + minutes).slice(-2);
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
      }

      console.log(formatAMPM(new Date));

    })
}