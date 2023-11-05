<<<<<<< HEAD
const {describe} = require('mocha');
const {spec, request} = require ('pactum');
const { faker } = require('@faker-js/faker');

const randomJob=faker.person.jobTitle()

describe('Put test suite case', () => {

    request.setDefaultTimeout(10000);

    it('Update email of user 3', async () => {
        await spec ()
        .put('https://reqres.in/api/users/5')
        .withBody({
            "name": "newName",
            "job": randomJob
        })
        .expectStatus(200)
        .inspect()
    });
    
});
=======
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
>>>>>>> 648cd50aa0fd8a9237902027e8432877eb9c8c1c
