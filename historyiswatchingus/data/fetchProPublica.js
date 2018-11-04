function getLegislators(stateCode){ 
// console.log(stateCode)
  let url = 'https://www.opensecrets.org/api/?method=getLegislators&id='+stateCode+'&apikey='+ process.env.OPEN_SECRETS_KEY +'&output=json';
  fetch( url , {
        mode: "no-cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then(response => response.json())
    .then(text => {
      //  console.log(JSON.stringify(text));
     // creates a .json file for the response
       saveLegislatorJsonFile( text, stateCode)
    })
    .catch(err => console.error(err))

}
