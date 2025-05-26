import { configureStore } from "@reduxjs/toolkit";

import accountReducer from "./features/accounts/state/accountSlice";
import customerReducer from "./features/customers/state/customerSlice";

const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable check for non-serializable data
    }),
});

export default store;
