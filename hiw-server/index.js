const axios = require('axios');

var openSecretsKey = 'd6baa8054d388ade4d57c9e24ef19ced';
var GoogleKey = "AIzaSyBeJ7EpLw9vtzW1unbbFUkSY6gcsVeHGQs";


function legislatorURL(STATE) {
return "https://www.opensecrets.org/api/?method=getLegislators&id="+ STATE +"&apikey="+ openSecretsKey +"&output=json"
}

axios.get( "https://www.opensecrets.org/api/?method=getLegislators&id=IL&apikey="+ openSecretsKey +"&output=json")
	.then(response => {
		console.log(response.data)
	})
	.catch(error => {
		console.log(error)
	})

	