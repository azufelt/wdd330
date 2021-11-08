https://catfact.ninja/fact

// var apiRequest = `https://api.disneyapi.dev/characters
// `;


// fetch(apiRequest)
//   .then((response) => {
//     if (response.ok) {
//       return response;
//     }
//     throw Error(response.statusText);
//   })
//   .then(response => response.json())
//   .then((jsObject) => {
//     console.log(jsObject);
// 		console.log(jsObject.data[20]);
// 		console.log(jsObject.data[20].imageUrl);
// 	})





var apiRequest = `http://app.fakejson.com/q
`;


fetch(apiRequest)
  .then((response) => {
    if (response.ok) {
      return response;
    }
    throw Error(response.statusText);
  })
  .then(response => response.json())
  .then((jsObject) => {
    console.log(jsObject);
		console.log(jsObject.data[20]);
		console.log(jsObject.data[20].imageUrl);
	})
