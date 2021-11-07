const swPeople = 'people';
const swPlanets = 'planets';
let i = 1;
const pokemonApi = `https://pokeapi.co/api/v2/pokemon-species`;
let nextApi;
let previous;
let pokemonUrl;

fetch(pokemonApi)
  .then((response) => {
    if (response.ok) {
      return response;
    }
    throw Error(response.statusText);
  })
  .then(response => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    const results = jsObject['results'];
    console.log(results);

    results.forEach(result => {
      let li = document.createElement('li')
      li.innerHTML = `<h2 class="pokemonInfo">${result.name}</h2>`;
      document.querySelector('.outputResidents').append(li);

       const pokemonInfo = document.querySelector('.pokemonInfo')
      pokemonInfo.addEventListener('click', pokemonInfoFunc, false);

       pokemonUrl = result.url;
       function pokemonInfoFunc(pokemonUrl) {
        fetch(pokemonUrl) 
          .then(urlresponse => urlresponse.json())
          .then((objectUrl) => {
            console.log(objectUrl);

          })
      }
    })
      nextApi = jsObject.next;
      prevApi = jsObject.previous;
    
    })
  
const nextButton = document.querySelector('.load-next');
nextButton.addEventListener('click', next, false);


function next() {
  document.querySelector('.outputResidents').innerHTML = '';

  fetch(nextApi)
    .then((response) => response.json())
    .then((jsObject) => {
      const next = jsObject.next;
      fetch(next)
        .then((response) => response.json())
        .then((nextObject) => {
          const results = nextObject['results'];
          results.forEach(result => {
            let li = document.createElement('li')
            li.innerHTML = `<h2 class="pokemonInfo">${result.name}</h2>`;
            document.querySelector('.outputResidents').append(li);

            nextApi = jsObject.next;
            prevApi = jsObject.previous;
          })
        })
    })
}
const prevButton = document.querySelector('.load-prev');
prevButton.addEventListener('click', prev, false);

function prev() {
  document.querySelector('.outputResidents').innerHTML = '';

  fetch(prevApi)
    .then((response) => response.json())
    .then((jsObject) => {
      console.log(jsObject);
      const results = jsObject['results'];
      results.forEach(result => {
        let li = document.createElement('li')
        li.innerHTML = `<h2 class="pokemonInfo">${result.name}</h2>`;
        document.querySelector('.outputResidents').append(li);

        nextApi = jsObject.next;
        prevApi = jsObject.previous;
      })
    })
}