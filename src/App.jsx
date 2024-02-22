import React, { useState } from 'react';

import { Routes, Route, useLocation } from 'react-router-dom';
// components
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import MyCard from './components/MyCard/MyCard';
import Favorites from './components/Favorites/Favorites';

import './App.scss';
import SortButton from './components/SortButton/SortButton';

function App() {
  return (
    <>
      <Navbar />
      <SortButton />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/my-card" element={<MyCard />} />
        <Route path="/favorite" element={<Favorites />} />
      </Routes>
    </>
  );
}

export default App;
