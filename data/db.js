const Datastore = require('nedb-promises');
const seed = require('./seed')

// Only using in memory datastore for demo purposes
let Contacts = Datastore.create();
Contacts.insert(seed);

module.exports = Contacts