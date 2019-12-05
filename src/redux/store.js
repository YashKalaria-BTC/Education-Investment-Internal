import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {logger} from 'redux-logger';
import {persistStore, persistReducer} from 'redux-persist';
import storage from '@react-native-community/async-storage';
// import storage from 'redux-persist/es/storage'; // defaults to localStorage for web and AsyncStorage for react-native

const rootReducer = () => {
  return null;
};

export default (initialState = {}) => {
  const persistConfig = {
    key: 'education_investment',
    storage,
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const middleware = applyMiddleware(thunkMiddleware, logger);
  const store = createStore(persistedReducer, initialState, middleware);

  const persistor = persistStore(store);

  return {store, persistor};
};
