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

console.log('==============================================================');
console.log('========================== insert Policy =====================');
console.log('==============================================================');

// add policy
var url = 'https://localhost:8200/insertPolicy?ver=1&keyChange=false&appChange=true&note=appchanged';

options.method = 'post';
options.url = url;

request( options, function( err, res, body ) {
  if (err) {
    console.log('Error :', err );
    return
  }
  console.log(' Body :', body );

});

console.log('==============================================================');
console.log('======================== search Policy =======================');
console.log('==============================================================');

url = 'https://localhost:8200/Policy';

options.method = 'get';
options.url = url;

request( options, function( err, res, body ) {
  if (err) {
    console.log('Error :', err );
    return
  }
  console.log(' Body :', body );

});




