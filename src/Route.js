import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Assets/Components/Header';
import Footer from './Assets/Components/Footer';
import ScrollToTop from './Assets/Components/ScrollToTop';

const Home = lazy(() => import('./Assets/Components/Pages/Home'));
const About = lazy(() => import('./Assets/Components/Pages/About'));
const Contact = lazy(() => import('./Assets/Components/Pages/Contact'));
const Portfolio = lazy(() => import('./Assets/Components/Pages/Portfolio'));
const Issue = lazy(() => import('./Assets/Components/Pages/Issue'));
const Advisory = lazy(() => import('./Assets/Components/Pages/Advisory'));
const Underwriting = lazy(() => import('./Assets/Components/Pages/Undewriting'));
const Download1 = lazy(() => import('./Assets/Components/Pages/Downloand1'));
const Download2 = lazy(() => import('./Assets/Components/Pages/Download2'));

const PageLoader = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <div className="page-wrapper">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services/portfolio" element={<Portfolio />} />
            <Route path="/services/issue-management" element={<Issue />} />
            <Route path="/services/corporate-advisory" element={<Advisory />} />
            <Route path="/services/underwriting" element={<Underwriting />} />
            <Route path="/downloads/public-offering" element={<Download1 />} />
            <Route path="/downloads/bo-forms" element={<Download2 />} />
            {/* Backward compatibility redirects */}
            <Route path="/services" element={<Portfolio />} />
            <Route path="/service2" element={<Issue />} />
            <Route path="/service3" element={<Advisory />} />
            <Route path="/service4" element={<Underwriting />} />
            <Route path="/download1" element={<Download1 />} />
            <Route path="/download2" element={<Download2 />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </BrowserRouter>
  );
}
