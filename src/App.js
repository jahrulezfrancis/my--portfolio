import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import PageNotFound from './Components/Common/PageNotFound';
import NavBar from './Components/Common/NavBar';
import Home from './Components/Homepage/Index';

function App() {
  return (
    <div className='app'>
      <NavBar />
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='*' element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
