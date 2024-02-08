import Product from "./product";

describe("Unit tests for notifications with product", () => {
  it("should create errors", () => {
    expect(() => {
      const product = new Product("", "Product 1", 100);
    }).toThrow("product: Id is required");

    expect(() => {
      const product = new Product("", "", 100);
    }).toThrow("product: Name is required");

    expect(() => {
      const product = new Product("", "", -1);
    }).toThrow("product: Price must be greater than zero");

    expect(() => {
      const product = new Product("", "", 100);
    }).toThrow("product: Id is required,product: Name is required");

    expect(() => {
      const product = new Product("", "", -1);
    }).toThrow("product: Id is required,product: Name is required,product: Price must be greater than zero");
  });
});
