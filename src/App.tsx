import React from 'react';
import './App.css';

import { Counter } from './components/counter';
import { Provider, rootStore } from './models/root/root'

function App() {
  return (
    <Provider value={rootStore}>
      <div className="App">
        <h1>Dan Nguyen learning MobX State Tree</h1>
      </div>
      <Counter />

    </Provider>
  );
}

export default App;
