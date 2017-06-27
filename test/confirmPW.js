var request = require('request');
var fs = require('fs');
var crypto = require("crypto");

var aeskey = fs.readFileSync( './key/aeskey.txt', 'utf8' );
var code = fs.readFileSync( './key/code.txt', 'utf8' );
var mobileNumber = '01051999026';
var timestamp = '2017062711515';
var CID = 'wooribank';

var cipher = crypto.createCipher('aes192', aeskey );    // Cipher 객체 생성
cipher.update( code + mobileNumber + timestamp, 'utf8', 'base64' );      // 인코딩 방식에 따라 암호화
var encrypted = cipher.final('base64');              // 암호화된 결과 값

console.log('comparePW key = ', aeskey );
console.log('comparePW code = ', code );
console.log('comparePW mobileNumber = ', mobileNumber );
console.log('comparePW timestamp = ', timestamp );
console.log('comparePW encrypted = ', encrypted );

var postData = {
  'mobileNumber': mobileNumber,
  'LPW': encrypted,
  'CID': CID,
  'timestamp': timestamp
};

var headersOpt = {  
  'content-type': 'application/json'
};

var url = 'https://www.fordicpro.com:8300/verify';

var options = {
  method: 'get',
  form: postData, // Javascript object
  json: true, // Use,If you are sending JSON data
  url: url,
  headers: headersOpt
};


// test for pass
request( options, function( err, res, body ) {
  if( err ) {
    console.log('Error :', err );
  }
  else {
    console.log('Body :', body );  
  }

});

// test for fail
postData.timestamp = '12345678';
options.form = postData;

request( options, function( err, res, body ) {
  if( err ) {
    console.log('Error :', err );
  }
  else {
    console.log('Body :', body );  
  }

});

