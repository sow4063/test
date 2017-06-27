var request = require('request');

var postData = {
  'mobileNumber': '01051999026',
  'aeskey': '9876543210'
};

var url = 'https://localhost:8200/AESKey?mobileNumber=01051999026&aeskey=9876543210';

var options = {
  method: 'post',
  body: postData, // Javascript object
  json: true, // Use,If you are sending JSON data
  url: url,
  headers: {
    // Specify headers, If any
  }
};

//https://localhost:8300/verify?mobileNumber=01051999026&LPW=fail::breq9aZ9aGQRSg7YY/Y3k6QW&CID=CID&UUID=uuid-12345

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

request(options, function (err, res, body) {
  if (err) {
    console.log('Error :', err)
    return
  }
  console.log(' Body :', body)

});

// confirmPW
url = 'https://localhost:8300/verify?mobileNumber=01051999026&LPW=fail::breq9aZ9aGQRSg7YY/Y3k6QW&CID=CID&UUID=uuid-12345';

options.method = 'get';
options.json = true;
options.url = url;

request( options, function (err, res, body) {
  if (err) {
    console.log('Error :', err)
    return
  }
  console.log(' Body :', body)

});

// getCode
url = 'https://localhost:8200/Code?mobileNumber=01051999026';

options.method = 'get';
options.json = true;
options.url = url;

request( options, function (err, res, body) {
  if (err) {
    console.log('Error :', err)
    return
  }
  console.log(' Body :', body)

});




