const { spec, request } = require("pactum");
const getUsersSchema = require("../data/response/get-users-schema.json");

describe("GET test suite", () => {
  before(async () => {
    request.setDefaultTimeout(10000);
  });

  it("List users", async () => {
    await spec()
      .get("https://reqres.in/api/users")
      .expectStatus(200)
      .expectJsonSchema(getUsersSchema)
      .inspect();
  });

  it("Single user", async () => {
    await spec()
      .get("https://reqres.in/api/users?id=5")
      .expectStatus(200)
      .expectResponseTime(100)
      .inspect();
  });
  it("Single user not found", async () => {
    await spec().get("https://reqres.in/api/users/23").expectStatus(404);
  });

  it("List resource", async () => {
    await spec()
      .get("https://reqres.in/api/unknown")
      .inspect()
      .expectBodyContains("per_page");
  });
});
