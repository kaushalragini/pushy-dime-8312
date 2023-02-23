import {
  legacy_createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";

// store reducers
import { CartReducer } from "./Cart/reducer";
import { ProductReducer } from "./Products/reducer";

// combining reducers
const root_reducer = combineReducers({
  productsManager: ProductReducer,
  cartManager: CartReducer,
});

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
export const store = legacy_createStore(
  root_reducer,
  composeEnhancers(applyMiddleware(thunk))
);
