import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import { AsyncStorage } from "react-native";
import rootReducer from "../reducers";
import {
  createLogger,
} from "redux-logger";

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__});

const persistConfig = {
  key: "root",
  blacklist: [],
  whitelist: ["auth"],
  keyPrefix: 'DeepScanner',
  storage: AsyncStorage
};
const middlewares = [
  loggerMiddleware
];
const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  let store = createStore(persistedReducer, composeWithDevTools(
    applyMiddleware(...middlewares),
  ));
  let persistor = persistStore(store);
  return { store, persistor };
};
