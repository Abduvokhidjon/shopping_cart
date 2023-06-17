//test for the homework online shopping
const createItem = require("./itemModule.js");
test("should create an item with the given properties", () => {
    const item = createItem("Item 1", 2, 10);
    expect(item.name).toBe("Item 1");
    expect(item.quantity).toBe(2);
    expect(item.price).toBe(10);
});


