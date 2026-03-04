import { createSlice } from "@reduxjs/toolkit";

const loadFromStorage = (key, defaultValue) => {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : defaultValue;
  }
  return defaultValue;
};

const initialState = {
  items: loadFromStorage("@coffee-delivery:cart-1.0.0", []),
  orderInfo: loadFromStorage("@coffee-delivery:order-1.0.0", null),
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id,
      );
      if (itemIndex >= 0) {
        state.items[itemIndex].quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
      localStorage.setItem(
        "@coffee-delivery:cart-1.0.0",
        JSON.stringify(state.items),
      );
    },

    updateQuantity: (state, action) => {
      const { id, type } = action.payload;
      const item = state.items.find((i) => i.id === id);
      if (item) {
        if (type === "increase") item.quantity += 1;
        else if (type === "decrease" && item.quantity > 1) item.quantity -= 1;
      }
      localStorage.setItem(
        "@coffee-delivery:cart-1.0.0",
        JSON.stringify(state.items),
      );
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem(
        "@coffee-delivery:cart-1.0.0",
        JSON.stringify(state.items),
      );
    },

    confirmOrder: (state, action) => {
      state.orderInfo = action.payload;
      localStorage.setItem(
        "@coffee-delivery:order-1.0.0",
        JSON.stringify(action.payload),
      );
    },

    clearCart: (state) => {
      state.items = [];
      localStorage.removeItem("@coffee-delivery:cart-1.0.0");
    },
  },
});

export const {
  addToCart,
  updateQuantity,
  removeFromCart,
  clearCart,
  confirmOrder,
} = cartSlice.actions;

export default cartSlice.reducer;
