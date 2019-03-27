const request = require('request');
//9f61c50629799dfb9799608d4327932e
var geocode = (address, callback) => {
    request({
        url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + address,
        json: true //converts the response into json
    }, (error, response, body) => {

        if (error) {
            callback('couldnt connect to server');
        } else if (body.status === 'ZERO_RESULTS') {
            callback('unable to find that address');
        } else if (body.status === 'OK') {
            callback(undefined, {
                address: body.results[0].formatted_address,
                lattitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });
            // console.log(body.results[0].formatted_address);
            // console.log(body.results[0].geometry.location.lng);
            // console.log(body.results[0].geometry.location.lat);
        } else {
            callback(undefined, body);
            //console.log(JSON.stringify(body, undefined, 2));
        }

    });
}
module.exports = {
    geocode
}