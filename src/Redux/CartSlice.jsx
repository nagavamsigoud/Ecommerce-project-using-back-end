import { createSlice } from "@reduxjs/toolkit"


const CartSlice = createSlice({
  name: "CartSlice",
  initialState: {
    cart: [],
    totalItems: 0,
    totalAmount: 0,
    shippingFee: 50000
  },
  reducers: {
    addToCart: (state, action) => {
      const { _id, colors, amount, product } = action.payload;
      console.log("in cartslice", _id, colors, amount, product);

      const existingItem = state.cart.find(
        (item) => item._id === _id && item.colors === colors
      );

      if (existingItem) {

        existingItem.amount += amount;
        if (existingItem.amount > existingItem.max) {
          existingItem.amount = existingItem.max;
        }
      } else {
        state.cart.push({
          _id,
          name: product.name,
          colors: colors,
          amount,
          image: product.image,
          price: product.price,
          max: product.stock,
        });
      }

      // Recalculate totals for showing total items in cart
      state.totalItems = state.cart.reduce((sum, item) => sum + item.amount, 0);
      state.totalAmount = state.cart.reduce((sum, item) => sum + item.price * item.amount, 0);

    },
    removeItem: (state, action) => {
      const { _id, colors } = action.payload;

      // Filter out the item to remove
      state.cart = state.cart.filter(
        (item) => !(item._id === _id && item.colors === colors)
      );

      // Recalculate totals
      state.totalItems = state.cart.reduce((sum, item) => sum + item.amount, 0);
      state.totalAmount = state.cart.reduce((sum, item) => sum + item.price * item.amount, 0);
    },
    clearCart: (state) => {
      state.cart = [];
      state.totalItems = 0;
      state.totalAmount = 0;
    },
    increaseQuantity: (state, action) => {
      const { _id, colors } = action.payload;
      const item = state.cart.find(item => item._id === _id && item.colors === colors);
      if (item && item.amount < item.max) {
        item.amount += 1;
      }

      // update totals
      state.totalItems = state.cart.reduce((sum, item) => sum + item.amount, 0);
      state.totalAmount = state.cart.reduce((sum, item) => sum + item.price * item.amount, 0);
    },

    decreaseQuantity: (state, action) => {
      const { _id, colors } = action.payload;
      const item = state.cart.find(item => item._id === _id && item.colors === colors);
      if (item && item.amount > 1) {
        item.amount -= 1;
      }

      // update totals
      state.totalItems = state.cart.reduce((sum, item) => sum + item.amount, 0);
      state.totalAmount = state.cart.reduce((sum, item) => sum + item.price * item.amount, 0);
    },


  },

  extraReducers: (builder) => {

  }

});
export const { addToCart, removeItem, clearCart, increaseQuantity, decreaseQuantity } = CartSlice.actions;
export default CartSlice.reducer;

