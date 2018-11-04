const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path')
const fetch = require("node-fetch"); 
const port = process.env.PORT || 3099;        // set our port


/* 
API Method : get Representatives from local directory
sets endpoint of "reps"
*/

const repsRouter = express.Router()

const repsMiddleware = (req, res, next) => {
	let stateCode = req.query.stateCode || 'IL';
	let filePath = path.normalize(__dirname + '/legislators/' + stateCode + '.json');
	console.log(filePath)
	fs.readFile(filePath, 'utf8', function (err,data) { 
		if (err) { 
			return console.log(err); 
		} 
		JSON.parse(data);
		res.send(data); 
	});
}

app.use('/reps', repsMiddleware);

app.use(function(req, res, next) {
  next(createError(404));
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


app.listen(3099, () => {
 console.log(" 'History Is Watching' server running on port 3099");
});



