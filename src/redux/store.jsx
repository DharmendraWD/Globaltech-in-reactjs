import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import { productDetailReducer } from "./productDetailSlice"; // Named import
import teamReducer from "./ourTeamslice";
import clientsReducer from "./clientsSlice"



const store = configureStore({
  reducer: {
    product: productReducer,
    productDetails: productDetailReducer,
    team: teamReducer,
    clients: clientsReducer,
  },
});

export default store;
