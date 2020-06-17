import React from 'react';
import {
  BrowserRouter,
  Route
} from "react-router-dom";
import Home from './components/Home';
import NasaPhoto from './components/NASAPhoto';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
          <Route component={Home} path="/" exact />
          <Route component={NasaPhoto} path="/nasa-photo" />
      </div>
    </BrowserRouter>
  );
}

export default App;
