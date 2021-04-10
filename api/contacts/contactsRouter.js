var express = require("express");
var router = express.Router();
var Contacts = require("./contactsModel");
var validateContact = require("../middleware/validateContact");
var contactIdExists = require("../middleware/contactIdExists");
var generateCallList = require("../utils/generateCallList");

router.get("/", function (req, res) {
  Contacts.findAll()
    .then((docs) => {
      res.status(200).json(docs);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get("/call-list", function (req, res) {
  Contacts.findAll()
    .then((docs) => {
      const callList = generateCallList(docs);
      res.status(200).json(callList);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get("/:id", contactIdExists, function (req, res) {
  res.status(200).json(res.locals.contact);
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

router.put("/:id", contactIdExists, validateContact, function (req, res) {
  Contacts.update(req.params.id, req.body)
    .then((updatedDoc) => {
      res.status(200).json({ message: "Contact updated", contact: updatedDoc });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.delete("/:id", contactIdExists, function (req, res) {
  Contacts.remove(req.params.id)
    .then((numRemoved) => {
      res
        .status(200)
        .json({
          message: `${numRemoved} contact removed with id: ${req.params.id}`,
        });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
