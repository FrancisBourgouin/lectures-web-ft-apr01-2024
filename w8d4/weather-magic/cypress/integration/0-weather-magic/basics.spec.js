/// <reference types="cypress" />

describe("Basic tests for Weather Magic", () => {
  it("loads the page properly", () => {
    cy.visit("/");

    cy.get("header > h1").should("exist");
  });
});

describe("Weather magic user stories", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should be able to go to our website, type in a city, and retrieve the weather for it", () => {
    // Visiting from beforeEach
    cy.get("header > h1").should("exist");

    cy.get("section.CurrentWeather").should("not.exist");

    cy.get('.CityForm > input').type("Montréal");
    cy.get('.CityForm > button').click()

    cy.get("section.CurrentWeather").should("exist");


  });
  it("should be able to quickly see the weather from previously searched cities, and see the weather for them", () => {
    // Visiting from beforeEach

    cy.get('.CityForm > input').type("Montréal");
    cy.get('.CityForm > button').click()

    cy.get('.CityForm > input').type("Toronto");
    cy.get('.CityForm > button').click()

    cy.get('.CityForm > input').type("Vancouver");
    cy.get('.CityForm > button').click()

    cy.get("ul li").should("have.length", 3)

    cy.get("ul li:first-of-type button").click()

    cy.contains('The conditions are').should("contain.text","Montréal")


  });
  it("should be able to search for the same city multiple times, without creating additional entries in the history", () => {
    // Visiting from beforeEach
    cy.get('.CityForm > input').type("Montréal");
    cy.get('.CityForm > button').click()

    cy.get('.CityForm > input').type("Toronto");
    cy.get('.CityForm > button').click()

    cy.get('.CityForm > input').type("Montréal");
    cy.get('.CityForm > button').click()

    cy.get("ul li").should("have.length", 2)

    cy.get("ul li:first-of-type button").click()

    cy.contains('The conditions are').should("contain.text","Montréal")
  });
});
