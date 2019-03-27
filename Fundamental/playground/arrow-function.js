var square=(x)=>{
    return x*x;
}
var squareWithArrowFunctionWithRegularExprsn=()=>x*x;
console.log(square(10));


var person={
    name:"imran",
    sayHi:()=>{
        console.log(`hi ${this.name}`);// here in arrow function this.name is undefined, this keyword doesnt bind with ()=>
        // normal function must be used
    },
    sayHiAlt(){
        console.log(`hi ${this.name}`)
    }
}

person.sayHi();