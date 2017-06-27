var request = require('request');

var options = {
  method: 'post',
  body: {}, // Javascript object
  json: true, // Use,If you are sending JSON data
  url: url,
  headers: {
    // Specify headers, If any
  }
};

var url = 'https://www.fordicpro.com:8200/insertCode?';
url += 'mobileNumber=01051999026&bsid=12345&code=breq9aZ9aGQRSg7YY/Y3k6QW&updateDate=20170626184545';

options.url = url;

request( options, function( err, res, body ) {
  if (err) {
    console.log('Error :', err );
    return
  }
  console.log(' Body :', body );

});

// const https = require('https');

// var options = {
//   method: 'get',
//   body: {}, // Javascript object
//   json: true, // Use,If you are sending JSON data
//   headers: {
//     // Specify headers, If any
//   }
// };

// var url = 'https://128.199.172.16:3000/verify?';
// url += 'mobileNumber=01051999026&LPW=fail::breq9aZ9aGQRSg7YY/Y3k6QW&CID=CID&UUID=uuid-12345';

// options.url = url;

// const req = https.request(options, (res) => {
//   console.log('statusCode:', res.statusCode);
//   console.log('headers:', res.headers);

//   res.on('data', (d) => {
//     process.stdout.write(d);
//   });
// });

// req.on('error', (e) => {
//   console.error(e);
// });
// req.end();
