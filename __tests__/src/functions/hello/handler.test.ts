import { main } from "@functions/hello/handler";
import ctx from "../../../fixtures/mockCtx";

describe("dd", () => {
  it("should", async () => {
    const response = await main({ body: { name: "John!" } }, ctx);
    expect(response.statusCode).toBe(200);
    expect(response.body).toBe('{"message":"Bzzzt John!!"}');
  });
});
