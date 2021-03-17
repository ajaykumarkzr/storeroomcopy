import React from 'react';
import Appnavigator from './src/navigation/appnavigator';
import { enableScreens } from 'react-native-screens';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './src/components/store/reducers/shopdata';

enableScreens();

const initialStore = {
  shops: [],
};

const store = createStore(reducer, initialStore);

const App = () => {
  return (
    <Provider store={store}>
      <Appnavigator />
    </Provider>
  );
};

export default App;
