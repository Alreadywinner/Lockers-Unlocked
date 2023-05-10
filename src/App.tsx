import { Button } from 'components';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Button text="testing" className="bg-red" />} />
      {/* <Route path="/about" element={<AboutPage />} /> */}
    </Routes>
  );
}

export default App;
