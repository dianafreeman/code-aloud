/*

Dependencides:
  AJAX Cross Origin
  Global variable for data storage per session

*/
var openSecretsKey = 'd6baa8054d388ade4d57c9e24ef19ced';
var GoogleKey = "AIzaSyBeJ7EpLw9vtzW1unbbFUkSY6gcsVeHGQs"


function getLegislators(StateCode){
  var url = "https://www.opensecrets.org/api/?method=getLegislators&id="+StateCode+"&apikey="+ openSecretsKey +"&output=json";
      $.ajax({
      crossOrigin: true,
      url: url,
      success: legislatorSuccess,
      });
};

function legislatorSuccess(data){
  $('#start').html();
  var all = JSON.parse(data);
  var reps = all.response;
  console.log(reps)
  console.log("length is "+ reps.len)
   for (var i = 0, len = reps.length; i < len; ++i) {
      var person = reps[i];
        console.log(person);
   }
 console.log('done')
};

function getIndustryContributors(CandidateID){
	var cid = CandidateID;
  	var url = "https://www.opensecrets.org/api/?method=method=candIndustry&cid="+cid+"&apikey="+ openSecretsKey +"&output=json";
      $.ajax({
      crossOrigin: true,
      url: url,
      success: function(data){
        console.log(data)
      }
      });
};


function getIndustryDirectory(){
var url = 'https://sheets.googleapis.com/v4/spreadsheets/16MF5dxGiPa92WXLskT1OBK61eTa8CPSWOaEUBFTiZgc/values/crpIndustryCodes?key='+GoogleKey;
  $.ajax({
      crossOrigin: true,
      url: url,
      success: function(data){
        console.log(data)
      }
      });
};

function getComitteeDirectory(){
var url = 'https://sheets.googleapis.com/v4/spreadsheets/16MF5dxGiPa92WXLskT1OBK61eTa8CPSWOaEUBFTiZgc/values/congCmteCodes?key='+GoogleKey;
 $.ajax({
      crossOrigin: true,
      url: url,
      success: function(data){
        console.log(data)
      }
      });
};

/*
organization orgid="D000000082" orgname="National Rifle Assn 

Details

<organization cycle="2018" orgid="D000000082" orgname="National Rifle Assn" total="612718" indivs="12948" pacs="599770" soft="0" tot527="0" dems="14400" repubs="598318" lobbying="2006000" outside="1894788" mems_invested="0" gave_to_pac="0" gave_to_party="110318" gave_to_527="0" gave_to_cand="476300" source="www.opensecrets.org/orgs/summary.php?id=D000000082"  />




*/

/*

Industry
CATCODE CATNAME

J6100 Anti-Guns
J6200 Pro-Guns


J7120 Abortion policy/Anti-Abortion
J7150 Abortion policy/Pro-Abortion Rights


H4300 Pharmaceutical manufacturing
H4400 Pharmaceutical wholesale

H5300 For-profit Education

J5300 Puerto Rico statehood policy

*/

function contByIndustry(candidateID, cycle, industryCode){
  //default cycle is most recent
var url = "https://www.opensecrets.org/api/?method=candIndByInd&cid="+candidateID+"&cycle="+cycle+"&ind="+industryCode+"&apikey="+openSecretsKey
 $.ajax({
      crossOrigin: true,
      url: url,
      success: function(data){
        console.log(data)
      }
      });
};



function antiGunMoney(candidateID){


}

function proChoice(candidateID){


}

function antiChoide(candidateID){


}

