var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = { mongoose };

// var newUser = new User({
//   email: 'Jim@Bob.io'
// });
// var secondUser = new User({
//   email: '   '
// });

// newUser.save().then((doc) => {
//   console.log('Saved User.');
//   console.log(doc);
// }, (err) => {
//   console.log('Unable to save User.');
// });

// secondUser.save().then((doc) => {
//   console.log('Saved User.');
//   console.log(doc);
// }, (err) => {
//   console.log('Unable to save User.');
// });

// var newTodo = new Todo({
//   text: '    edit the new   videos'
// });

// var otherTodo = new Todo({
//   text: 'Practice singing',
//   completed: true,
//   completedAt: 060718
// });

//save() returns a promise
// newTodo.save().then((doc) => {
//   console.log('saved Todo');
//   console.log(doc);
// }, (e) => {
//   console.log('Unable to save Todo');
// });

// otherTodo.save().then((doc) => {
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//   console.log('Couldnt!');
// });