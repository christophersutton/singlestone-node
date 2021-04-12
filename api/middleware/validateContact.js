const createError = require("http-errors");
const hasValidKeys = require("../utils/hasValidKeys")

const validateContact = async (req, res, next) => {
  
  const contact = req.body;
  
  // Would add various validation methods here for production app
  try {
    if(Object.keys(contact).length === 0) throw new Error('No contact information submitted')
    if(!hasValidKeys(contact)) throw new Error('Contact submitted with invalid format')
    // for example:
    // if(!hasValidAddress(contact.address)) throw new Error('Invalid address')
    // if(!isUniqueEmail(contact.email)) throw new Error('Contact already exists')
    next();
  }
  
  catch (err) {
    next(createError(400,err.message));
  }
};

module.exports = validateContact;
