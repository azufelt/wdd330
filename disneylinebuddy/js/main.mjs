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
    // let i;
    // let tiles = jsObject.navTiles[i].name;
    // const tiles = jsObject['name'];
    console.log(jsObject);

    // let tileParent = document.createElement('div');
    // let tileLink = document.createElement('ul');
    // let tile = jsObject.navTiles.name;
    // for (i = 0; 1 < tile.length; i++) {
    //   console.log(tile)
    // }

    // tiles.forEach(tile => {
    //   let li = document.createElement('li');
    //   let a = document.createElement('a');
    //   a.setAttribute('href', tile.link);
    //   a.textContent = tile[0].name;
    //   li.append(a);
    //   tileLink.append(li);
    //   i++;
    // })
    // tileParent.append(tileLink)
    // document.querySelector('.navTileBox').append(tileParent);
  })