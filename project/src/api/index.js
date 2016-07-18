'use strict';

var express = require('express');
// var Todo = require('../models/todo');

var router = express.Router();

router.get('/', function(req, res){
  // console.log("wooho1")
  // console.log(req.body);
  // console.log(req.files);
  // res.json({success: true});
  res.send('GET request to the homepage');
});

router.post('/', function(req, res) {
  res.send('POST request to the homepage');
  console.log("wooho2");
  // Todo.find({}, function(err, todos) {
  //   if (err) {
  //     return res.status(500).json({ message: err.message });
  //   }
  //   res.json({ todos: todos });
  // });
});
//
// router.post('/upload', function (req, res) {
//   res.send('upload');
// });

router.get('/upload', function(req, res){
  res.send("<h1>Bertico Hermoso!</h1>");
  // console.log(req.body);
  // console.log(req.files);
  // res.json({success: true});
});

// router.post('/todos', function(req, res) {
//   var todo = req.body;
//   Todo.create(todo, function(err, todo) {
//     if (err) {
//       return res.status(500).json({ err: err.message });
//     }
//     res.json({ 'todo': todo, message: 'Todo Created' });
//   });
// });
//
// router.put('/todos/:id', function(req, res) {
//   var id = req.params.id;
//   var todo = req.body;
//   if (todo && todo._id !== id) {
//     return res.status(500).json({ err: "Ids don't match!" });
//   }
//   Todo.findByIdAndUpdate(id, todo, {new: true}, function(err, todo) {
//     if (err) {
//       return res.status(500).json({ err: err.message });
//     }
//     res.json({ 'todo': todo, message: 'Todo Updated' });
//   });
// });


// TODO: Add DELETE route to remove existing entries

module.exports = router;
