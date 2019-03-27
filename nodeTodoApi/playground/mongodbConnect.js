//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');
const assert = require('assert');
//console.log(new ObjectID());
// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'nodeTodeApi';

// Use connect method to connect to the Server
MongoClient.connect(url, { useNewUrlParser: true }, function (err, client) {
  assert.equal(null, err);
  console.log("Connected correctly to server");

  const db = client.db(dbName);
  const collection = "TodoList";

  // Insert a single document
  // db.collection(collection).insertOne({
  //   text:"getting out of the office",
  //   status:false,
  //   isActive:true
  // }, function(err, r) {
  //   assert.equal(null, err);
  //   assert.equal(1, r.insertedCount);
  //   console.log(JSON.stringify(r.ops,undefined,2));
  //   // Insert multiple documents

  //   client.close();
  // });
  db.collection(collection).insertMany([{
    task: "getting out of the office",
    status: false,
    isActive: true
  }, {
    task: "finishing node tutorial",
    status: false,
    isActive: true
  },{
    task: "get new job",
    status: true,
    isActive: true
  },{
    task: "estimate",
    status: true,
    isActive: true
  }], function (err, r) {
    assert.equal(null, err);
    //assert.equal(2, r.insertedCount);
    //console.log(JSON.stringify(r.ops, undefined, 2));

    client.close();
  });

});