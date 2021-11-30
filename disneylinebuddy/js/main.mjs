import {
  getName
} from "./getName.mjs";

getName();

const json = "json/navTile.json"

fetch(json)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsObject) {
    console.log(jsObject);
    const tiles = jsObject.navTiles;
    console.log(tiles);
    tiles.forEach(tile => {
      let tileList = document.querySelector('.tileList');
      //build the individual tile and then append the parent class=.tileList
      let name = tile.name;
      let link = tile.link;
      let color = `hsl(${tile.backgroundcolor})`;
      let linkColor = tile.linkcolor;


      let li = document.createElement('li');
      li.innerHTML = `<a href="${link}" class="main-page link tile">
      <div class = "tileSquare tile"
      style = "background-color: ${color}; color: ${linkColor};" >
      <p class="tile-text">${name}</p>
      </div>
      </a>`;
      tileList.append(li);
    })
  })