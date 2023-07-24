import {
  HomePage,
  AboutPage,
  ContactPage,
  NFLPage,
  NBAPage,
  MLBPage,
  CollegeTeamsPage,
  AddNewItemsPage,
} from '@containers';
import { Footer, NavBar } from 'components';
import { LocalStorageDataProvider } from '@context';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <LocalStorageDataProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/nfl" element={<NFLPage />} />
        <Route path="/nba" element={<NBAPage />} />
        <Route path="/mlb" element={<MLBPage />} />
        <Route path="/college-teams" element={<CollegeTeamsPage />} />
        <Route path="/add-new" element={<AddNewItemsPage />} />
      </Routes>
      <Footer />
    </LocalStorageDataProvider>
  );
}

export default App;
