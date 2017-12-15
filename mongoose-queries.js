const { ObjectID } = require('mongodb');
const { mongoose } = require('./server/db/mongoose');
const { Todo } = require('./server/models/todo');
const { User } = require('./server/models/user');


var id = '5a32f23db14e72a841a45bea';


if (!ObjectID.isValid(id)) {
  console.log('ID not found!');
}

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });

// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById({
//   _id: id
// }).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found!');
//   }
//   console.log('Todo by Id', todo);
// }).catch((e) => {
//   console.log(e);
// });

User.findById({
  _id: id
}).then((user) => {
  if (!user) {
    return console.log('User not found!');
  }
  console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => {
  console.log(e);
});