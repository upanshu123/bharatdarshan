import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

// 1. Pages
import Home from './pages/Home.jsx';
import PlaceDetails from './pages/PlaceDetails.jsx';
import Login from './pages/login.jsx'; 
import TopDestinations from './pages/TopDestinations.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import SearchResults from './pages/SearchResults'; // Imported here!
import PlanMyYatra from './pages/PlanMyYatra.jsx';

// 2. Global UI
import Navbar from './components/ui/Navbar.jsx';
import Footer from './components/ui/footer.jsx';

// 3. Protection Wrapper
import ProtectedRoute from './components/ProtectedRoute.jsx';

// --- ScrollToTop Component ---
// This component needs to be INSIDE <BrowserRouter> to work
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const RouteNavbar = () => {
  const { pathname } = useLocation();
  return <Navbar key={pathname} />;
};

const AppShell = () => {
  const location = useLocation();
  const hideFooter = location.pathname.startsWith('/login') || location.pathname.startsWith('/place/');

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 selection:bg-orange-100 selection:text-orange-900">
      <main className="flex-grow">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<><RouteNavbar /><Home /></>} />
          <Route path="/login" element={<><RouteNavbar /><Login /></>} />
          <Route path="/top-destinations" element={<><RouteNavbar /><TopDestinations /></>} />

          {/* Search */}
          <Route path="/search" element={<><RouteNavbar /><SearchResults /></>} />

          {/* PlaceDetails */}
          <Route path="/place/:id" element={<PlaceDetails />} />

          {/* Protected Routes */}
          <Route
            path="/plan"
            element={
              <>
                <RouteNavbar />
                <PlanMyYatra />
              </>
            }
          />

          <Route
            path="/contact"
            element={
              <ProtectedRoute>
                <RouteNavbar />
                <div className="px-4 md:px-10 py-24 text-center font-serif text-3xl text-slate-900">
                  Official Tourism Support Channel
                </div>
              </ProtectedRoute>
            }
          />
          {/* Privacy/Consent Route (no navbar to reduce visual distraction) */}
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
      </main>

      {!hideFooter && <Footer />}
    </div>
  );
};

function App() {
  return (
    // *** FIX: The Router must be the very first thing ***
    <BrowserRouter>
      <ScrollToTop />
      <AppShell />
    </BrowserRouter>
  );
}

export default App;