const createError = require("http-errors");

const validateContact = async (req, res, next) => {
  // validation stub for demo purposes, would want stronger
  // validation in prod-grade application.
  // Could use Typescript for basic format validation,
  // and may want to fetch out to 3rd party address validation etc

  const contact = req.body;
  if (!contact.name || !contact.email || !contact.address || !contact.phone) {
    next(createError(400));
  } else {
    next();
  }
};

module.exports = validateContact;
