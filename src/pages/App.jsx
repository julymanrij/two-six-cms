import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ClothingPage from './ClothingPage.jsx';
import TypeClothingPage from './TypeClothingPage.jsx';
import Menu from '../components/layout/Menu/Menu.jsx';
import CategoryPage from './CategoryPage.jsx';
import RolePage from './RolePage.jsx';
import UserPage from './UserPage.jsx';
import '../styles/App.css';
import ErrorLogPage from './ErrorLogPage.jsx';
import HomePage from './HomePage.jsx';
import ErrorBoundary from '../components/layout/ErrorBoundary.jsx';
import MasterDesignPage from './MasterDesignPage.jsx';

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Menu />
        <div className="container">
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/clothing" element={<ClothingPage />} />
              <Route path="/type-clothing" element={<TypeClothingPage />} />
              <Route path="/category" element={<CategoryPage />} />
              <Route path="/role" element={<RolePage />} />
              <Route path="/user" element={<UserPage />} />
              <Route path="/logs" element={<ErrorLogPage />} />
              <Route path="/master-design" element={<MasterDesignPage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
