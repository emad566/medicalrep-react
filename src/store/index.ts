import { createStore, applyMiddleware, compose } from "redux";

// middlewares
import createSagaMiddleware from "redux-saga";

// Import custom components
import reducers from "../redux";

const sagaMiddleware = createSagaMiddleware();

/* Create a Redux store that holds the app state. */

const composeEnhancers = compose;

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));
const store = createStore(reducers, enhancer);
// sagaMiddleware.run(rootSagas);

export default store;
