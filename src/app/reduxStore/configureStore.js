import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

//boilerplate code above to allow for thunk middleware to work with rootReducer


// export function configureStore() {
//     return createStore(rootReducer, composeWithDevTools())

//     //can only have one Store, but many Reducers, which act as a partial Store
//     //the rootReducer allows calling many Reducers at the same time and receiving a unified response
// }
