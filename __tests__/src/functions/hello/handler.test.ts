import { main } from "@functions/hello/handler";
import ctx from "../../../fixtures/mockCtx";

describe("dd", () => {
  it("should", async () => {
    const response = await main({ body: { name: "John!" } }, ctx);
    expect(response.statusCode).toBe(200);
    expect(response.body).toBe('{"message":"Bzzzt John!!"}');
  });
});

const { MongoClient } = require("mongodb");

describe("insert", () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect(global.__MONGO_URI__, {
      useNewUrlParser: true,
    });
    db = await connection.db(global.__MONGO_DB_NAME__);
  });

  afterAll(async () => {
    await connection.close();
    // await db.close(); look for docu why
  });

  it("should insert a doc into collection", async () => {
    const users = db.collection("users");

    const mockUser = { _id: "some-user-id", name: "John" };
    await users.insertOne(mockUser);

    const insertedUser = await users.findOne({ _id: "some-user-id" });
    expect(insertedUser).toEqual(mockUser);
  });
});
