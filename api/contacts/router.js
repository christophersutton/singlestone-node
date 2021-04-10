var express = require("express");
var router = express.Router();
var Contacts = require("./model");
var validateContact = require("../middleware/validateContact");

router.get("/", function (req, res) {
  Contacts.findAll()
    .then((docs) => {
      res.status(200).json(docs);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get("/:id", function (req, res) {

  Contacts.findById(req.params.id)
    .then((docs) => {
      if (!docs[0]) {
        res.status(404).json({ message: "Contact not found" });
      } else {
        res.status(200).json(docs[0]);
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.post("/", validateContact, function (req, res) {
  Contacts.create(req.body)
    .then((newDoc) => {
      res.status(201).json({ message: "Contact created", contact: newDoc });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
