import React, { useEffect } from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import configureStore from './src/redux/store';
import NavigationStack from './src/navigation';
import SplashScreen from 'react-native-splash-screen';

const { persistor, store } = configureStore();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationStack />
      </PersistGate>
    </Provider>
  );
};

export default App;
