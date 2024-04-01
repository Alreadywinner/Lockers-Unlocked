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
  Profile,
  AdminPage,
  PaymentPage,
  CompletionPage,
} from '@containers';
import { Footer, NavBar } from 'components';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="max-w-full overflow-x-hidden">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/nfl" element={<NFLPage />} />
        <Route path="/nba" element={<NBAPage />} />
        <Route path="/mlb" element={<MLBPage />} />
        <Route path="/college-teams" element={<CollegeTeamsPage />} />
        <Route path="" element={<PrivateRoute />}>
          <Route path="/add-new" element={<AddNewItemsPage />} />
        </Route>
        <Route path="" element={<PrivateRoute />}>
          <Route path="/payment" element={<PaymentPage />} />
        </Route>
        <Route path="" element={<PrivateRoute />}>
          <Route path="/completion" element={<CompletionPage />} />
        </Route>
        <Route path="" element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="" element={<PrivateRoute />}>
          <Route path="/admin" element={<AdminPage />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
