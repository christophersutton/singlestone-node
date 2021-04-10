const Datastore = require('nedb-promises');
const seed = require('./seed')

// Only using in memory datastore for demo purposes
let Contacts = new Datastore();
Contacts.insert(seed);

module.exports = Contacts