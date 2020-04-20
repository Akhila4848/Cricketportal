const express = require("express");
const routers = express.Router();
const Signin=require("../models/signin");


  
  routers.get("/signin", (req, res, next) => {

  
    Signin.find(function(err, signin) {
      res.json(signin);
    });
  });
  //add student
  routers.post("/signin", (req, res, next) => {
  let newSignin = new Signin({
    user_name: req.body.user_name,
    password: req.body.password
  });
  
  
  newSignin.save((err,signin) => {
    if (err) {
      res.json({ msg: "Failed to add person" });
    } else {
      res.json({ msg: " person signed in successfully" });
    }
  });
  });
  // //delete or remove student
  routers.delete("/signin/:id", (req, res, next) => {
  //logic to delete student
  Signin.remove({ _id: req.params.id }, function(err, result) {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
  });
  // update books
  
  module.exports = routers;