const express = require("express");
const router = express.Router();
const library = require("../models/librarys");

//retrieve student data
router.get("/librarys", (req, res, next) => {
  library.find(function(err, library) {
    res.json(library);
  });
});
//add student
router.post("/library", (req, res, next) => {
  let newlibrary = new library({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    doj: req.body.doj,
    bday: req.body.bday,
    type: req.body.type
  });

  
  newlibrary.save((err, library) => {
    if (err) {
      res.json({ msg: "Failed to add student" });
    } else {
      res.json({ msg: " student added successfully" });
    }
  });
});
//delete or remove student
router.delete("/library/:id", (req, res, next) => {
  //logic to delete student
  library.remove({ _id: req.params.id }, function(err, result) {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

module.exports = router;
