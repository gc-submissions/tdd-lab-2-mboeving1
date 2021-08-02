const {formatCurrency, getCoins} = require("../src/js/money-functions");


describe("formatCurrency", () => {
  test("0 will return $0.00", () => {
    expect(formatCurrency(0)).toBe("$0.00");
  });

  test("1 will return $1.00", () => {
    expect(formatCurrency(1)).toBe("$1.00");
  })
  
  test("1.5 will return $1.50", () => {
    expect(formatCurrency(1.5)).toBe("$1.50");
  })

  test("0.01 will return $0.01", () => {
    expect(formatCurrency(0.01)).toBe("$0.01");
  })
  test("527.6789 will return $527.6789", () => {
    expect(formatCurrency(527.6789)).toBe("$527.68");
  })
  test("-1 will return -$1.00", () => {
    expect(formatCurrency(-1)).toBe("-$1.00");
  })
  test("-56.71 will return -$56.71", () => {
    expect(formatCurrency(-56.71)).toBe("-$56.71");
  })
  test("-5 will return -$5.00", () => {
    expect(formatCurrency(-5)).toBe("-$5.00");
  })

  
});


/*
32 cents produces: quarters: 1, dimes: 0, nickels: 1, pennies: 2.
10 cents produces: quarters: 0, dimes: 1, nickels: 0, pennies: 0.
27 cents produces: quarters: 1, dimes: 0, nickels: 0, pennies: 2.
68 cents produces: quarters: 2, dimes: 1, nickels: 1, pennies: 3.

*/

describe("getCoins", () => {
  test("32 cents produces: quarters: 1, dimes: 0, nickels: 1, pennies: 2.", () => {
    expect(getCoins(32)).toStrictEqual({quarters: 1, dimes: 0, nickels: 1, pennies: 2});
  });
  test("10 cents produces: quarters: 0, dimes: 1, nickels: 0, pennies: 0.", () => {
    expect(getCoins(10)).toStrictEqual({quarters: 0, dimes: 1, nickels: 0, pennies: 0});
  });
  test("27 cents produces: quarters: 1, dimes: 0, nickels: 0, pennies: 2.", () => {
    expect(getCoins(27)).toStrictEqual({quarters: 1, dimes: 0, nickels: 0, pennies: 2});
  });
  test("68 cents produces: quarters: 2, dimes: 1, nickels: 1, pennies: 3", () => {
    expect(getCoins(68)).toStrictEqual({quarters: 2, dimes: 1, nickels: 1, pennies: 3});
  });


});