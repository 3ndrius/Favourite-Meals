import React from 'react';
import DataContextProvider from './contexts/DataContext';
import Layout from './components/Layout';

function App() {
  return (
    <div className="App">
      <DataContextProvider>
        <Layout />
      </DataContextProvider>
    </div>
  );
}

export default App;
