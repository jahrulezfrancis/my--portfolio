import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { LandingPage } from './Components/Homepage/Index';
import PageNotFound from './Components/Common/PageNotFound';
import NavBar from './Components/Common/NavBar';

function App() {
  return (
    <div className='app'>
      <NavBar />
      <Routes>
        <Route path='/'>
          <Route index element={<LandingPage />} />
          <Route path='*' element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
