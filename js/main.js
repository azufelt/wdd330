const requestLinks = "js/main.json";

fetch(requestLinks)
.then(function (response) {
  return response.json();
})
.then(function (jsObject){
  const weeks = jsObject['assignments'];
  console.log(weeks);
  
  let block = document.createElement('div');
  let ulList = document.createElement('ul');
  
  weeks.forEach( week => {
    let li = document.createElement('li');
    let a =document.createElement('a');
    a.setAttribute('href', week.url);
    a.textContent = week.label;
    li.append(a);
    ulList.append(li);
  })
  block.append(ulList)
  document.querySelector('#assignments').append(block);
})