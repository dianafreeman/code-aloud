var KEY = 'd6baa8054d388ade4d57c9e24ef19ced';


function getLegislators(STATECODE){
	// REQUIRES STATE CODE | Two letters
  //var state = "IL"
  
	var state = STATECODE;
  	var url = "https://www.opensecrets.org/api/?method=getLegislators&id="+state+"&apikey="+ KEY +"&output=json";
	fetch(url)
	.then(function(response){
	  return response.json();
  })
  .then(function(theJson) {
  	var data = JSON.parse(JSON.stringify(theJson));
  	var reps = data.response.legislator
  	console.log(reps)
	/*
	returns Array with the format

		bioguide_id: "R000515"
		birthdate: "1946-11-23"
		cid: "N00004887"
		comments: ""
		congress_office: "2188 Rayburn House Office Building"
		exit_code: "0"
		facebook_id: "congressmanbobbyrush"
		fax: "202-226-0333"
		feccandid: "H2IL01042"
		first_elected: "1992"
		firstlast: "Bobby L Rush"
		gender: "M"
		lastname: "RUSH"
		office: "IL01"
		party: "D"
		phone: "202-225-4372"
		twitter_id: "RepBobbyRush"
		votesmart_id: "26831"
		webform: "https://rush.house.gov/contact-me/legislative-issues"
		website: "http://rush.house.gov"
		youtube_url: "https://youtube.com/CongressmanRush"


	*/
   // $('#legislators ul').append(JSON.stringify(theJson));
   // console.log(JSON.stringify(theJson))
  });
}