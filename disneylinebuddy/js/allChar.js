// "use strict"
// import {
//   getName
// } from "./getName.mjs";

// getName();

const searchbtn = document.querySelector(".characterSearch");
searchbtn.addEventListener('click', findChar, false);


const bigCharacterList = [];

function findChar() {
  let displayWindow = document.querySelector('.returnresults');
  //Clear the old search if one is present
  var child = displayWindow.lastElementChild;
  while (child) {
    displayWindow.removeChild(child);
    child = displayWindow.lastElementChild;
  }
  let showResults = document.querySelector('.returnresults');
  showResults.classList.add('show');

  let searchChar = document.querySelector(".characterValue").value;
  document.querySelector('#character').value = ''; //clear input value 


  // const str = ` ${searchChar}`;
  // const arr = str.split(" ");
  // for (var i = 0; 1 < arr.length; i++) {
  //   arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  // }
  // const characterCaps = arr.join(" ");
  // console.log(characterCaps);

  bigCharacterList.filter(function (item) {
    if (item.name == searchChar) {
      let listItem = document.querySelector('.returnresults');
      let li = document.createElement('li');
      let title = document.createElement('h2');
      let liName = item.name;
      title.append(liName)
      li.append(title)
      listItem.append(li)

      let idNum = item.id;
      let getOneCharacter = `https://api.disneyapi.dev/characters/${idNum}`

      fetch(getOneCharacter)
        .then((response) => response.json())
        .then(function (jsonObject) {
          //get img url and slice file extension
          let CharImg = document.createElement('img');
          let imgURL = jsonObject.imageUrl;

          let dummyString = imgURL;
          dummyString = dummyString.slice(0, dummyString.lastIndexOf(".jpeg"))
          let newURL = dummyString + ".jpeg";

          CharImg.setAttribute('src', newURL);
          CharImg.setAttribute('alt', 'disney character image')
          li.append(CharImg)

          //look for films and return them
          if (jsonObject.films != "") {
            let h3 = document.createElement('h3');
            h3.innerHTML = `Movies ${jsonObject.name} has been in:`;
            let ul = document.createElement('ul');
            ul.append(h3)
            let objLi = jsonObject.shortFilms;
            let i = 0;
            for (i; i < objLi.length; i++) {
              let objList = document.createElement('li');
              objList.append(objLi[i]);
              ul.append(objList)
              li.append(ul)
            }
          } else {
            return;
          }
          //Shortfilms
          if (jsonObject.shortFilms != "") {
            let h3 = document.createElement('h3');
            h3.innerHTML = `Short Films ${jsonObject.name} has been in:`;
            let ul = document.createElement('ul');
            ul.append(h3)
            let objLi = jsonObject.shortFilms;
            let i = 0;
            for (i; i < objLi.length; i++) {
              let objList = document.createElement('li');
              objList.append(objLi[i]);
              ul.append(objList)
              li.append(ul)
            }
          } else {
            return;
          }
          //tvShows
          if (jsonObject.tvShows != "") {
            let h3 = document.createElement('h3');
            h3.innerHTML = `TV shows ${jsonObject.name} has been in:`;
            let ul = document.createElement('ul');
            ul.append(h3)
            let objLi = jsonObject.tvShows;
            let i = 0;
            for (i; i < objLi.length; i++) {
              let objList = document.createElement('li');
              objList.append(objLi[i]);
              ul.append(objList)
              li.append(ul)
            }
          } else {
            return;
          }

          //park attractions
          if (jsonObject.parkAttractions != "") {
            let h3 = document.createElement('h3');
            h3.innerHTML = `Park Attractions featuring ${jsonObject.name}:`;
            let ul = document.createElement('ul');
            ul.append(h3)
            let objLi = jsonObject.parkAttractions;
            let i = 0;
            for (i; i < objLi.length; i++) {
              let objList = document.createElement('li');
              objList.append(objLi[i]);
              ul.append(objList)
              li.append(ul)
            }
          } else {
            return;
          }
          //allies
          if (jsonObject.allies != "") {
            let h3 = document.createElement('h3');
            h3.innerHTML = `Park Attractions featuring ${jsonObject.name}:`;
            let ul = document.createElement('ul');
            ul.append(h3)
            let objLi = jsonObject.allies;
            let i = 0;
            for (i; i < objLi.length; i++) {
              let objList = document.createElement('li');
              objList.append(objLi[i]);
              ul.append(objList)
              li.append(ul)
            }
          } else {
            return;
          }

          //enemies
          if (jsonObject.enemies != "") {
            let h3 = document.createElement('h3');
            h3.innerHTML = `Park Attractions featuring ${jsonObject.name}:`;
            let ul = document.createElement('ul');
            ul.append(h3)
            let objLi = jsonObject.enemies;
            let i = 0;
            for (i; i < objLi.length; i++) {
              let objList = document.createElement('li');
              objList.append(objLi[i]);
              ul.append(objList)
              li.append(ul)
            }
          } else {
            return;
          }





        })

    }
  });
}
async function fetchList() {
  var pageNum = 1;
  var pageApi = `https://api.disneyapi.dev/characters?page=${pageNum}`;
  var totalPages;

  fetch(pageApi)
    .then((response) => response.json())
    .then(function (jsonObject) {
      totalPages = jsonObject.totalPages;
      //build a new array for the characteer objects to go into
      //constructs the object to go into the big character list array
      class item {
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
            //returns list of JUST json object "data"

            //loop through each object (on each page) and get the specific object value to populate the class constructor
            let i = 0;
            for (i; i < dataObj.length; i++) {
              var charName = dataObj[i].name;
              var charid = dataObj[i]._id;

              let newItem = new item(charName, charid); //builds the object for the class constructor from withing the "for" statement and sends it to the global class constructor
              //... Instead of constructing a class, you could use this: let newItem = {name: charName, id: charid};
              bigCharacterList.push(newItem);
              buildAllChar(item, bigCharacterList);
            }
          })
      }
    });
}

function buildAllChar(bigCharacterList) {
  // let window = document.querySelector('.allChar');
  // console.log(bigCharacterList);
  bigCharacterList.forEach(item => {
    console.log(item.name);

  });


  let idNum = item.id;
  let getOneCharacter = `https://api.disneyapi.dev/characters/${idNum}`

  fetch(getOneCharacter)
    .then((response) => response.json())
    .then(function (jsonObject) {
      //get img url and slice file extension
      let CharImg = document.createElement('img');
      let imgURL = jsonObject.imageUrl;

      let dummyString = imgURL;
      dummyString = dummyString.slice(0, dummyString.lastIndexOf(".jpeg"))
      let newURL = dummyString + ".jpeg";

      CharImg.setAttribute('src', newURL);
      CharImg.setAttribute('alt', 'disney character image')
      li.append(CharImg)




    })
}


fetchList();