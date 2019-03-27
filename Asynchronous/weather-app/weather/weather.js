const request = require('request');
//9f61c50629799dfb9799608d4327932e
var getWeather = (lat, long, callback) => {
    request({
        url: "https://api.darksky.net/forecast/9f61c50629799dfb9799608d4327932e/" + lat + "," + long,
        json: true
    }, (error, response, body) => {

        if (error) {
            callback('couldnt connect to server');
        } else if(response.statusCode===400) {
            callback("couldnt fetch the data.");
            
        }else{
            callback(undefined,body)
           // console.log(JSON.stringify(response,undefined,2));
        }
    });
}
module.exports = {
    getWeather
}