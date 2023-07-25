import {
  HomePage,
  AboutPage,
  ContactPage,
  NFLPage,
  NBAPage,
  MLBPage,
  CollegeTeamsPage,
  AddNewItemsPage,
  PrivateRoute,
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
        <Route path="" element={<PrivateRoute />}>
          <Route path="/nfl" element={<NFLPage />} />
        </Route>
        <Route path="" element={<PrivateRoute />}>
          <Route path="/nba" element={<NBAPage />} />
        </Route>
        <Route path="" element={<PrivateRoute />}>
          <Route path="/mlb" element={<MLBPage />} />
        </Route>
        <Route path="" element={<PrivateRoute />}>
          <Route path="/college-teams" element={<CollegeTeamsPage />} />
        </Route>
        <Route path="" element={<PrivateRoute />}>
          <Route path="/add-new" element={<AddNewItemsPage />} />
        </Route>
      </Routes>
      <Footer />
    </LocalStorageDataProvider>
  );
}

export default App;
