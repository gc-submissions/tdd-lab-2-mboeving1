const Cart = require("../src/js/Cart");
const Product = require("../src/js/Product");

describe("Cart", () => {
  //1.
  test("Confirm that the constructor correctly sets the items property to an empty array. (Remember to use toEqual instead of toBe when comparing arrays or objects.)", () => {
    //Arrange

    let cart = new Cart();

    //Assert
    expect(cart.items).toEqual([]);
  });

  //2.
  test("calling add once adds one product to the array.", function () {
    //Arrange
    let cart = new Cart();
    let iPhone = new Product("iPhone", 1200, true);

    //Act
    cart.add(iPhone);

    //Assert
    expect().toEqual();
  });

  //3.
  {
    //Arrange
    let cart = new Cart();
    let watch = new Product("watch", 500, true);
    let tv = new Product("tv", 1000, true);

    //Act
    cart.add(watch);
    cart.add(tv);

    test("Calling add twice leaves a total of two Products in the items array.", () => {
      //Assert
      expect(cart.items.length).toBe(2);
    });
    test(" Make sure the correct product objects were added.", () => {
      //Assert
      expect(cart.items[0]).toEqual({
        name: "watch",
        price: 500,
        taxable: true,
      });
    });
    test(" Make sure the correct product objects were added.", () => {
      //Assert
      expect(cart.items[1]).toEqual({ name: "tv", price: 1000, taxable: true });

      //4.
    });
    test("getItemCount returns the length of the items array.", () => {
      //Assert
      expect(cart.getItemCount()).toBe(2);
    });
    test("getItemCount returns the length of the items array...added another watch", () => {
      //Act
      cart.add(watch);
      //Assert

      expect(cart.getItemCount()).toBe(3);
    });

    //5.
    test("getTotalBeforeTax returns the sum of the price of all Products in the items array.", () =>{
      expect(cart.getTotalBeforeTax()).toBeCloseTo(2000);
    });
    
    test("getTotalBeforeTax returns the sum of the price of all Products in the items array...added fruit", () =>{
       //Arrange
       let fruit = new Product("fruit", 2, false);
      //Act
       cart.add(fruit);
       //Assert
       expect(cart.getTotalBeforeTax()).toBeCloseTo(2002);
    });
  //6.
  // test("getTotalWithTax returns the sum of the getPriceWithTax() method of all Products in the items array", () => {
  //    expect(cart.getTotalWithTax()).toBeCloseTo(2200);
  // })
  
  //7.
  test("getTax returns the difference between getTotalWithTax and getTotalBeforeTax", () => {
    expect(cart.getTax()).toBeCloseTo(200);//return NaN because getTotalWithTax is returning a string instead of a number??
  })
  }
});
