//  console.log('common.js started');

// module.exports.add=(a,b)=>{
//     return a+b;
// }
var list=(title,body)=>{
    console.log(title,body);
};

var p=(printsmthng)=>{   

    console.log(printsmthng===undefined?"\n":printsmthng);
}
module.exports={
    p
}