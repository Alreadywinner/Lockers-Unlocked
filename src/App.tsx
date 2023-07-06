import {
  HomePage,
  AboutPage,
  ContactPage,
  NFLPage,
  NBAPage,
  MLBPage,
  D1SportsPage,
  CollegeTeamsPage,
} from '@containers';
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
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/nfl" element={<NFLPage />} />
        <Route path="/nba" element={<NBAPage />} />
        <Route path="/mlb" element={<MLBPage />} />
        <Route path="/d1-sports" element={<D1SportsPage />} />
        <Route path="/college-teams" element={<CollegeTeamsPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
