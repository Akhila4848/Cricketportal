const express = require("express");
const routers = express.Router();
// const book = require("../models/books");
const Book = require("../models/books");

//retrieve student data
routers.get("/books", (req, res, next) => {

  
  Book.find(function(err, books) {
    res.json(books);
  });
});
//add student
routers.post("/book", (req, res, next) => {
  let newBook = new Book({
    p_name: req.body.p_name,
    last_name: req.body.last_name,
    password: req.body.password,
    repno:req.body.repno
   
  });

  
  newBook.save((err,book) => {
    if (err) {
      res.json({ msg: "Failed to add book" });
    } else {
      res.json({ msg: " book added successfully" });
    }
  });
});
// //delete or remove student
routers.delete("/book/:id", (req, res, next) => {
  //logic to delete student
  Book.remove({ _id: req.params.id }, function(err, result) {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});
// update books
routers.put("/book/:id&:repno", (req, res, next) => {
  //logic to delete student
  Book.updateOne({ _id: req.params.id },{$set:{'repno':req.params.usn}},{new:true}, function(err, result) {
    if (err) {
      res.json(err);
    } else {
      res.send("updated");
      console.log("updated");
    }
  });
});
module.exports = routers;
