import { applyMiddleware, combineReducers, createStore, Middleware } from 'redux'; //createstore est déprécié, mais fonctionne quand même
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import instalikeApi from '../instalikeApi';
import authReducer from './auth/reducer';
import feedReducer from './feed/reducer';



const rootReducer = combineReducers({
    auth: authReducer,
    feed: feedReducer,
});  

const middleware: Middleware[] = [];

middleware.push(thunk.withExtraArgument(instalikeApi));

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

export type RootState = ReturnType<typeof rootReducer>;

export default store;
