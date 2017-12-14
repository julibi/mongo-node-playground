// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to Mongodb server');



  // db.collection('Todos').insertOne({
  //   text: 'Something to do.',
  //   completed: false
  // }, (error, result) => {
  //   if (err) {
  //     return console.log('Unable to insert ToDo.');
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name: 'Juli',
  //   age: 23,
  //   location: 'Hamburg'
  // }, (error, result) => {
  //   if (error) {
  //     return console.log('Unable to insert into Users-collection');
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  db.close();
});

