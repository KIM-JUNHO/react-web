import React from 'react';
import Store from './store';

function App() {
  return (
    <Store.Provider>
      <div>Hello React</div>
    </Store.Provider>
  );
}

export default App;
