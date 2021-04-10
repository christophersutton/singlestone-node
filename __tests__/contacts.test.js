const request = require("supertest");
const express = require("express");
const Contacts = require("../api/contacts/contactsModel");
const router = require("../api/contacts/contactsRouter");
const seed = require("../data/seed");
const { validContact, invalidContact, contactObj } = require("../data/testData");
const server = express();
server.use(express.json());

jest.mock("../api/contacts/contactsModel");

describe("contacts endpoints", () => {
  beforeEach(() => {
    server.use("/contacts", router);
    jest.clearAllMocks();
  });

  describe("GET /contacts", () => {
    it("should return 200", async () => {
      Contacts.findAll.mockResolvedValue(seed);
      const res = await request(server).get("/contacts");

      expect(res.status).toBe(200);
      expect(res.body.length).toBe(30);
      expect(Contacts.findAll.mock.calls.length).toBe(1);
    });
  });

  describe("GET /contacts/call-list", () => {
    it("should return 200", async () => {
      Contacts.findAll.mockResolvedValue(seed);
      const res = await request(server).get("/contacts/call-list");

      expect(res.status).toBe(200);
      // after filtering out contacts without a home number, length should be 20
      expect(res.body.length).toBe(20);
      expect(Contacts.findAll.mock.calls.length).toBe(1);
    });
  });

  describe("GET /contacts/:id", () => {
    it("should return 200 when contact found", async () => {
      Contacts.findById.mockResolvedValue([contactObj]);
      const res = await request(server).get("/contacts/0MhDb7f6MycNgctU");

      expect(Contacts.findById.mock.calls.length).toBe(1);
      expect(res.status).toBe(200);
    });

    it("should return 404 when contact not found", async () => {
      Contacts.findById.mockResolvedValue([]);
      const res = await request(server).get("/contacts/d376d681ca93614");

      expect(Contacts.findById.mock.calls.length).toBe(1);
      expect(res.status).toBe(404);
    });
  });

  describe("POST new contact", () => {
    it("should return 201 created when valid contact object posted", async () => {
      Contacts.create.mockResolvedValue(validContact);
      const res = await request(server).post("/contacts").send(validContact);

      expect(Contacts.create.mock.calls.length).toBe(1);
      expect(res.status).toBe(201);
      expect(res.body.message).toMatch("Contact created");
      expect(res.body.contact.name.first).toMatch("Samantha");
    });

    it("should return 400 error when invalid contact object posted", async () => {
      Contacts.create.mockResolvedValue(invalidContact);
      const res = await request(server).post("/contacts").send(invalidContact);

      // middleware should intercept before actually hitting create, thus 0 mocks
      expect(Contacts.create.mock.calls.length).toBe(0);
      expect(res.status).toBe(400);
    });
  });

  describe("PUT update to contact", () => {
    it("should return 200 when contact is updated", async () => {
      Contacts.findById.mockResolvedValue([validContact]);
      Contacts.update.mockResolvedValue(validContact);

      const res = await request(server)
        .put("/contacts/d376de0577681ca93614")
        .send(validContact);

      expect(Contacts.findById.mock.calls.length).toBe(1);
      expect(Contacts.update.mock.calls.length).toBe(1);
      expect(res.status).toBe(200);
      expect(res.body.contact.name.first).toBe("Samantha");
    });
  });

  describe("DELETE contact", () => {
    it("should return 200 when contact is deleted", async () => {
      Contacts.remove.mockResolvedValue(1);
      const res = await request(server).delete(
        "/contacts/d376de0577681ca93614"
      );

      expect(Contacts.remove.mock.calls.length).toBe(1);
      expect(res.status).toBe(200);
      expect(res.body.message).toMatch(/d376de0577681ca93614/);
    });
  });
});
