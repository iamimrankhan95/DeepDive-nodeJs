
const express=require('express');
const hbs=require('hbs');
const fs=require('fs');

var app=express();//express() returns an express application

app.set('view engine', 'hbs');
app.listen(3000,()=>{
    console.log('server started');
});
/*
Middleware functions are functions that have access to the request object (req), the response object (res), and the next function in the application’s request-response cycle. 
The next function is a function in the Express router which, when invoked, executes the middleware succeeding the current middleware.

Middleware functions can perform the following tasks:

Execute any code.
Make changes to the request and the response objects.
End the request-response cycle.
Call the next middleware in the stack.
If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.
*/
app.use(express.static(__dirname+'/public')); // __dirname,point to the root folder of the project
app.use((req,res,next)=>{
    var now=new Date().toString();
    var log=`${now}: ${req.method}  ${req.url} \n`;
    console.log(log);
    fs.appendFile('server log', log,(err)=>{
        if(err){
            console.log('unable to append to server.log');
        }
    });
    next();
})
app.use((req,res,next)=>{
    res.render('maintenance.hbs',{
        title:'maintainance page',
        body:'going on maintaining',
    })
})
//routes:
app.get('/',(req,res)=>{
    // res.send('ola');
    res.render('home.hbs',{
        title:'home page',
        body:'i am body',
    })
})

app.get('/json',(req,res)=>{
    res.send({
        name:'imran',
        like:[
            'ice cream'
        ]
    })
})

app.get('/bad',(req,res)=>{
    res.send({
        erroMessage:'Oops!'
    })
})