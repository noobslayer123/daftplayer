import React from 'react';
import Provider from './Provider';
import Main from './components/Main/Main';

function App() {
  return (
    <Provider>
      <Main />
    </Provider>
  );
}

export default App;
