import React from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import configureStore from './src/redux/store';
import NavigationStack from './src/navigation';

const {persistor, store} = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationStack />
      </PersistGate>
    </Provider>
  );
};

export default App;
