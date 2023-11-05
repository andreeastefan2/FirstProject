const { spec, request } = require("pactum");
const { faker } = require("@faker-js/faker");

const randomJob = faker.person.jobTitle();

describe("Put test suite case", () => {
  request.setDefaultTimeout(10000);

  it("Update email of user 3", async () => {
    await spec()
      .put("https://reqres.in/api/users/5")
      .withBody({
        name: "newName",
        job: randomJob,
      })

      .expectStatus(200)
      .inspect();
  });
});
