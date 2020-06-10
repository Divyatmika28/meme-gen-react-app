import React from 'react';
import './style.css';

import Header from './Header';
import MemeGenerator from './MemeGenerator';

// Create two components : Header and Memegenerator
// Header will only display thinsg 
// Memegenerator will be calling APIs and holding to data

function App() {
  return (
   <div>
     <Header />
     <MemeGenerator />

   </div>
  );
}

export default App;
