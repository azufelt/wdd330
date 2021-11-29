const searchbtn = document.querySelector(".characterSearch");
searchbtn.addEventListener('click', findChar, false);


const bigCharacterList = []; //makes new array available at global scope for future use

function findChar() {

  console.log(bigCharacterList);
}


async function fetchList() {
  pageNum = 1;
  const pageApi = `https://api.disneyapi.dev/characters?page=${pageNum}`;

  fetch(pageApi)
    .then((response) => response.json())
    .then(function (jsonObject) {
      // console.log(jsonObject);
      const totalPages = jsonObject.totalPages;
      // console.log(totalPages);

      var bigList = bigCharacterList; //build a new array for the characteer objects to go into

      class item { //constructs the object to go into the big character list array
        constructor() {
          this.name = charName;
          this.id = charid;
        }
      }


      for (pageNum; pageNum < 3; pageNum++) { //loop through all the pages of API call
        const dataObj = jsonObject['data'];
        // console.log(dataObj); //returns list of JUST json object "data"

        for (i = 0; i < dataObj.length; i++) { //loop through each object (on each page) and get the specific object value to populate the class constructor
          var charName = dataObj[i].name;
          var charid = dataObj[i]._id;

          let newItem = new item(dataObj); //builds the object for the class constructor from withing the "for" statement and sends it to the global class constructor
          let List = {
            newItem
          };
          bigList.push(List);
          // console.log(bigList);
        }

      }
    })
}

fetchList();