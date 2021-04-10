const invalidContact = {
  name: {
    first: "Samantha",
    middle: "Glenda",
    last: "Howell",
  },
  phone: [
    {
      number: "788-626-7677",
      type: "home",
    },
    {
      number: "784-325-1759",
      type: "mobile",
    },
  ],
  email: "Gretchen.Howe@gmail.com",
};

const validContact = {
  name: {
    first: "Samantha",
    middle: "Glenda",
    last: "Howell",
  },
  address: {
    street: "7689 Monique Overpass",
    city: "South Maci",
    state: "New Mexico",
    zip: "68808",
  },
  phone: [
    {
      number: "788-626-7677",
      type: "home",
    },
    {
      number: "784-325-1759",
      type: "mobile",
    },
  ],
  email: "Gretchen.Howe@gmail.com",
};

const contactObj = {
  _id: "0MhDb7f6MycNgctU",
  name: {
    first: "Samantha",
    middle: "Glenda",
    last: "Howell",
  },
  address: {
    street: "7689 Monique Overpass",
    city: "South Maci",
    state: "New Mexico",
    zip: "68808",
  },
  phone: [
    {
      number: "788-626-7677",
      type: "home",
    },
    {
      number: "784-325-1759",
      type: "mobile",
    },
  ],
  email: "Gretchen.Howe@gmail.com",
};

module.exports = {
  validContact,
  invalidContact,
  contactObj
};
