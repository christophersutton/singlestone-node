const Contacts = require("../../data/db");

const findAll = async () => {
  return Contacts.find({});
};

const findById = async (id) => {
  return Contacts.findOne({ id: id });
};

const create = async (contact) => {
  return Contacts.insert(contact);
};

const update = (id, changes) => {};

const remove = async (id) => {};

module.exports = {
  findAll,
  findById,
  create,
  update,
  remove,
};
