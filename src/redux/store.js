import { configureStore } from "@reduxjs/toolkit";
import { sliceReducer } from "./slice.js";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "favouriteItems",
  version: 1,
  storage,
  whitelist: ["favItems"],
};

const persistedReducer = persistReducer(persistConfig, sliceReducer);

export const store = configureStore({
  reducer: {
    carsGallery: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  //   devTools: process.env.NODE_ENV !== 'production',
});

export let persistor = persistStore(store);

// export const store = configureStore({
//   reducer: {
//     carsGallery: sliceReducer,
//   },
// });
