
//assigns each button to a variable
const textButton = document.getElementById('number');
const apiButton = document.getElementById('chuck');
const outputDiv = document.getElementById('output');

//assign URLs to variables
const textURL = 'http://numbersapi.com/random';
const apiURL = 'https://api.chucknorris.io/jokes/random';

//assign event handler to each button
//Number Fact Button
//constructs a fetch request, returns a promise that resolves to a string. Then place that string inside the <div> with an id or 'output'
textButton.addEventListener('click',() => {
  fetch(textURL)
  .then(response => {
    outputDiv.innerHTML = 'Waitig for response...';
    if(response.ok) {
return response;
    }
    throw Error(response.statusText);
  })
  .then( response => response.text() )
  .then( text => outputDiv.innerText = text )
  .catch( error => console.log('There was an error:', error))
}, false);

//Chuck Norris Button
//almost identical to previous example, except the response returns JSON, so we use the json() method to return a promise that resolves as javascript Object
//The returned Object has a value property that contains the fact, so we insert it into a <div> with an id output using innerText.
apiButton.addEventListener('click', () => {
  fetch(apiURL)
  .then( response => {
    outputDiv.innerHTML = 'waiting for response...';
    if(response.ok) {
      return response;
    }
    throw Error(response.statusText);
  })
  .then( response => response.json())
  .then( data => outputDiv.innerHTML = data.value)
  .catch(error => console.log('There was an error:', error))}, false);
