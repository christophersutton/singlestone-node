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

const toFilter = [
  {
    _id: "doesnthavehome2",
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
        type: "cell",
      },
      {
        number: "784-325-1759",
        type: "mobile",
      },
    ],
    email: "Gretchen.Howe@gmail.com",
  },
  {
    _id: "doeshavehome1",
    name: {
      first: "Has",
      middle: "Home",
      last: "Phone",
    },
    address: {
      street: "7689 Monique Overpass",
      city: "South Maci",
      state: "New Mexico",
      zip: "68808",
    },
    phone: [
      {
        number: "788-626-9999",
        type: "home",
      },
      {
        number: "784-325-1111",
        type: "mobile",
      },
    ],
    email: "Gretchen.Howe@gmail.com",
  },
  {
    _id: "doeshavehome2",
    name: {
      first: "Also",
      middle: "Has",
      last: "HomePhone",
    },
    address: {
      street: "7689 Monique Overpass",
      city: "South Maci",
      state: "New Mexico",
      zip: "68808",
    },
    phone: [
      {
        number: "788-999-9999",
        type: "home",
      },
      {
        number: "784-325-1111",
        type: "mobile",
      },
    ],
    email: "Gretchen.Howe@gmail.com",
  },
  {
    _id: "doesnthavehome1",
    name: {
      first: "A",
      middle: "B",
      last: "C",
    },
    address: {
      street: "7689 Monique Overpass",
      city: "South Maci",
      state: "New Mexico",
      zip: "68808",
    },
    phone: [
      {
        number: "784-325-1759",
        type: "mobile",
      },
    ],
    email: "Gretchen.Howe@gmail.com",
  },
];

module.exports = {
  validContact,
  invalidContact,
  contactObj,
  toFilter,
};
