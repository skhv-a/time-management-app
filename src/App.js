import React from 'react';

import Homepage from './pages/homepage/homepage.jsx';

import './App.css';

import { HomepageProvider } from './contexts/homepage/homepage.context';

const App = () => (
  <div className="App">
    <HomepageProvider>
      <Homepage />
    </HomepageProvider>
  </div>
);

export default App;
