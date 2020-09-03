import React from 'react';
import HarLayout from './components/har';
import { har } from './components/store';
import './App.scss';

function App() {
  return (
    <HarLayout har={har} />
  );
}

export default App;
