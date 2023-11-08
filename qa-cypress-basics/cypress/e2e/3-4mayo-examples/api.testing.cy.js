/// <reference types ="cypress"/>

describe("API test suite", () => {
  it("Get comments", () => {
    cy.request({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/comments",
    }).should((response) => {
      expect(response.status).to.eql(200);
      expect(response.body[0]).has.property("email", "Eliseo@gardner.biz");
    });
  });

  it("Post comment", () => {
    const requestBody = {
      title: "foo",
      body: "bar",
    };
    cy.request({
      method: "POST",
      url: "https://jsonplaceholder.typicode.com/posts",
      body: requestBody,
    }).should((response) => {
      expect(response.status).to.eql(201);
    });
  });
});
