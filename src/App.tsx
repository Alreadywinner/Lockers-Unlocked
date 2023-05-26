import { HomePage, AboutPage } from '@containers';
import { Footer, NavBar } from 'components';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
