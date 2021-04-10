const Contacts = require("../../data/db");

const findAll = () => {
  return Contacts.find({});
};

const findById = (id) => {
  return Contacts.find({ _id: id });
};

const create = (contact) => {
  return Contacts.insert(contact);
};

const update = (id, changes) => {
  return Contacts.update({ _id: id }, changes, { returnUpdatedDocs: true });
};

const remove = (id) => {
  return Contacts.remove({ _id: id },{});
};

module.exports = {
  findAll,
  findById,
  create,
  update,
  remove,
};
