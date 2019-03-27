//promise;;;
var somePromise=new Promise((resolve,reject)=>{
    reject('rejected');
    resolve('resolved');
});

somePromise.then((resolved)=>{
    console.log(resolved);
},(rejected)=>{
    console.log(rejected);
});

/*
var addAsynch = function (a,b) {
    return new Promise((resolve,reject)=>{
        if(typeof a==='number' && typeof b==='number'){
            resolve(a+b);
        }else{
            reject('values must be number');
        }
    });
};
addAsynch(2,'x').then((resolved)=>{
    console.log(resolved);
},(rejected)=>{
    console.log(rejected);
})*/
/*______________with callback function___________*/
/*
var addAsynch=(a,b,callback)=>{
    if(typeof a==='number' && typeof b==='number'){
        callback(a+b);
    }else{
        callback('values must be number');
    }
}
addAsynch(2,4,(result)=>{
    console.log(result);
})*/