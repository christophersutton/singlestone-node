var Datastore = require('nedb');
var seed = require('./seed')

// Only using in memory datastore for demo purposes
Contacts = new Datastore();
Contacts.insert(seed);

module.exports = Contacts