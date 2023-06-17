// import the files here
const cartModule = require("./cartModule.js");
const createItem = require("./itemModule.js");
describe("Cart Module", () => {
    let cart;

    beforeEach(() => {
        cart = cartModule.createEmptyCart();
    });

    test("should add items to the cart", () => {
        const item1 = createItem("Item 1", 2, 10);
        const item2 = createItem("Item 2", 1, 5);
        cartModule.addToCart(cart, item1);
        cartModule.addToCart(cart, item2);
        expect(cart.length).toBe(2);
        expect(cart[0].name).toBe("Item 1");
        expect(cart[0].quantity).toBe(2);
        expect(cart[0].price).toBe(10);
        expect(cart[1].name).toBe("Item 2");
        expect(cart[1].quantity).toBe(1);
        expect(cart[1].price).toBe(5);
    });

    test("should calculate the total cost of items in the cart", () => {
        const item1 = createItem("Item 1", 2, 10);
        const item2 = createItem("Item 2", 1, 5);
        cartModule.addToCart(cart, item1);
        cartModule.addToCart(cart, item2);
        const total = cartModule.calculateTotal(cart);
        expect(total).toBe(25);
    });

    test("should remove an item from the cart", () => {
        const item1 = createItem("Item 1", 2, 10);
        const item2 = createItem("Item 2", 1, 5);
        cartModule.addToCart(cart, item1);
        cartModule.addToCart(cart, item2);
        cartModule.removeFromCart(cart, "Item 2");
        expect(cart.length).toBe(1);
        expect(cart[0].name).toBe("Item 1");
    });

    test("should update the quantity of an item in the cart", () => {
        const item1 = createItem("Item 1", 2, 10);
        cartModule.addToCart(cart, item1);
        cartModule.updateQuantity(cart, "Item 1", 5);
        expect(cart[0].quantity).toBe(5);
    });
});