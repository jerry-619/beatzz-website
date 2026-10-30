import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import Download from './pages/Download';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';

const SITE_URL = 'https://beatzz.vercel.app';

const ROUTE_SEO = {
  '/': {
    title: 'Beatzz - Free Music Streaming App with No Ads | Download APK',
    description: 'Beatzz is a minimalist, 100% ad-free music streaming app for Android. Stream YouTube Music in high quality with background play, offline downloads, and custom playlists for free.',
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  },
  '/download': {
    title: 'Download Beatzz APK - Latest Version & Release History',
    description: 'Download the latest Beatzz APK for Android. Enjoy 100% ad-free music streaming, offline downloads, background play, and view full release changelogs.',
    robots: 'index, follow',
  },
  '/privacy': {
    title: 'Privacy Policy | Beatzz Music Streaming App',
    description: 'Read the Beatzz Privacy Policy. Learn how Beatzz protects your privacy with zero personal data collection and local device storage.',
    robots: 'index, follow',
  },
  '/terms': {
    title: 'Terms of Service | Beatzz Music Streaming App',
    description: 'Read the Terms of Service and user agreement for the Beatzz ad-free music streaming application.',
    robots: 'index, follow',
  },
};

function SEOManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    const normalizedPath = pathname === '/' ? '/' : pathname.replace(/\/+$/, '');
    const seo = ROUTE_SEO[normalizedPath] || {
      title: '404 Page Not Found | Beatzz',
      description: 'The page you are looking for does not exist on Beatzz.',
      robots: 'noindex, nofollow',
    };
    const canonicalUrl = `${SITE_URL}${normalizedPath === '/' ? '/' : normalizedPath}`;

    document.title = seo.title;

    const setMeta = (selector, attr, value) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute(attr, value);
    };

    setMeta('meta[name="title"]', 'content', seo.title);
    setMeta('meta[name="description"]', 'content', seo.description);
    setMeta('meta[name="robots"]', 'content', seo.robots);
    setMeta('link[rel="canonical"]', 'href', canonicalUrl);
    setMeta('meta[property="og:url"]', 'content', canonicalUrl);
    setMeta('meta[property="og:title"]', 'content', seo.title);
    setMeta('meta[property="og:description"]', 'content', seo.description);
    setMeta('meta[name="twitter:url"]', 'content', canonicalUrl);
    setMeta('meta[name="twitter:title"]', 'content', seo.title);
    setMeta('meta[name="twitter:description"]', 'content', seo.description);

    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/" 
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          } 
        />
        <Route 
          path="/download" 
          element={
            <PageTransition>
              <Download />
            </PageTransition>
          } 
        />
        <Route 
          path="/privacy" 
          element={
            <PageTransition>
              <Privacy />
            </PageTransition>
          } 
        />
        <Route 
          path="/terms" 
          element={
            <PageTransition>
              <Terms />
            </PageTransition>
          } 
        />
        <Route 
          path="*" 
          element={
            <PageTransition>
              <NotFound />
            </PageTransition>
          } 
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <SEOManager />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
