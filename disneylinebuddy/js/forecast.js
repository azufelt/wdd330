  let park = ""

  function getWeather(park) {
    console.log(park);
    getLocation(florida);
  }



  function getLocation(florida) {
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
    const long = coordinates[parkFound].long;
    const lat = coordinates[parkFound].lat;
    const forecastKey = "197c66470073aa160753f2488d01de5b";
    const part = 'hourly'
    const forecastAPI = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=${part}&appid=${forecastKey}&units=imperial`;
    displayForecast(forecastAPI);




    function displayForecast(forecastAPI) {
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
            document.querySelector(".weatherResults").innerHTML = `<li>
${date}<span>Hi: ${max}</span>
</li>`

          }
        });
    }