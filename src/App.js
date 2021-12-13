import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import './App.css';

export const AppContext = React.createContext({});



function App() {
  const [searchTerm, setSearchTerm] = useState('Alpharetta');

  const value = {
    searchTerm,
    setSearchTerm
  }


  return (
    <AppContext.Provider value={value}>
      <div className="mainContainer">
        <Home />
      </div>
    </AppContext.Provider>
  );
}

export default App;
