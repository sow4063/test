var request = require('request');
var fs = require('fs');

var postData = {
  'mobileNumber': '01051999026'
};

var headersOpt = {  
  'content-type': 'application/json'
};

var url = 'https://www.fordicpro.com:8200/Code';

var options = {
  method: 'get',
  form: postData, // Javascript object
  json: true, // Use,If you are sending JSON data
  url: url,
  headers: headersOpt
};

request( options, function( err, res, body ) {
  if( err ) {
    console.log('Error :', err );
  }
  else {
    console.log(' Body :', body );
    fs.writeFileSync('./key/code.txt', body.val, 'utf-8' );
  }
  

});
