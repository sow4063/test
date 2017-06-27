var request = require('request');
var NodeRSA = require('node-rsa');
var fs = require('fs');

var rsapubkey = fs.readFileSync( './key/rsapubkey.txt', 'utf8' );
var rsaprikey = fs.readFileSync( './key/rsaprikey.txt', 'utf8' );
var rsaappkey = fs.readFileSync( './key/rsaappkey.txt', 'utf8' );

var postData = {
  'mobileNumber': '01051999026'
};

var headersOpt = {  
  'content-type': 'application/json'
};

var url = 'https://www.fordicpro.com:8200/AESKey?';

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
    return
  }
  else {

    console.log('Body :', body );  
    //console.log('rsaappkey =>> ', rsaappkey );

    var serverKey = new NodeRSA( rsaappkey );
    var decrypted = serverKey.decryptPublic( body.val, 'utf8' );
    console.log('decrypted =>> ', decrypted );

    var clientKey = new NodeRSA( rsaprikey );
    var aes = clientKey.decrypt( decrypted, 'utf8' );
    console.log('aes =>> ', aes );

  }

});
