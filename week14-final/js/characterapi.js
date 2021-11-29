// const search = document.querySelector(".characterSearch").value;
// const fetchApi = `https://api.disneyapi.dev/characters?page=50`;


// fetch(fetchApi)
//   .then((response) => {
//     if (response.ok) {
//       return response;
//     }
//     throw Error(response.statusText);
//   })
//   .then(response => response.json())
//   .then((jsObject) => {
//     console.log(jsObject);
//     const data = jsObject['data'];
// This ACTUALLY WORKS!!! But it will have to loop through all 149 pages of data to find the character it's searching for. 
//   const characters = data.filter(data => data.name == "Gale");
//   console.log(characters);
// })

//I could make a new array of the character name & _id because then I could get the information directly from the single character api url page. 

//Loop through ALL pages, get name & _id, return new array of objects
//  const characterSetList = characterMakeList();

// function characterMakeList(){
// fetchList();

const searchbtn = document.querySelector(".characterSearch");
searchbtn.addEventListener('click', findChar, false);



function findChar() {

  let CharacterSearch = fetchList(characterList);


  let searchChar = document.querySelector(".characterValue").value;
  // const storagelist = JSON.parse(localStorage.getItem('characterList'));


  let filterList = CharacterSearch.filter(object => object.name == searchChar);
  // var filterObj = storagelist.filter(object => object.name = searchChar);
  // var charUrl = filterObj.name;
  console.log(filterList);
  filterList.forEach(item => {
    let li = document.createElement('li')
    li.innerHTML = item.name;
    document.querySelector('.returnresults')
  })
  // console.log(charUrl);

  // characterResults(charUrl);
}

function fetchList() {
  pageNum = 1;

  // for (pageNum; pageNum <= 10; pageNum++) {
  const pageApi = `https://api.disneyapi.dev/characters?page=${pageNum}`;

  fetch(pageApi)
    .then((respond) => respond.json())
    .then((pageObj) => {
      const objList = pageObj['data'];
      console.log(objList);
      const characterList = [];
      console.log(characterList);
      objList.forEach(item => {
        let nameList = {
          name: item.name,
          id: item._id
        };
        characterList.push(nameList);
        console.log(characterList);
      });
    });

}
// }

// function characterResults(charUrl) {

//   const charpage = charUrl;
//   const getOneCharacter = `https://api.disneyapi.dev/characters/${charpage}`;
//   fetch(getOneCharacter)
//     .then(response => response.json())
//     .then((bioObj) => {
//       var newBio = bioObj['getOneCharacter'];
//       console.log(newBio)

//     })


// let h1 = document.createElement('h1');
// h1.innerHTML = `${newBio.name}`;
// document.querySelector('.characterBio').append(bio);