import React from 'react';
import DataContextProvider from './contexts/DataContext';
import MealsList from './components/MealsList';
import CategoryList from './components/CategoryList';
function App() {
  return (
    <div className="App">
      <DataContextProvider>
        <MealsList />
        <CategoryList />
      </DataContextProvider>
    </div>
  );
}

export default App;
