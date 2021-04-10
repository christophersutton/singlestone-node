var express = require("express");
var router = express.Router();
var Contacts = require("./model");

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
  const id = Number(req.params.id);
  Contacts.findById(id)
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

module.exports = router;
