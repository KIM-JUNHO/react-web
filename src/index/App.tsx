import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './App/Navbar';
import Main from './App/Main';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Main />
    </BrowserRouter>
  );
}
