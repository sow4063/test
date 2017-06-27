var request = require('request');
var NodeRSA = require('node-rsa');
var fs = require('fs');

var rsapubkey = '';
var rsaprikey = '';

var key = new NodeRSA( {b: 2048} );
rsapubkey = key.exportKey('pkcs8-public-pem');
rsaprikey = key.exportKey('pkcs8-private-pem');

var postData = {
  'mobileNumber': '01051999026',
  'rsakey': rsapubkey
};

var headersOpt = {  
  'content-type': 'application/json'
};

var url = 'https://www.fordicpro.com:8200/RSAKey?';

var options = {
  method: 'post',
  form: postData, // Javascript object
  json: true, // Use,If you are sending JSON data
  url: url,
  headers: headersOpt
};

request( options, function( err, res, body ) {
  if (err) {
    console.log('Error :', err );
    return
  }
  else {
    console.log('rsaprikey => ', rsaprikey );
    console.log('rsapubkey => ', rsapubkey );
    console.log(' Body apprsapubkey =>>> ', body );

    fs.writeFileSync('./key/rsaprikey.txt', rsaprikey, 'utf-8' );
    fs.writeFileSync('./key/rsapubkey.txt', rsapubkey, 'utf-8' );  
    fs.writeFileSync('./key/rsaappkey.txt', body.val, 'utf-8' );  

  }
  

});
