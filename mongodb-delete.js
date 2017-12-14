const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect MongoDB Server');
  }

  console.log('Connected to MongoDB Server...');

  // deleteMany
  // db.collection('Todos').deleteMany({text: "Eat Lunch with Hanna"}).then((result) => {
  //   console.log(result);
  // });
  //another example of delteMany
  // db.collection('Users').deleteMany({name: "Andrew"}).then((result) => {
  //   console.log(result);
  // });

  // deleteOne
  // db.collection('Todos').deleteOne({text: "Eat Lunch with Hanna"}).then((result) => {
  //   console.log(result);
  // });

  // findOneandDelete
  // db.collection('Todos').findOneAndDelete({completed: true}).then((result) => {
  //   console.log(result);
  // });
  //another example of findOneAndDelete
  db.collection('Users').findOneAndDelete({_id: new ObjectID('5a32d984464dd894b4d64fe0')}).then((results) => {
    console.log(JSON.stringify(results, undefined, 2));
  });

  //db.close();
});