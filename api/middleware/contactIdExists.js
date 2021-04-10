const createError = require("http-errors");
const Contacts = require("../contacts/contactsModel");

const contactIdExists = async (req, res, next) => {
  const id = req.params.id;

  try {
    contact = await Contacts.findById(id);
    if (!contact[0]) throw new Error("Contact not found");
    res.locals.contact = contact;
    next();
  } catch (err) {
    next(createError(404, err.message));
  }
};

module.exports = contactIdExists;
