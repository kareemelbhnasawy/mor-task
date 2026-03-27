import { Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components/landing';
import { LandingPage } from './pages/LandingPage';
import { TestingBoard } from './pages/TestingBoard';
import { ComponentShowcase } from './pages/ComponentShowcase';

function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <LandingPage />
              <Footer />
            </>
          }
        />
        <Route path="/testing-board" element={<TestingBoard />} />
        <Route path="/components" element={<ComponentShowcase />} />
      </Routes>
    </div>
  );
}

export default App;
