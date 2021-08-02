const Product = require("../src/js/Product");

describe("Product", () => {
  
  //1.
  test("Confirm the parameters correctly set three properties on the class", function () {
    //Arrange
    let apples = new Product("apples", 1, false);

    //Assert
    expect(apples).toEqual({ name: "apples", price: 1, taxable: false });
  });

  test("Confirm the parameters correctly set three properties on the class", function () {
    //Arrange
    let oranges = new Product("oranges", 1, false);

    //Assert
    expect(oranges).toEqual({ name: "oranges", price: 1, taxable: false });
  });

  test("Confirm the parameters correctly set three properties on the class", function () {
    //Arrange
    let snickers = new Product("snickers", 1, true);

    //Assert
    expect(snickers).toEqual({ name: "snickers", price: 1, taxable: true });
  });

  //2.

  //Given a Product with taxable true, getPriceWithTax returns the price + 10%.
  //Remember to use toBeCloseTo with floating point numbers.
  //(Write two test cases with different prices.)
  test("If taxable is true, return the price + 10% for toys", function () {
    //Arrange
    let toys = new Product("Toys", 15, true);

    //Act
    // Toys.taxable ? price*1.1 : null;

    //Assert
    expect(toys.getPriceWithTax()).toBeCloseTo(16.5);
  });
  
  test("If taxable is true, return the price + 10% for laptop", function () {
    //Arrange
    let lapTop = new Product("Laptop", 2000, true);

    //Assert
    expect(lapTop.getPriceWithTax()).toBeCloseTo(2200);
  });

  //3.

  //Given a Product with taxable false, getPriceWithTax returns just the price. (Write two test cases with different prices.)

  test("If taxable is false, return the price for asparagus", function (){

    //Arrange
    let asparagus = new Product("asparagus", 6, false);

    //Assert
    expect(asparagus.getPriceWithTax()).toEqual(6);
  })
  test("If taxable is false, return the price for lemon", function (){

    //Arrange
    let lemon = new Product("lemon", 1, false);

    //Assert
    expect(lemon.getPriceWithTax()).toEqual(1);
  })


});
