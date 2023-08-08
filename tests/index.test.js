const { add, subtract, multiply, divide } = require("../index");

describe("test calculator", () => {
  test("test add", () => {
    expect(add(2, 4)).toEqual(6);
  });
  test("test subtract", () => {
    expect(subtract(2, 4)).toEqual(-2);
  });
  test("test multiply", () => {
    expect(multiply(2, 4)).toEqual(8);
  });
  test("test divide", () => {
    expect(divide(4, 2)).toEqual(2);
  });
});
