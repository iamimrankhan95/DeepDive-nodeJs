const yarg = require('yargs');
const axios=require('axios');

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
  .argv;

var geocodeUrl='https://maps.googleapis.com/maps/api/geocode/json?address=' + encodeURIComponent(argv.address);
axios.get(geocodeUrl).then((response)=>{
    if(response.data.status==='ZERO_RESULTS'){
        throw new Error('couldnt find that address');        
    }else if(response.data.status==='OVER_QUERY_LIMIT'){
        throw new Error('limit exceed');
    }
    var address= response.data.results[0].formatted_address;
    var lat= response.data.results[0].geometry.location.lat;
    var long=response.data.results[0].geometry.location.lng;
    console.log(`Address: ${address}`);
    var weatherUrl=`https://api.darksky.net/forecast/9f61c50629799dfb9799608d4327932e/${lat},${long}`;
    return axios.get(weatherUrl);// return na korle porer then ta response pabe na. as we are not using then() with the get()
}).then((response)=>{
    var temp=response.data.currently.temperature;
    var appTemp=response.data.currently.apparentTemperature;
    console.log(`its currently ${temp}, but feel like ${appTemp}`)
}).catch((e)=>{
    if(e.code==='ENOTFOUND'){
        console.log('couldnt connect to server');
    }else{
        console.log(e.message);
    }
});