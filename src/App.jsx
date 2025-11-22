import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { lazy, Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorBoundary from './components/ErrorBoundary';
import './style.css';
import './responsive.css';

// Lazy load pages for better performance
const StartPage = lazy(() => import('./pages/StartPage'));
const MainPage = lazy(() => import('./pages/MainPage'));

// Loading component
const LoadingSpinner = () => (
  <div
    role="status"
    aria-live="polite"
    aria-label="Loading page content"
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontSize: '1.5rem',
      color: '#003566'
    }}
  >
    Loading...
  </div>
);

function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <Router>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<StartPage />} />
              <Route path="/main" element={<MainPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </Router>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;
