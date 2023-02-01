import { applyMiddleware, combineReducers, createStore , Middleware } from "redux"; //createStore est déprécié mais fonctionne qnd même
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import instalikeApi from "../instalikeApi";

const rootReducer = combineReducers({});

const middleware: Middleware[] = [];

middleware.push(thunk.withExtraArgument(instalikeApi));

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

export type RootState = ReturnType<typeof rootReducer>;

export default store;