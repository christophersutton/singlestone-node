const generateCallList = (docs) => {
  filtered = docs.filter((e) => {
    return e.phone.some((phone) => Object.values(phone).includes("home"));
  });

  formatted = filtered.map((contact) => {
    phone = contact.phone.find((p) => p.type === "home");
    formatted = {};
    formatted.name = contact.name;
    formatted.phone = phone.number;
    return formatted;
  });

  formatted.sort((a, b) => {
    if (a.name.last === b.name.last) {
      return a.name.first < b.name.first ? -1 : 1;
    } else {
      return a.name.last < b.name.last ? -1 : 1;
    }
  });

  return formatted;
};

module.exports = generateCallList;
