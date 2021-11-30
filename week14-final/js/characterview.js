let listItem = document.querySelector('.returnresults');

let div = document.createElement('div');

div.innerHTML = `
      <div class="detailsWrapper">
      <h2> ${item.name} </h2>
      <div class="CharImg></div>
      <button>✗</button>
      <ul class="characterDetails"></ul>

</div>`
listItem.append(div)