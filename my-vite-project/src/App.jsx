// App.js
import React from 'react';
import DishList from './Components/DishList';
import CategoryList from './Components/CategoryList';
import CategoryDishes from './Components/CategoryDishes';
import NavTest from './Components/navTest';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
const App = () => {
  return (
 
      <Router>
        <Routes>
          <Route path="/" element={<CategoryList />} />
          <Route path="/categories" element={<CategoryDishes />} />
          <Route path="/dishes" element={<DishList />} />
          <Route path="/test" element={<NavTest />} />
        </Routes>
      </Router>

  );
};

export default App;
