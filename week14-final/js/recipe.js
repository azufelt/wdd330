fetch("https://tasty.p.rapidapi.com/recipes/auto-complete?prefix=chicken", {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "tasty.p.rapidapi.com",
			"x-rapidapi-key": "0b34579022msh686c36d142aa29ep191eccjsncf70ed0cfed3"
		}
	})
	.then(response => response.json()).then(function (data) {
		console.log(data);
	})
	.catch(err => {
		console.error(err);
	});


// fetch("https://tasty.p.rapidapi.com/recipes/auto-complete?prefix=chicken", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "tasty.p.rapidapi.com",
// 		"x-rapidapi-key": "0b34579022msh686c36d142aa29ep191eccjsncf70ed0cfed3",
// 		"Access-Control-Allow-Origin": "tasty.p.rapidapi.com",
// 	}
// }).then(response => response.json()).then(function (data) {
// 	console.log(data);
// }).catch(err => {
// 	console.error(err);
// });