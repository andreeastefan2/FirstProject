const { spec, request } = require("pactum");
const { describe } = require("mocha");
const { faker } = require("@faker-js/faker");

const randomJob = faker.person.jobType();
const randomName = faker.person.firstName();
const baseUrl = "https://reqres.in/";
const randomEmail = faker.internet.email({
  firstName: randomName,
  provider: "qa.com",
});

describe("Post test suite", () => {
  before(async () => {
    request.setDefaultTimeout(10000);
  });

  it("Register unsuccessful with random email ", async () => {
    console.log("The generated email is " + randomEmail + " for " + randomName);

    await spec()
      .post(baseUrl + "api/register")
      .withBody({
        email: randomEmail,
        password: "pistol",
      })
      .expectStatus(400);
  });

  it("Create user ", async () => {
    await spec()
      .post("https://reqres.in/api/users")
      .withBody({
        name: randomName,
        job: randomJob,
      })
      .expectStatus(201);
  });

  it("Register successful ", async () => {
    await spec()
      .post("https://reqres.in/api/register")
      .withBody({
        email: "eve.holt@reqres.in",
        password: "pistol",
      })
      .inspect()
      .expectStatus(200)
      .expectBodyContains("token");
  });

  it("Register unsuccessful with correct error ", async () => {
    await spec()
      .post("https://reqres.in/api/register")
      .withBody({
        email: "eve.holt@reqres.in",
      })
      .expectStatus(400)
      .expectBody({
        error: "Missing password",
      })
      .inspect();
  });
});
