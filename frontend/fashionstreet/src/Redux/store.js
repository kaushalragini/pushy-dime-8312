import {
  legacy_createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { adminProductsReducer } from "./AdminProducts/AdminProducts.reducer";

// store reducers
import { CartReducer } from "./Cart/reducer";
import { feedbackReducer } from "./Feedback/Feedback.reducer";
import { orderedProductsReducer } from "./OrderedProducts/OrderedProducts.reducer";
import { ProductReducer } from "./Products/reducer";
import { usersReducer } from "./Users/Users.reducer";
import { ratingsReducer } from "./Ratings/Ratings.reducer";
import { authReducer } from "./Auth/Auth.reducer";
import { AdminStatsReducer } from "./AdminStats/AdminStats.reducer";

// combining reducers
const root_reducer = combineReducers({
  productsManager: ProductReducer,
  cartManager: CartReducer,
  adminProductsManager: adminProductsReducer,
  usersManager: usersReducer,
  orderedProductsManager: orderedProductsReducer,
  ratingsManager: ratingsReducer,
  feedbackManager: feedbackReducer,
  authManager: authReducer,
  adminStatsManager: AdminStatsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(
  root_reducer,
  composeEnhancers(applyMiddleware(thunk))
);
