const searchbtn = document.querySelector(".characterSearch");
searchbtn.addEventListener('click', findChar, false);


const bigCharacterList = []; //makes new array available at global scope for future use
// console.log(bigCharacterList);

function findChar() {
  let displayWindow = document.querySelector('.returnresults');
  displayWindow = "";
  let searchChar = document.querySelector(".characterValue").value;

  //filter through the big List array to find an object that has a value that matches the string input from user;
  const filterList = bigCharacterList.filter(function (item) {
    if (item.name == searchChar) {
      console.log(item.name)
      let listItem = document.querySelector('.returnresults');

      let li = document.createElement('li');
      let liName = item.name;
      li.append(liName);
      listItem.append(li);

      let idNum = item.id;
      let getOneCharacter = `https://api.disneyapi.dev/characters/${idNum}`

      fetch(getOneCharacter)
        .then((response) => response.json())
        .then(function (jsonObject) {
          console.log(jsonObject);
          if (jsonObject.films != "") {
            let ul = document.createElement('ul');

            let liFilm = jsonObject.films;
            for (i = 0; i < liFilm.length; i++) {
              let filmList = document.createElement('li');
              filmList.append(liFilm[i]);
              ul.append(filmList)
              li.append(ul)
            }
          } else {
            return;
          }

          searchChar.value = ""; //clear input value 

          let CharImg = document.createElement('img');
          let imgURL = jsonObject.imageUrl;
          CharImg.setAttribute('src', imgURL);
          CharImg.setAttribute('alt', 'disney character image')

          li.append(CharImg)
          console.log(imgURL);
        })
    }

    // item.name == searchChar //True or False statement
    // searchChar = "";
  });

  // bigCharacterList.forEach(function (object) {
  //   if (object.newItem.name == searchChar) {
  //     // console.log('It works!')
  //     let listItem = document.querySelector('.returnresults');

  //     let li = document.createElement('li');
  //     let liName = object.newItem.name;
  //     li.append(liName);
  //     listItem.append(li);
  //   }
  // })
}





async function fetchList() {
  var pageNum = 1;
  var pageApi = `https://api.disneyapi.dev/characters?page=${pageNum}`;
  var totalPages;

  fetch(pageApi)
    .then((response) => response.json())
    .then(function (jsonObject) {
      // console.log(jsonObject);
      totalPages = jsonObject.totalPages;
      // console.log(totalPages);

      //build a new array for the characteer objects to go into
      // console.log(bigCharacterList);

      class item { //constructs the object to go into the big character list array
        constructor(charName, charid) {
          this.name = charName;
          this.id = charid;
        }
      }
      //loop through all the pages of API call
      for (pageNum; pageNum < totalPages; pageNum++) {
        var nextPage = `https://api.disneyapi.dev/characters?page=${pageNum}`;
        fetch(nextPage)
          .then((respond) => respond.json())
          .then(function (jsObject) {
            const dataObj = jsObject['data'];
            // console.log(dataObj); //returns list of JUST json object "data"

            for (i = 0; i < dataObj.length; i++) { //loop through each object (on each page) and get the specific object value to populate the class constructor
              var charName = dataObj[i].name;
              var charid = dataObj[i]._id;

              let newItem = new item(charName, charid); //builds the object for the class constructor from withing the "for" statement and sends it to the global class constructor
              //... Instead of constructing a class, you could use this: let newItem = {name: charName, id: charid};
              bigCharacterList.push(newItem);
              // console.log(bigCharacterList);
            }

          })
      }

    });
  // console.log(bigCharacterList);
}

fetchList();