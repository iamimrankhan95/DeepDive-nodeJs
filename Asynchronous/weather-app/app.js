
const yarg = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');
//_______________________________
var argv = yarg
  .options({
    f: {
      alias: 'file',
      describe: 'x marks the spot',
      type: 'string'
    },
    a: {
      alias: 'address',
      describe: 'Address to fetch weather for',
      type: 'string',
    }
  })
  .help()
  .demandOption(['address'], 'Please provide address arguments to work with this tool')
  .argv
  ;

// console.log(argv['address']);console.log(argv.address);
console.log(encodeURIComponent(argv['address']));
/*
var address='1301%20elephant%20road%20dhaka';
request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + encodeURIComponent(argv['address']),
  json: true //converts the response into json
}, (error, response, body) => {

  if (error) {
    console.log('couldnt connect to server');
  } else if (body.status === 'ZERO_RESULTS') {
    console.log('unable to find that address');
  } else if (body.status === 'OK') {
    console.log(body.results[0].formatted_address);
    console.log(body.results[0].geometry.location.lng);
    console.log(body.results[0].geometry.location.lat);
  } else {
    console.log(JSON.stringify(body, undefined, 2));
  }

}); 
*/
// ei geocode er kaaj holo address niye,kono kichur processed data print kora.kokhon shei print ta korbe seta data processor(geocode) function e bole dite hobe
geocode.geocode(encodeURIComponent(argv.address), (errorMsg, result) => {
  if (errorMsg) {
    console.log(errorMsg);
  } else {
    console.log(JSON.stringify(result, undefined, 2));
    weather.getWeather(result.lattitude, result.longitude, (errorMsg, weatherResult) => {
      if (errorMsg) {
        console.log(errorMsg);
      } else {
        //console.log(JSON.stringify(y, undefined, 2));
        console.log("temp: " + weatherResult.currently.temperature);
      }

    })
  }
});