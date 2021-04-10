const Faker = require("faker");

const seed1 = [...new Array(10)].map((i, idx) => ({
  name: {
    first: Faker.name.firstName(),
    middle: Faker.name.firstName(),
    last: 'CommonLastName',
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

const seed2 = [...new Array(10)].map((i, idx) => ({
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
    { number: Faker.phone.phoneNumberFormat(), type: "work" },
    { number: Faker.phone.phoneNumberFormat(), type: "mobile" },
  ],
  email: Faker.internet.email(),
}));

const seed3 = [...new Array(10)].map((i, idx) => ({
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
    { number: Faker.phone.phoneNumberFormat(), type: "work" },
  ],
  email: Faker.internet.email(),
}));

seed = [].concat(seed1,seed2,seed3)

module.exports = seed;
