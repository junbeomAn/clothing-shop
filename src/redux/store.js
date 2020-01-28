import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import rootReducer from './root-reducer';

import createSagaMiddleware from 'redux-saga';
import rootSaga from './root-saga';




const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') { // automatically sets env variable
  middlewares.push(logger);
} 

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store); //persisted version of store

export default { store, persistor }; 