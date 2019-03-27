
var getUser=(id,callback)=>{
    var users=[];
    var user={
        id,
        name:'imran khan'
    };
    callback(user);
}

getUser(007,(userObj)=>{
    console.log(`hy  ${userObj.name}`);
});

getUser(007,(userObj)=>{
    console.log(`0lo  ${userObj.name}`);
});