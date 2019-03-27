console.log('starting app');

setTimeout(()=>{
    console.log("inside time out");
},3000);
setTimeout(()=>{
    console.log("inside time out");
},5000);
setTimeout(()=>{
    console.log("inside time out");
},0);

console.log('ending app');