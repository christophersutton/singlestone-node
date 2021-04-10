const Faker = require("faker");

const seed = [...new Array(40)].map((i, idx) => ({
  name: {
    first: Faker.name.firstName(),
    middle: Faker.name.firstName(),
    last: Faker.name.lastName(),
  },
  address: {
    street: Faker.address.streetAddress(),
    city: Faker.address.city(),
    state: Faker.address.state(),
    zip: Faker.address.zipCode(),
  },
  phone: [
    { number: Faker.phone.phoneNumberFormat(), type: "home" },
    { number: Faker.phone.phoneNumberFormat(), type: "mobile" },
  ],
  email: Faker.internet.email(),
}));

module.exports = seed;
