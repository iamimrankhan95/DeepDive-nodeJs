const request=require('request');
var geocode = (address) => {
    return new Promise((resolve,reject)=>{
        request({
            url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + address,
            json: true //converts the response into json
        }, (error, response, body) => {       
            if (error) {
                reject('couldnt connect to server');
            } else if (body.status === 'ZERO_RESULTS') {
                reject('unable to find that address');
            } else if (body.status === 'OK') {
                resolve({
                    address: body.results[0].formatted_address,
                    lattitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                });
            } else {
                resolve(body);
            }
        });
        
    });
    
}

geocode('dhsdfsdsvsdvsvaka').then((resolved)=>{
    console.log(JSON.stringify(resolved,undefined,2));
},(rejected)=>{
    console.log(rejected);
});